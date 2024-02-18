<template>
   <div>
      <v-data-table :headers="headers" :items="desserts" items-per-page="10">
         <template v-slot:top>
            <v-toolbar flat>
               <v-toolbar-title>Events</v-toolbar-title>
               <v-dialog v-model="dialog" max-width="900px">
                  <template v-slot:activator="{ props }">
                     <v-btn color="primary" variant="tonal" v-bind="props">
                        New Event
                     </v-btn>
                  </template>
                  <v-card>
                     <v-card-text>
                        <v-container>
                           <v-card-title>
                           <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                           <v-text-field v-model="editedItem.title" label="title" variant="outlined"></v-text-field>
                           <v-textarea
                              v-model="editedItem.body"
                              label="HTML Body"
                              auto-grow
                              variant="outlined"
                              rows="3"
                              row-height="15"
                              max-rows="9"
                              shaped
                           ></v-textarea>
                           <v-text-field v-model="editedItem.imgCover" label="Img Cover" variant="outlined"></v-text-field>
                           <v-row>
                              <v-col>
                                 <v-text-field v-model="editedItem.url" label="Url" variant="outlined"></v-text-field>
                              </v-col>
                              <v-col>
                                 <v-text-field v-model="editedItem.author" label="Author" variant="outlined"></v-text-field>
                              </v-col>
                           </v-row>
                           <v-select
                              v-model="editedItem.categories"
                              :items="categoriesItems"
                              label="Select Item"
                              multiple
                              variant="outlined"
                           >
                           </v-select>
                           <v-row>
                              <v-col>
                                 <v-text-field v-model="editedItem.date" label="Date" variant="outlined"></v-text-field>
                              </v-col>
                              <v-col>
                                 <v-text-field v-model="editedItem.updated_date" label="Updated_date" variant="outlined"></v-text-field>
                              </v-col>
                           </v-row>
                           <v-switch
                              v-model="editedItem.publisher"
                              inset
                              :label="`Publisher: ${editedItem.publisher.toString()}`"
                           ></v-switch>
                           <div class="body">
                              <editor v-model="editedItem.body" />
                           </div>

                           <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue-darken-1" variant="text" @click="() => close()">
                                 Cancel
                              </v-btn>
                              <v-btn color="blue-darken-1" variant="text" @click="() => save()">
                                 Save
                              </v-btn>
                           </v-card-actions>
                        </v-container>
                     </v-card-text>
                  </v-card>
               </v-dialog>
               <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                     <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="() => closeDelete()">Cancel</v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="() => deleteItemConfirm()">OK</v-btn>
                        <v-spacer></v-spacer>
                     </v-card-actions>
                  </v-card>
               </v-dialog>
            </v-toolbar>
         </template>
         <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="() => editItem(item)">
               mdi-pencil
            </v-icon>
            <v-icon size="small" @click="() => deleteItem(item)">
               mdi-delete
            </v-icon>
         </template>
         <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
               Reset
            </v-btn>
         </template>
      </v-data-table>
      <div class="notificationContainer">
         <v-slide-y-transition group>
            <v-alert v-for="(notification, index) in notifications" :key="index" :type="notification.type">
               {{ notification.message }}
            </v-alert>
         </v-slide-y-transition>
      </div>
   </div>
</template>

 
<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios"
import Editor from '@/components/Editor.vue'
import authHeader from '@/services/header.service'

const API_URL = import.meta.env.VITE_API_URL

interface INotification {
   type: "success" | "error",
   message: string,
}

export default defineComponent({
   components: {
      Editor,
   },
   data: () => ({
      dialog: false,
      dialogDelete: false,
      notifications: [] as INotification[],
      headers: [
         { title: 'Title', key: 'title' },
         { title: 'Data', key: 'updated_date' },
         { title: 'Actions', key: 'actions', sortable: false },
      ],
      categories: [],
      categoriesItems: [] as string[],
      desserts: [],
      editedIndex: -1,
      editedItem: {
         author: "",
         body: "",
         categories: [], 
         imgCover: "",
         publisher: true,
         updated_date: "",
         date: "",
         title: "",
         url: "",
      },
      defaultItem: {
         author: "",
         body: "",
         categories: [], 
         imgCover: "",
         publisher: true,
         updated_date: "",
         date: "",
         title: "",
         url: "",
      },
   }),

   computed: {
      formTitle() {
         return this.editedIndex === -1 ? 'New Event' : 'Edit Event'
      },
   },

   watch: {
      dialog(val) {
         val || this.close()
      },
      dialogDelete(val) {
         val || this.closeDelete()
      },
   },

   created() {
      this.initialize()
   },

   methods: {
      async initialize() {
         try {
            const resEvents = await axios.get(`${API_URL}/api/events/all`);
            this.desserts = resEvents.data.events

            const resCateg = await axios.get(`${API_URL}/api/categories`);
            this.categories = resCateg.data
            this.categoriesItems = this.categories.map((category:any) => { 
               return category._id
            }) as string[]
         }
         catch (error) {
            console.error(error)
            alert("Error!")
         }
      },

      editItem(item:any) {
         this.editedIndex = this.desserts.indexOf(item)
         this.editedItem = Object.assign({}, item)
         this.dialog = true
      },

      async deleteItem(item:any) {
         this.editedIndex = this.desserts.indexOf(item)
         this.editedItem = Object.assign({}, item)
         this.dialogDelete = true
      },

      async deleteItemConfirm() {
         this.desserts.splice(this.editedIndex, 1)
         const item = this.editedItem
         this.closeDelete()
         try {
            await axios.delete(`${API_URL}/api/events/${item._id}`, {
               headers: authHeader() 
            });
            this.addNotification({ type: "success", message: "Success Delete!" })
         }
         catch (error) {
            console.error(error)
            this.addNotification({ type: "error", message: "Error Delete!" })
         }
      },

      close() {
         this.dialog = false
         this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem) as any
            this.editedIndex = -1
         })
      },

      closeDelete() {
         this.dialogDelete = false
         this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
         })
      },

      async save() {
         const item = this.editedItem
         if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
            try {
               await axios.put(`${API_URL}/api/events/${item._id}`, item, {    
                  headers: authHeader() 
               });
               this.addNotification({ type: "success", message: "Success Save!" })
            }
            catch (error) {
               console.error(error)
               this.addNotification({ type: "error", message: "Error Save!" })
            }
         } else {
            console.log(item)
            this.desserts.unshift(item)
            try {
               await axios.post(`${API_URL}/api/events`, item, {    
                  headers: authHeader() 
               });
               this.addNotification({ type: "success", message: "Success Save!" })
            }
            catch (error) {
               console.error(error)
               this.addNotification({ type: "error", message: "Error Save!" })
            }
         }
         this.close()
      },

      addNotification(newNotification: INotification) {
         this.notifications.push(newNotification);
         setTimeout(() => {
            this.removeNotification(newNotification);
         }, 3000);
      },
      removeNotification(notification: any) {
         const index = this.notifications.indexOf(notification);
         if (index !== -1) {
            this.notifications.splice(index, 1);
         }
      },
   },
})
</script>


<style scoped lang='scss'>

.notificationContainer {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: grid;
  grid-gap: .5em;
  z-index: 99;
}

.body {
   position: relative;
   text-align: justify;
   border: 1px solid rgb(100, 100, 100);
   padding: 0 10px;
}

:deep(.tiptap) {
      position: relative;
      display: flex;
      flex-direction: column;
      text-align: justify;

      p {
         color: #585858;
         font-weight: normal;
         font-size: 1rem;
         margin: 0.5em 0;
         line-height: 1.7rem;
      }

      img { 
         width: calc(60% - 30px);
         margin: 15px auto;
         border-radius: 3px;

         @media (max-width: 640px) {
            width: calc(100% - 30px);
         }
      }

      p.is-editor-empty:first-child::before {
         color: #adb5bd;
         content: attr(data-placeholder);
         float: left;
         height: 0;
         pointer-events: none;
      }

      .tiptap p.is-empty::before {
         color: #adb5bd;
         content: attr(data-placeholder);
         float: left;
         height: 0;
         pointer-events: none;
      }

   }
</style>
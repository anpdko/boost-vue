<template>
   <div class="events_page">
      <HeaderApp :img="headerImg">
         EVENTS
      </HeaderApp>
      <div class='container'>
         <div v-if="$store.state.events.isLoading">
            <LoaderApp/>
         </div>

         <div v-else class="content">
            <div class="events">
            <div v-for="event in  $store.state.events.data " :key="event._id"
               class="event">
               <router-link :to="'/event/' + event.url" class="event_img">
                  <img :src="API_URL + '/static/images/' + event.imgCover" alt="title" />
                  <div class="effect">
                     <i class="bi bi-plus-lg"></i>
                  </div>
               </router-link>
               <div class="content">
                  <router-link :to="'/event/' + event.url">
                     <h3>{{ subText(event.title, 70) }}</h3>
                  </router-link>
                  <p class="body">{{ subText(event.body, 150) }}</p>
                  <!-- <div class="body" v-html="subText(event.body, 150)"></div> -->
               </div>
            </div>
         </div>

         <Pagination 
            :totalPages="$store.state.events.totalPages"
            :page="$store.state.events.currentPage"
            @page-changed="handlePageChanged"
         />
         </div>
      </div>
   </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import HeaderApp from '@/components/HeaderApp.vue';
import headerImg from "@/assets/header.jpg"
import Pagination from '@/components/Pagination.vue'

export default defineComponent({
   components: {
      HeaderApp, Pagination
   },
   data() {
      return {
         headerImg,
         API_URL: import.meta.env.VITE_API_URL,
         category: this.$route.params.urlCategory
      }
   },
   mounted() {
      this.fetchEvents()
   },
   methods: {
      async fetchEvents() {
         this.$store.commit('events/SET_CURRENT_PAGE', 1);
         await this.$store.dispatch('events/fetchEvents', {category: this.category});
      },
      async handlePageChanged(pageNumber: number) {
         this.$store.commit('events/SET_CURRENT_PAGE', pageNumber);
         await this.$store.dispatch('events/fetchEvents', {category: this.category});
      },
      subText(thml: string, num: number) {
         const text = thml.replace(/<[^>]*>/g, '');
         return text.length > num ? text.substring(0, num) + "..." : text;
      }
   },
})
</script>

<style scoped lang='scss'>
.events_page {
   .events {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin: 50px 0;

      @media (max-width: 640px) {
         gap: 30px;
         grid-template-columns: 1fr;
      }

      .event {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;
         margin-bottom: 10px;

         .event_img {
            width: 100%;
            height: 100%;
            max-height: 400px;
            position: relative;
            border-radius: 3px;
            overflow: hidden;

            img {
               width: 100%;
               height: 100%;
               object-fit: cover;
               object-position: center;
            }

            .effect {
               display: flex;
               align-items: center;
               justify-content: center;
               position: absolute;
               inset: 0;
               transition: 0.3s;
               background-color: rgba(0, 0, 0, 0.6);
               opacity: 0;
               cursor: pointer;

               i {
                  color: #fff;
                  font-size: 60px;
               }
            }
         }

         .event_img:hover {
            .effect {
               opacity: 1;
            }
         }

         .content {

            h3 {
               color: rgba(50, 50, 50, 1);
               font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, sans-serif;
               font-weight: bold;
               text-transform: uppercase;
               font-size: 1.57em;
               line-height: 1.3;
               word-wrap: break-word;
               transition: 0.3s;
               padding: 1rem 0;
            }

            h3:hover {
               color: #fe6a00;
               text-decoration: underline;
            }

            .body {
               margin: 0;
               line-height: 1.7;
               font-size: 15px;
               color: rgba(85, 85, 85, 1);
            }
         }
      }
   }
}
</style>
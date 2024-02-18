<template>
   <div class="navbar">
      <v-list>
         <v-card-title class="text-h5 text-center">Menu</v-card-title>
         <router-link v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item :value="item" color="primary">
            <template v-slot:prepend>
               <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title>{{ item.text }}</v-list-item-title>
         </v-list-item>
         </router-link>
      </v-list>

      <v-btn @click="logoutAdmin">
         Logout
      </v-btn>
   </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
   name: 'NavbarAdmin',
   data() {
      return {
         items: [
            { text: 'Events', icon: 'mdi-calendar-multiple', link: "/admin/events" },
            { text: 'Categories', icon: 'mdi-format-list-text', link: "/admin/categories" },
            { text: 'Images', icon: 'mdi-format-list-text', link: "/admin/images" },
            { text: 'User', icon: 'mdi-account', link: "" },
         ],
      }
   },
   methods: {
      logoutAdmin() {
         this.$store.dispatch('admin/logout')
         this.$router.push('/admin/auth')
      }
   }
})
</script>

<style scoped lang='scss'>
.navbar {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
}
</style>
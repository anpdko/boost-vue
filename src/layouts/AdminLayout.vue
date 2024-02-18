<template>
   <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
         <NavbarAdmin/>
      </v-navigation-drawer>
      <v-app-bar>
         <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

         <v-app-bar-title>Admin Boost</v-app-bar-title>
      </v-app-bar>

      <v-main>
         <router-view></router-view>
      </v-main>
   </v-app>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import NavbarAdmin from "../components/admin/NavbarAdmin.vue"

export default defineComponent({
   components: {
      NavbarAdmin
   },
   data: () => ({ 
      drawer: true 
   }),
})
</script>

<style scoped lang='scss'></style>
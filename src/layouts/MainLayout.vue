<template>
   <div>
       <NavbarApp />
      <main>
         <router-view></router-view>
      </main>
      <FooterApp/>
   </div>
</template>

<script lang='ts'>
   import { defineComponent } from 'vue'
   import NavbarApp from '../components/NavbarApp.vue';
   import FooterApp from '../components/FooterApp.vue';

   export default defineComponent({
   components: {
      NavbarApp,
      FooterApp
   }
   })
</script>

<style scoped lang='scss'>

</style>
<template>
   <div class="partners">
      <HeaderApp :img="headerImg">
         BOOST PARTNERS
      </HeaderApp>
      <div class="partners_cards">
         <div class='container'>
            <PartnersCards />
         </div>
      </div>
   </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import HeaderApp from '@/components/HeaderApp.vue';
import PartnersCards from '@/components/PartnersCards.vue';
import headerImg from '@/assets/header.jpg';

export default defineComponent({
   data() {
      return {
         headerImg
      }
   },
   components: {
      HeaderApp, PartnersCards
   }
})
</script>

<style scoped lang='scss'>
.partners {
   .partners_cards {
      margin-block: 80px 20px;
   }
}
</style>
<template>
   <div class="partners_cards">
      <a v-for="partner in partners" :href="partner.link" :key="partner.id" target="_blank">
         <div class="partner_card">
            <img :src="partner.img" :alt="'img' + partner.id" />
            <div>
               <h3>{{ partner.en.title }}  </h3>    
               <a class="event"  :href="partner.linkEvents" target="_blank"> <i class="bi bi-box-arrow-up-right"></i> events</a>
            </div>
         </div>
      </a>
      <a href="https://mon.gov.ua/ua">
         <div class="partner_card2">
            <img src="../assets/logo3.png" alt="img" />
         </div>
      </a>
   </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import listPartners from '../data/listPartners'

export default defineComponent({
   data() {
      return {
         partners: listPartners
      }
   }
})
</script>

<style scoped lang='scss'>
.partners_cards {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 40px;


   a {
      align-self: center;
      height: 100%;
   }

   .partner_card {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 20px;
      align-items: center;
      margin-bottom: 10px;

      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
         object-position: center;
      }

      .event{
         display: flex;
         gap:  6px;
         font-size: 15px;
         font-weight: 500;
         color: #b2b2b2;
         transition: 0.3s;

         &:hover {
            color: #fe6a00;
         }
      }
   }

   .partner_card2{
      img {
         width: 100%;
         object-fit: contain;
         object-position: center;
      }
   }
}
</style>
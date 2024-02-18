<template>
   <div class="partners">
      <div class="content">
         <h2>BOOST PARTNERS</h2>
         <h3>UNIVERSITIES FROM 4 COUNTRIES TAKE PART IN THE PROJECT</h3>
      </div>
      <PartnersCards/>
      <div class="btns">
         <ButtonApp type="link" to="/about">ABOUT BOOST</ButtonApp>
      </div>
   </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import PartnersCards from "@/components/PartnersCards.vue"

export default defineComponent({
   components: {
      PartnersCards
   }
})
</script>

<style scoped lang='scss'>
.partners {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 100px 0 50px 0;

   .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      h2 {
         font-size: 3.2rem;
         font-weight: bold;
         text-transform: uppercase;
         line-height: 1.1em;
         letter-spacing: -2px;
         margin: 0;
      }

      h3 {
         color: #b2b2b2;
         font-size: 0.9rem;
         font-weight: 500;
         letter-spacing: 7px;
         margin: 20px 0 90px 0;
      }
   }

   .btns {
      margin: 80px 0 0 0;
   }
}
</style>
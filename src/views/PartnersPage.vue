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
  },
  mounted() {
    // Google Analytics 4
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-FYEMMNL7QB";
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FYEMMNL7QB');
   `;
    document.head.appendChild(inlineScript);
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

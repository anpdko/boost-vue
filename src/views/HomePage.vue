<template>
  <div>
    <HeaderMain/>
    <InfoCardsMain/>
    <SectionTitle>
      The target country is Ukraine, and the project partner countries are Estonia, Poland, Slovenia
    </SectionTitle>
    <div className="container">
      <Partners/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HeaderMain from '@/components/HeaderMain.vue';
  import InfoCardsMain from '@/components/InfoCardsMain.vue';
  import SectionTitle from '@/components/SectionTitle.vue';
  import Partners from '@/components/Partners.vue'

  export default defineComponent({
    components: {
      HeaderMain,
      InfoCardsMain,
      SectionTitle,
      Partners
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


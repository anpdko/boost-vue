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
    }
  })
</script>


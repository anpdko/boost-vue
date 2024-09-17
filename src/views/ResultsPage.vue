<template>
  <div class="results">
    <HeaderApp :img="headerImg">
      BOOST RESULTS
    </HeaderApp>
    <div class='container'>
      <div class="content">
        <center><h4>The title text of this page. This page contains the results of the project.</h4></center>
        <p><b>The description text of this page, the description text of the results offered for review on this page.</b></p>
        <p>The description text of this page, the description text of the results offered for review on this page.</p>
        <!--<p>The description text of this page, the description text of the results offered for review on this page.</p>
        <p>The description text of this page, the description text of the results offered for review on this page.</p>
        <p>The description text of this page, the description text of the results offered for review on this page.</p>
        <p>The description text of this page, the description text of the results offered for review on this page.</p>-->
      </div>
      <div class="results-section">
        <ResultCard v-for="(result, index) in results"
                    :key="index"
                    :title="result.title"
                    :description="result.description"
                    :fileLink="result.fileLink" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue';
  import HeaderApp from '@/components/HeaderApp.vue';
  import ResultCard from '@/components/ResultCard.vue';
  import headerImg from "@/assets/header.jpg";

  export default defineComponent({
    data() {
      return {
        headerImg,
        results: [
          {
            title: "Deliverable 1",
            description: "Deliverable description",
            fileLink: "https://boost.mspu.edu.ua/"
          },
          {
            title: "Deliverable 2",
            description: "Deliverable description",
            fileLink: "https://boost.mspu.edu.ua/"
          },
          {
            title: "Deliverable 3",
            description: "Deliverable description",
            fileLink: "https://boost.mspu.edu.ua/"
          }
        ]
      }
    },
    components: {
      HeaderApp,
      ResultCard
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
  });
</script>

<style scoped lang='scss'>
  .results {
    .content {
      text-align: justify;
      margin: 50px 0;

      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        color: #7A7A7A;
        font-weight: normal;
        font-size: 0.9rem;
        line-height: 1.7;
      }
    }

    .results-section {
      margin-top: 30px;
    }
  }
</style>

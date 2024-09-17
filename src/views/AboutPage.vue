<template>
   <div class="about">
      <HeaderApp :img="headerImg">
         ABOUT BOOST
      </HeaderApp>
      <div class='container'>
         <div class="content">
            <center><h4>EU-FUNDED INITIATIVE TO TRANSFORM SMALL LOCAL UNIVERSITIES IN UKRAINE</h4></center>
            <p><b>A transformative initiative funded by the European Union is set to innovate the educational landscape in small local universities across Ukraine. The project, commencing on March 1, 2023, and running through February 28, 2025, aims to boost the capacity of six higher education institutions through the introduction of innovative practices in learning and work approaches.</b></p>
            <p>Over the next two years, the project will focus on three pivotal directions: enhancing IT and tech capacity, promoting student-centered and digital learning practices, and fostering international cooperation and grant management skills.</p>
            <p>Led by Narva College of Tartu University, Estonia, the consortium comprises 10 partners from Estonia, Slovenia, Poland, and Ukraine. Notably, six of these partners are participating in an Erasmus+ project for the first time. The collaborative effort seeks to bridge the gap between local Ukrainian universities and European peers, intending to facilitate in the future increased international cooperation in education, science, and research.</p>
            <p>The challenges posed by the COVID-19 pandemic and the ongoing Russian aggression in Ukraine have disrupted traditional learning and teaching practices, administrative workflows, and technical operations in Ukrainian educational institutions. While numerous adaptations have been made, they often lack consistency and strategic planning or support at the administrative and state levels. The challenging situation in Ukraine underscores an urgent need for swift technological progress, advanced digital learning, and teaching skills tailored to diverse educational formats. Additionally, there is a critical imperative for increased internationalization of education. This strategic focus aims to facilitate a seamless transition into the European educational sphere when Ukraine attains EU membership. </p>
            <p>The BOOST initiative aims to cultivate a new generation of academic and non-academic staff apt for utilizing innovative tools, fostering didactical open-mindedness, embracing digitalization, prioritizing student-centered learning approaches, and promoting lifelong learning.</p>
            <p>The project, co-funded by the Erasmus+ KA2 Programme of the European Union, is expected to build the capacity of small local universities, transforming them into high-standard educational and community centers. The consortium includes three European universities, six Ukrainian universities, and the Ministry of Education and Science of Ukraine as an associated partner.</p>
         </div>
      </div>
   </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import HeaderApp from '@/components/HeaderApp.vue';
import headerImg from "@/assets/header.jpg"

export default defineComponent({
   data(){
      return {
         headerImg
      }
   },
   components: {
      HeaderApp
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
.about {

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

      img {
         width: calc(50% - 30px);
         margin: 15px;
      }
   }
}</style>

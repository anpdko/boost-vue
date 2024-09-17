<template>
  <div class="contacts">
    <HeaderApp :img="headerImg">
      BOOST PARTNERS
    </HeaderApp>
    <div class="container">
      <div class="list">
        <div class="item" v-for="contact in contacts" :key="contact.id">
            <h3>
                <span class="name">{{ contact.en.name }}</span> - <span>{{ contact.en.job }}</span>
            </h3>
            <p class="univ">{{contact.en.university}}</p>
              <p v-for="email in contact.email" :key="email">
                <a class="email" :href="'mailto:' + email">{{email}}</a>
              </p>   
          </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import headerImg from '@/assets/header.jpg';
import HeaderApp from '@/components/HeaderApp.vue';
import contacts from '@/data/contacts'
import { IContacts } from '@/data/contacts'

export default defineComponent({
  data() {
      return {
         headerImg,
         contacts: contacts as IContacts[]
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

<style lang='scss'>
.contacts {

   .list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 4rem 0 2rem 0;
      gap: 1.5625rem;

      @media (max-width: 900px) {
         grid-template-columns: 1fr;
      }

      .item {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         justify-content: flex-start;
         transition: 0.4s;
         color: #353535;
         border-left: 1px solid #c5c5c5;
         padding: 0 0 0 1.2rem;

         @media (max-width: 520px) {
            padding: 0 0 0 0.8rem;
         }

         h3 {
            transition: 0.3s;
         }

         * {
            margin: 0;
         }

         .univ {
            padding: 0.65rem 0;
            color: #5b5b5b;
         }

         .email {
            display: block;
            padding: 0.2rem 0;
         }

         a {
            display: inline-block;
            transition: 0.5s;
            position: relative;
            padding: 7px 0;
         }

         a:after {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: #fe6a00;
            content: "";
            transition: width 0.3s ease-out;
         }

         a.active {
            color: #fe6a00;

            &::after {
               width: 100%;
            }
         }

         a:hover:after,
         a:focus:after {
            width: 100%;
         }

         a:hover {
            color: #fe6a00;

            &::before {
               width: 100%;
            }
         }

      }

      .item:hover {
         transform: translateX(0.6rem);
      }
   }
}
</style>

<template>
   <footer class="footer">
      <div class='container'>
         <div class="footer_list">
            <div class="box_logo">
               <img class="logo1" src="../assets/logo2.jpg" alt="logo1" />
               <img class="logo2" src="../assets/logo1.webp" alt="logo2" />
               <img class="logo1" src="../assets/logo3.png" alt="logo3" />
            </div>
            <div class="col">
               <h3>HEADINGS</h3>
               <ul>
                  <li v-for="item in list" :key="item.id">
                     <router-link :to="item.link" :class="{ 'active': $route.path === item.link }">
                        {{ item.title }}
                     </router-link>
                  </li>
               </ul>
            </div>

            <div class="col latest_posts">
               <h3>LATEST POSTS</h3>
               <ul>
                  <li><router-link to="/event/bilat-briefing-pol-ped">Відбувся білатеральний брифінг представників Полтавського педагогічного з проєктним офіцером Європейської комісії за міжнародним проєктом Erasmus+ КА2</router-link></li>
                  <li><router-link to="/event/2023-may-kickoff-meeting">Kick-off meeting 15-18 May, 2023</router-link></li>
               </ul>
            </div>

            <div class="col">
               <h3>MODERATORS</h3>
               <ul>
                  <li>Oleksandr Pavlenko</li>
                  <li>Alina Maslova</li>
                  <li>Andrii Priadko</li>
                  <li>Yehor Markov</li>
               </ul>
            </div>

            <div class="col">
               <h3>MODERATORS</h3>
               <ul>
                 <li>Oleksandra Golovko Tartu University Narva College, Estonia<a href="emeil:oleksandra.golovko@ut.ee"> oleksandra.golovko@ut.ee</a></li>
               </ul>
            </div>
         </div>
      </div>
      <div class="bottom_footer">
         <div class="container">
            <div class="bottom_footer_content">
               <div class="left">
                  Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do
                  not necessarily reflect those of the European Education and Culture Agency (EACEA). Neither the European
                  Union nor the granting authority can be held responsible for them
               </div>
               <ul class="social">
                  <li>
                     <a target="_blank" href=' https://www.facebook.com/boostUkraine/'>
                        <i class="bi bi-facebook"></i>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import listNavbar from '../data/listNavbar'

export default defineComponent({
   name: "FooterApp",
   data() {
      return {
         list: listNavbar
      }
   }
})
</script>

<style scoped lang="scss">
.footer {
   .footer_list {
      margin: 100px 0 50px 0;
      display: grid;
      grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
      gap: 30px;

      @media (max-width: 920px) {
         grid-template-columns: 2fr 1fr 1fr;
         margin: 50px 0 50px 0;
      }

      @media (max-width: 720px) {
         grid-template-columns: 2fr 1fr;
         margin: 50px 0 50px 0;
      }

      @media (max-width: 460px) {
         grid-template-columns: 1fr 1fr 1fr;

         .latest_posts {
            grid-column: 1 / 4;
            order: 2;
         }
      }

      a {
         color: #535353;
         transition: 0.2s;
      }
      a:hover{
         color: #fe6a00;
      }

      .box_logo {
         .logo1 {
            width: 100%;
            max-width: 300px;
         }

         .logo2 {
            width: 100%;
            max-width: 200px;
         }

         @media (max-width: 460px) {
            grid-column: 1 / 5;
         }
      }

      .col {
         display: flex;
         flex-direction: column;
         gap: 1rem;

         h3 {
            font-size: 0.8rem;
            line-height: 1.4em;
            color: #222;
            text-align: left;
         }

         ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;

            li {
               font-size: 0.8rem;
               list-style: none;
               color: #535353;
               line-height: 1.6667em;
            }
         }
      }
   }

   .bottom_footer {
      background-color: #c6c6c6;

      .bottom_footer_content {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 20px 0;
         gap: 20px;
         font-size: 0.8rem;

         .left {
            max-width: 500px;
         }

         .social {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;

            li {
               list-style: none;

               i {
                  font-size: 1.3rem;
               }
            }
         }
      }

   }
}
</style>

<template>
   <HeaderApp :img="headerImg">
      EVENTS
   </HeaderApp>
   <div class="container">
      <ul class="categories" v-if="categories.length > 0 && !isLoadingCategories" >
         <li class="category">
            <router-link to="/events">
               <div class="box-data">
                  <div class="title-data">-</div>
                  <svg class="triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" preserveAspectRatio="none">
                     <path d="M0 81C0 83.2091 1.79086 85 4 85H14.3418C15.5099 85 16.6196 84.4894 17.3796 83.6024L83.3439 6.60235C85.5669 4.00745 83.7231 0 80.3062 0H4C1.79086 0 0 1.79086 0 4V81Z"/>
                  </svg>
               </div>
               <h3 class="title">All Boost Events</h3>
            </router-link>
         </li>
         <li v-for="category in categories" class="category" :key="category._id">
            <router-link :to="'/events/' + category._id">
               <div class="box-data">
                  <div class="title-data">
                     {{ category.data }}
                  </div>
                  <svg class="triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" preserveAspectRatio="none">
                     <path d="M0 81C0 83.2091 1.79086 85 4 85H14.3418C15.5099 85 16.6196 84.4894 17.3796 83.6024L83.3439 6.60235C85.5669 4.00745 83.7231 0 80.3062 0H4C1.79086 0 0 1.79086 0 4V81Z"/>
                  </svg>
               </div>
               <h3 class="title">
                  {{ category.title }}
               </h3>
            </router-link>
         </li>
      </ul>
      <div v-else-if="isLoadingCategories">
         <LoaderApp/>
      </div>
      <div v-else>Error</div>
   </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import HeaderApp from '@/components/HeaderApp.vue';
import headerImg from "@/assets/header.jpg"
import axios from 'axios';

interface ICategory {
   _id: string;
   data: string;
   published_date: string;
   title: string;
   updated_date: string;
   url: string;
}

export default defineComponent({
   components: {
      HeaderApp
   },
   data() {
      return {
         headerImg,
         categories: [] as ICategory[],
         isLoadingCategories: false,
         API_URL: import.meta.env.VITE_API_URL,
      }
   },
   mounted() {
      this.fatchCategories()
   },
   methods: {
      async fatchCategories(){
         try{
            this.isLoadingCategories = true;
            const res = await axios.get(this.API_URL + "/api/categories")
            if(res.status === 200 && res.data.length > 0){
               this.categories = res.data
            }
         }
         catch(e) {
            console.log(e)
         }
         finally {
            this.isLoadingCategories = false;
         }
      }
   }
})
</script>

<style scoped lang='scss'>
.categories {
   margin: 70px 0;
   display: flex;
   flex-direction: column;
   gap: 40px;

   .category {
      list-style: none;
      border-radius: 5px;
      border: 1px solid #1E1E1E;
      box-shadow: 3px 4px 4.5px 0px rgba(0, 0, 0, 0.10);
      transition: 0.3s;
      margin-left: 40px;
      padding-left: 175px;
      height: 100%;
      position: relative;

      .box-data {
         box-shadow: -3px 4px 4.5px 0px rgba(0, 0, 0, 0.20);
         position: absolute;
         top: -7px;
         bottom: -7px;
         left: 0;
         width: 160px;

         padding: 0 20px;
         margin-left: -40px;
         background-color: #3957FF;
         transition: 0.3s;
         color: #fff;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 5px 0 0 5px;

         .title-data {
            font-size: 18px;
            font-weight: 700;
         }

         .triangle {
            transition: 0.3s;
            width: 40px;
            height: calc(100%);
            display: block;
            position: absolute;
            bottom: 0;
            left: calc(100% - 6px);
            fill: #3957FF;

            path {
               position: absolute;
            }
         }
      }

      .title {
         display: flex;
         align-items: center;
         font-size: 18px;
         padding: 15px 30px 15px 0;
         min-height: 65px;
         transition: 0.2s;
      }
   }

   .category:hover{
      box-shadow: -3px 4px 4.5px 0px rgba(0, 0, 0, 0.20);
      

      .box-data {
         transform: translateX(10px);
         box-shadow: -3px 4px 4.5px 0px rgba(0, 0, 0, 0.30);
      }

      .title {
         color: #fe6a00;
         transform: translateX(4px);
      }
   }
}
</style>
<template>
   <div class="event_post">
      <HeaderApp :img="getUrlImgCover">
         {{ event?.title }}
      </HeaderApp>
      <div className='container'>
         <div class="body" v-html="event?.body"></div>
      </div>
   </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import HeaderApp from '@/components/HeaderApp.vue';
import headerImg from "@/assets/header.jpg"
import { IEvent } from "@/types/store"

export default defineComponent({
   components: {
      HeaderApp
   },
   data() {
      return {
         url: this.$route.params.url,
         API_URL: import.meta.env.VITE_API_URL,
         event: null as IEvent | null | undefined
      }
   },
   computed: {
      getUrlImgCover() {
         if (!this.event?.imgCover) {
            return headerImg;
         }
         const API_URL = import.meta.env.VITE_API_URL
         return `${API_URL}/static/images/${this.event?.imgCover}`
      }
   },
   mounted() {
      this.fetchEventPost()
   },
   methods: {
      async fetchEventPost() {
         try {
            const events: IEvent[] = this.$store.state.events.data
            if (events.length) {
               this.event = events.find(event => event.url === this.url);
            }
            if (!this.event) {
               await this.$store.dispatch('events/fetchEvent', { url: this.url });
               this.event = this.$store.state.events.data[0]
            }
         }
         catch (e) {
            console.error(e)
         }
      }
   }
})
</script>

<style lang='scss'>
.event_post {

   h1 {
      font-size: 2.5rem !important;

      @media (max-width: 1080px) {
         font-size: 2rem !important;
      }
   }

   .body {
      margin: 50px 0;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: justify;

      p {
         align-self: flex-start;
         display: block;
         color: #585858;
         font-weight: normal;
         font-size: 1rem;
         margin: 0.5em 0;
         line-height: 1.7rem;
      }

      img { 
         width: calc(60% - 30px);
         margin: 15px;
         border-radius: 3px;

         @media (max-width: 640px) {
            width: calc(100% - 30px);
         }
      }
   }
}
</style>
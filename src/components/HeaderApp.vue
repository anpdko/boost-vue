<template>
   <header class="header">
      <div class="box_img black">
         <img class="header_img" :src="img" alt="header" />
      </div>

      <div class="box_content container">
         <h1>
            <slot></slot>
         </h1>
      </div>
   </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
   props: {
      img: {
         type: String,
         required: true
      }
   }
})
</script>

<style scoped lang='scss'>
header {
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;

   .box_img {
      position: absolute;
      inset: 0;
      user-select: none;

      img.header_img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         // object-position: center;
         position: absolute;
         inset: 0;
      }

      &::before {
         content: "";
         position: absolute;
         display: block;
         inset: 0;
         z-index: 1;
      }
   }

   .box_img.color::before {
      background: rgba(82, 57, 196, 0.45);
      background: linear-gradient(0deg,
            rgba(65, 9, 9, 0.45) 0%,
            rgba(56, 39, 133, 0.45) 100%);
   }

   .box_img.black::before {
      background: rgba(0, 0, 0, 0.6);
   }

   .box_img.none::before {
      background: transparent;
   }

   .box_content {
      position: relative;
      height: 100%;
      z-index: 2;
      // inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 30px;
      justify-content: center;
      color: #fff;
      padding: 10rem 10px 10rem 10px;

      @media (max-width: 800px) {
         padding: 3rem 10px 10rem 10px;
      }

      h1 {
         padding: 0;
         margin: 0;
         text-transform: uppercase;
         font-size: 3.6rem;
         text-shadow: 0px 0px 5px rgba(0,0,0,0.65);

         @media (max-width: 700px) {
            font-size: 3rem;
         }
      }

      p {
         color: rgba(255, 255, 255, 0.8);
         font-size: 1.1rem;
         line-height: 1.5;
         font-weight: 300;
         letter-spacing: 0.2px;
         max-width: 500px;
         text-align: center;
         padding: 0;
         margin: 0;
         padding-bottom: 10px;
      }
   }

   .elementor_bottom {
      transform: rotate(180deg);
      overflow: hidden;
      position: absolute;
      left: 0;
      width: 100%;
      line-height: 0;
      z-index: 2;
      direction: ltr;
      bottom: -1px;

      svg {
         fill: #fff;
         width: 100%;
         height: 36px;
      }
   }
}

.header_main {
   min-height: 80vh;
}

.header {
   @media (max-width: 500px) {
      .box_content {
         h1 {
            font-size: 2rem !important;
         }
      }
   }

   .box_content {
      padding: 7rem 10px 10rem 10px !important;
   }
}
</style>

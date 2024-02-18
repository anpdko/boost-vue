<template>
   <section class="section_title">
      <div class="content container">
         <h2><slot></slot></h2>
      </div>
      
      <img src="../assets/back.png" alt="back" />

      <div class="filter_box"></div>
      <div class="elementor_shape_bottom" data-negative="true">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path class="elementor_shape_fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
         </svg>		
      </div>
   </section>
</template>

<script lang='ts'>
   import { defineComponent } from 'vue'
   
   export default defineComponent({

   })
</script>

<style scoped lang='scss'>
.section_title{
   position: relative;

   .content{
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3;
      padding-block: 9rem;

      h2{
         text-align: center;
         max-width: 1000px;
         color: #ffffff;
         font-size: 3.2rem;
         font-weight: 400;
         text-transform: none;
         line-height: 1.1em;
         letter-spacing: -2px;
         text-shadow: 0px 0px 10px rgba(0,0,0,0.55);
         color: #fff;

         @media (max-width: 600px) {
            font-size: 2.2rem;
         }
      }
   }

   img{
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: 1;
   }

   .filter_box{
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
   }

   .elementor_shape_bottom{
      position: absolute;
      bottom: -10px;
      width: 100%;
      z-index: 3;
      fill: #ffffff;

      svg{
         width: 100%;
         height: 80px;
      }
   }
}
</style>
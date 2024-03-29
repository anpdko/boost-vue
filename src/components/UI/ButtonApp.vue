<template>
   <component 
      :is="type === 'link' ? 'router-link' : 'button'" 
      class="btn" 
      :to="to" 
      :class="[color, shadow]"
   >
      <slot></slot>
   </component>
</template>
 
<script lang="ts">
import { defineComponent, PropType } from 'vue'

type TypeType = "link" | "";
type ColorType = "blue" | "orange";
type TypeShadow = "shadow" | "";

export default defineComponent({
   name: 'ButtonApp',
   props: {
      type: {
         type: String as PropType<TypeType>,
         default: ""
      },
      to: {
         type: String,
         default: "/"
      },
      shadow: {
         type: String as PropType<TypeShadow>,
         default: ""
      },
      color: {
         type: String as PropType<ColorType>,
         default: "blue"
      },
   }
})
</script> 

<style scoped lang="scss">
.blue {
   background: #3957FF;

   background: {
      image: linear-gradient(45deg, #ff6900 50%, transparent 50%);
      position: 90%;
      size: 400%;
   }

   &:hover {
      background-position: 0;
      color: #fff;
   }
}

.orange {
   background: #ff6900;

   background: {
      image: linear-gradient(45deg, #3957FF 50%, transparent 50%);
      position: 100%;
      size: 400%;
   }

   &:hover {
      background-position: 0;
      color: #fff;
   }
}

.btn {
   position: relative;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   border-radius: 2px;

   text-decoration: none;
   padding: 21px 30px 20px 30px;
   font-size: 0.9rem;
   font-weight: bold;
   text-transform: uppercase;
   line-height: 1em;
   letter-spacing: 2px;
   border: 0;
   color: white;
   outline: none;
   cursor: pointer;

   transition: background 0.5s ease-in, color 0.4s;
}

.shadow {
   box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.57);
   letter-spacing: 5px;
}

.btn:after {
   display: block;
   position: absolute;
   left: 30px;
   bottom: 17px;
   width: 0;
   height: 2px;
   background-color: #fff;
   content: "";
   transition: width 0.3s ease-out;
}

.btn:hover:after,
.btn:focus:after {
   width: calc(100% - 62px);
}

.shadow:hover:after,
.shadow:focus:after {
   width: calc(100% - 65px);
}

.btn.icon {
   padding: 15px 22px;
}
</style>
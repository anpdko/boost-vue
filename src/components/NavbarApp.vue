<template>
   <div class="container_nav">
      <div class="box_nav">
         <div class="container">
            <nav class="nav">
               <router-link class="box_logo" to="/">
                  <img class="logo1" src="../assets/logo2.jpg" alt="logo1" />
                  <img class="logo2" src="../assets/logo1.webp" alt="logo2" />
                  <img class="logo3" src="../assets/logo3.png" alt="logo3"/>
               </router-link>
               <div class="toggle" :class="{active : !toggleActive}" @click="toggleActiveState">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div class="right" :class="{active : toggleActive}">
                  <ul class="main_menu">
                     <li v-for="item in list" :key="item.id">
                        <router-link 
                           :to="item.link"
                           :class="{ 'active': $route.path === item.link }"
                           @click="toggleActiveState"
                        >
                           {{ item.title }}
                        </router-link>
                     </li>
                     <!-- <li><button class="translation">EN</button></li> -->
                  </ul>
               </div>
            </nav>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import listNavbar from '../data/listNavbar'

export default defineComponent({
   data() {
      return {
         list: listNavbar,
         toggleActive: true
      }
   },
   methods: {
    toggleActiveState() {
      this.toggleActive = !this.toggleActive;
    }
  }
})
</script>

<style scoped lang="scss">
.container_nav {
  height: 100px;
    
  @media (max-width: 800px) {
    height: 90px;
  }
  @media (max-width: 400px) {
    height: 80px;
  }

  .box_nav {
    z-index: 10;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

    .nav {
      min-width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;

      @media (max-width: 940px) {
        display: grid;
        grid-template-columns: 1fr auto;
      }

      .box_logo {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .logo1 {
          height: 60px;
          @media (max-width: 800px) {
            height: 50px;
          }
          @media (max-width: 400px) {
            height: 40px;
          }
        }
        .logo2 {
          height: 50px;
          @media (max-width: 800px) {
            height: 40px;
          }
          @media (max-width: 400px) {
            height: 30px;
          }
        }
        .logo3 {
          height: 50px;
          padding-left: 20px;
          
          @media (max-width: 800px) {
            height: 40px;
          }
          @media (max-width: 400px) {
            height: 30px;
          }
        }

      }

      .right {
        @media (max-width: 940px) {
          width: 100%;
          grid-column: 1 / 4;
          transition: 0.5s;
          overflow: hidden;
          max-height: 100vh;

          &.active {
            max-height: 0vh;
          }
        }

        .main_menu {
          display: flex;
          align-items: center;
          gap: 30px;
          font-size: 1rem;

          @media (max-width: 940px) {
            flex-direction: column;
            padding: 20px 0 0 0;
            gap: 15px;
          }

          li {
            list-style: none;

            a {
              transition: 0.5s;
              position: relative;
              padding: 7px 0;
              white-space: nowrap
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

            button {
              font-size: 0.8rem;
              font-weight: 500;
              color: rgba(21, 21, 21, 1);
              background-color: #ffffff;
              border: 1px solid rgba(0, 0, 0, 0.699);
              display: inline-block;
              height: 1.8rem;
              padding: 0 10px;
              text-transform: uppercase;
              text-align: center;
              border-radius: 3px;
              transition: all 0.3s;
              cursor: pointer;
            }
            button:hover {
              background-color: #fe6a00;
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  .toggle {
    display: none;
    z-index: 101;
    position: relative;
    // padding: 10px 15px 30px 15px;
    // right: 15px;
    // top: 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
    transition: 0.5s;

    @media (max-width: 940px) {
      display: inline-flex;
    }

    span {
      width: 35px;
      background-color: #222222;
      height: 3px;
      transition: 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    .toggle.active > span:nth-of-type(2) {
      opacity: 0;
      transition: all 0.5s;
    }
    .toggle.active > span:nth-of-type(1) {
      transition: all 0.5s;
      transform: rotate(45deg) translate(5px, 5px);
    }
    .toggle.active > span:nth-of-type(3) {
      transition: all 0.5s;
      transform: rotate(-45deg) translate(10px, -9px);
    }
  }
}
</style>

<template>
   <div class="admin-auth">
      <form @submit.prevent="fetchLogin" class="form">
         <h1>Вхід</h1>
         <v-text-field 
            v-model="login.value" 
            :error-messages="$store.state.admin.error?.login || login.error" 
            :rules="login.rules" 
            label="login"
         ></v-text-field>
         <v-text-field 
            v-model="password.value" 
            :error-messages="$store.state.admin.error?.password || password.error" 
            :loading="$store.state.admin.isLoading"
            :rules="password.rules" 
            label="password" 
            type="password"
         ></v-text-field>
         <div class="btns">
            <v-btn size="large" type="submit" color="blue-darken-2" :loading="$store.state.admin.isLoading"> Увійти </v-btn>
         </div>
      </form>
   </div>
</template>

<script lang='ts'>
   import { defineComponent } from 'vue'
   
   export default defineComponent({
      data() {
         return {
            login: {
               value: "",
               error: "",
               rules: [
                  (v: string) => (!!v.trim()) || "Обов'язкове поле",
                  (v: string) => (v && v.length >= 3) || "Має бути більше 3 символів"
               ]
            },
            password: {
               value: "",
               error: "",
               rules: [
                  (v: string) => (!!v.trim()) || "Обов'язкове поле",
                  (v: string) => (v && v.length >= 3) || "Має бути більше 3 символів"
               ]
            }
         }
      },
      methods:{
         async fetchLogin() {
            // console.log(this.$store._actions)
            await this.$store.dispatch('admin/fetchLogin', { 
               login: this.login.value, 
               password: this.password.value
            });
            this.$router.push('/admin/events')
         }
      }
   })
</script>

<style scoped lang='scss'>
   .admin-auth{
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;

      .form{
         max-width: 400px;
         width: 100%;
         display: flex;
         flex-direction: column;
         gap: 0.7rem;

         h1{
            font-size: 2.5rem;
            padding-bottom: 0.8rem;
         }
         h1, .btns {
            display: flex;
            text-align: center;
            justify-content: center;
         }
      }
   }
</style>
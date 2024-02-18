import axios from 'axios'
import { ActionContext } from 'vuex';
import { IAdminState, IAdminError, IAdminData } from "@/types/store"
import { IRootState } from "@/store"
import authHeader from '../services/header.service'

const API_URL = import.meta.env.VITE_API_URL 

export default {
   state: ():IAdminState => ({
      data: null,
      isLoggedIn: false,
      isLoading: false,
      error: null
   }), 
   getters: {

   },
   mutations: {
      SET_LOGGED_IN: (state: IAdminState, isLoggedIn:boolean) =>{
         state.isLoggedIn = isLoggedIn;
      },
      SET_ERROR(state: IAdminState, error:IAdminError){
         state.error = error;
      },
      SET_ADMIN_DATA(state: IAdminState, data: any) {
         state.data = data;
       },
      SET_LOADING(state:IAdminState, isLoading: boolean) {
         state.isLoading = isLoading;
      },
   },
   actions: {
      async fetchIsLoggedIn({ commit }:ActionContext<IAdminState, IRootState>):Promise<boolean>{
         commit('SET_LOADING', true)
         try {
            const res = await axios.get(`${API_URL}/api/admin/islogged`, {    
               headers: authHeader() 
            })
            console.log(res)

            if (res.status === 200) {
               commit('SET_LOGGED_IN', true);
               console.log("tyt")
               return true;
            }
            else{
               throw new Error('Server error');
            }
         }
         catch (error: any) {
            console.log(error)
            commit('SET_LOADING', false)
            return false;
         }
      },
      async fetchLogin({ commit }:ActionContext<IAdminState, IRootState>,  params: { login: string, password: string }){
         commit('SET_LOADING', true)
         try {
            const { login, password } = params
            const res = await axios.post(`${API_URL}/api/admin/login`, {login, password})

            if (res.data.token) {
               localStorage.setItem("admin", JSON.stringify(res.data));
               commit('SET_ADMIN_DATA', res.data);
               commit('SET_LOGGED_IN', true);
            }
            else{
               throw new Error('Server error');
            }

         }
         catch (error: any) {
            console.log(error)
            if (error.response.status === 400) {
               commit('SET_ERROR', error.response.data.message);
            }

            commit('SET_LOADING', false)
         }
         finally {
            commit('SET_LOADING', false)
         }
      },
      logout({ commit }:ActionContext<IAdminState, IRootState>){
         localStorage.removeItem("admin");
         commit('SET_LOGGED_IN', false);
      }
   },
   namespaced: true
}
import axios from 'axios'
import { ActionContext } from 'vuex';
import { IEvent, IEventsState } from "@/types/store"
import { IRootState } from "./index"

const API_URL = import.meta.env.VITE_API_URL 

interface IParamsUrl{
   page: number;
   category?: string;
}

export default {
   state: (): IEventsState => ({
      data: [],
      category: null,
      currentPage: 1,
      totalPages: 0,
      isLoading: true,
   }),
   getters: {
      getEvents(state:IEventsState) {
         return state
      },
   },
   mutations: {
      SET_EVENTS(state:IEventsState, data: IEvent[]) {
         state.data = data;
      },
      SET_TOTAL_PAGE(state:IEventsState, totalPages: number) {
         state.totalPages = totalPages;
      },
      SET_CURRENT_PAGE(state: IEventsState, currentPage: number) {
         state.currentPage = currentPage;
      },
      SET_LOADING(state:IEventsState, isLoading: boolean) {
         state.isLoading = isLoading;
      },
   },
   actions: {
      async fetchEvents({ state, commit }:ActionContext<IEventsState, IRootState>, params: { category?: string } ) {
         commit('SET_LOADING', true)
         try {
            const paramsUrl:IParamsUrl = {
               page: state.currentPage,
               // category: '65a2f7899d4b34d7551c5165',
            };

            if(params?.category){
               paramsUrl.category = params.category
            }

            const res = await axios.get(`${API_URL}/api/events/`, {params: paramsUrl});
            if (res.status !== 200) {
               throw new Error('Server error');
            }
            commit('SET_EVENTS', res.data.books)
            commit('SET_TOTAL_PAGE', res.data.totalPages)
         }
         catch (error) {
            console.error(error)
         }
         finally {
            commit('SET_LOADING', false)
         }
      },
      async fetchEvent({ commit }:ActionContext<IEventsState, IRootState>, params: { url: string }){
         commit('SET_LOADING', true)
         try {
            const res = await axios.get(`${API_URL}/api/events/url/${params.url}`);
            if (res.status !== 200) {
               throw new Error('Server error');
            }
            commit('SET_EVENTS', [res.data])
         }
         catch (error) {
            console.error(error)
         }
         finally {
            commit('SET_LOADING', false)
         }
      }
   },
   namespaced: true
}
import { createStore } from 'vuex'
import eventsState from './eventsState'
import adminState from './adminState'
import { IEventsState, IAdminState } from "@/types/store"

export interface IRootState {
   events: IEventsState
   admin: IAdminState 
}


export default createStore<IRootState>({
   modules: {
      events: eventsState,
      admin: adminState
   }
})
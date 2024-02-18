import { IAdminData } from "@/types/store"

export default function authHeader() {
   const localAdmin = localStorage.getItem('admin');
   if(localAdmin){
      const admin = JSON.parse(localAdmin) as IAdminData
      if (admin && admin.token) {
         return { Authorization: 'Bearer ' + admin.token };
      }
   }
   return {};
}
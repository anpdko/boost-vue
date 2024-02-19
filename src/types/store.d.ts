
// Events

export interface IEvent{
   _id: string,
   title: string,
   author: string,
   imgCover: string,
   body: string,
   publisher: boolean,
   date: string,
   url: string,
   published_date: string,
   updated_date: string,
   __v?: number
}

export interface IEventsState {
   data: IEvent[];
   category: string | null;
   currentPage: number;
   totalPages: number;
   isLoading: boolean;
}

// Admin

export interface IAdminError {
   login?: string, 
   password?: string
}

export interface IAdminData {
   adminId: string,
   login: string,
   token: string
}

export interface IAdminState {
   data: IAdminData | null;
   isLoggedIn: boolean;
   isLoading: boolean;
   error: IAdminError | null;
}
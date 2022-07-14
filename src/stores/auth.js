import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'counter',
  persist: true,
  state: () => ({
    user: {},
    token: "",
   
   
  }),
  actions: {
         saveAuth(user, token, ){
            this.user = user
            this.token = token
         
          
           
         },
         destroy(){
            this.user = {}
            this.token = ""
         
          
         }
  }
})

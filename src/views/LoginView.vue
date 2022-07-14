<template>
       <div class="row mt-4">
           <div class="col-md-4 offset-md-4">
              <form @submit.prevent="handleSubmit">
              
                <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                          <div class="card-header bg-success rounded">
                            <h1 style="font-size:25px; font-weight:regular; margin-left: 85px;">User Login</h1>
                          
                          </div>
                          <hr>
                              <div class="card-body">
                                 <div class="mb-3">
                                <label for="email">Email</label>
                                <input type="email" id="email" class="form-control" v-model="user.email">
                               </div>

                               <div class="mb-3">
                                <label for="password">Password</label>
                                <input type="password" id="password" class="form-control" v-model="user.password">
                               </div>
                               <button type="submit" class="btn btn-success" style="position:relative; left:225px;">Login</button>
                              </div>


                          </div>
              </form>
           </div>
       </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
export default {
setup() {


     const authStore =  useAuthStore()
     const router = useRouter()
     const user = ref ({email:"", password:"",});
      
      async function handleSubmit(){
        await fetch('http://localhost:8000/api/login', {
           method: 'post',
           headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
           },
           body: JSON.stringify(user.value)
        }).then(response=>response.json())
        .then(data=>{
               if(data.status == 'success'){
                authStore.saveAuth(data.user, data.token)
                router.push('/profile')
               }else{
                alert(data.message)
               }
        })
       
        
      }

      return{
        user, handleSubmit
      }
 },
}
  

</script>
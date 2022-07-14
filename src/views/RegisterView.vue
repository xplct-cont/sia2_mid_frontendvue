<template>
    <div class="row mt-4">

        <div class="col-md-4 offset-md-4">
            <form @submit.prevent = "handleSubmit">
                     <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                          <div class="card-header bg-info rounded">
                            <h1 style="font-size:25px; font-weight:regular; margin-left: 50px;">User Registration</h1>
                          </div>

                          <div class="card-body">
                               <div class="mb-3">
                                <label for="name">Lastname</label>
                                <input type="text" id="lastname" class="form-control" v-model="user.lname">
                               </div>
                               <div class="mb-3">
                                <label for="name">Firstname</label>
                                <input type="text" id="firstName" class="form-control" v-model="user.fname">
                               </div>
                                <div class="mb-3">
                                <label for="email">Email</label>
                                <input type="email" id="email" class="form-control" v-model="user.email">
                               </div>
                                <div class="mb-3">
                                <label for="">Course</label>
                                <input type="text" id="course" class="form-control" v-model="user.course">
                               </div>
                                <div class="mb-3">
                                <label for="">Year</label>
                                <input type="text" id="year" class="form-control" v-model="user.year">
                               </div>
                                <div class="mb-3">
                                <label for="">Address</label>
                                <input type="text" id="address" class="form-control" v-model="user.address">
                               </div>
                                <div class="mb-3">
                                <label for="">Mobile Number</label>
                                <input type="text" id="mobile" class="form-control" v-model="user.mobile">
                               </div>
                                <div class="mb-3">
                                <label for="password">Password</label>
                                <input type="password" id="password" class="form-control" v-model="user.password">
                               </div>
                               <button type="submit" class="btn btn-success">Register</button>
                          </div>
                     </div>
                     
                     </form>
        </div>
       
    </div>
</template>


<script>
import {ref} from 'vue'
import {useAuthStore} from '../stores/auth'
import {useRouter} from 'vue-router'

export default {
  setup(){
     const user = ref({
      lname: "",
      fname:"",
      email: "",
      course:"",
      year:"",
      address:"",
      mobile: "",
      password: ""
      })

      const authStore = useAuthStore()
      const router = useRouter()

     async function handleSubmit(){
      await fetch("http://127.0.0.1:8000/api/register/" ,{
                  method: 'post',
                  headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(user.value)
                   }) .then(response=>response.json())
                  .then(data=>{
                    if(data.status=="success"){
                       authStore.saveAuth(data.user, data.token)
                       router.push('/')

                    } 
             })
         }

     return {
      user,
      handleSubmit
     }
  },
}
</script>
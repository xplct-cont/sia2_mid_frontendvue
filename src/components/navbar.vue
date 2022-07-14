<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-success ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sia2-Midterm</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item" v-if="token!=''">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
         <li class="nav-item" v-if="token!=''">
          <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
        </li>
         <li class="nav-item" v-if="token!=''">
          <RouterLink class="nav-link" to="/shouts">Shouts</RouterLink>
        </li>
         <li class="nav-item" v-if="token==''">
          <RouterLink class="nav-link" to="/login">Login</RouterLink>
        </li>
         <li class="nav-item" v-if="token!=''">
          <a class="nav-link" href="#" @click="logout">Logout</a>
        </li>
         <li class="nav-item" v-if="token==''">
          <RouterLink class="nav-link" to="/register">Register</RouterLink>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

export default {
    setup() {

        const authStore = useAuthStore()
        const router = useRouter()

        const { token } = storeToRefs(useAuthStore())

        async function logout(){
            await fetch('http://127.0.0.1:8000/api/logout',{
                method: 'post',
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + authStore.token
                }
            })
            .then(response=>response.json())
            .then(data=>{
                if(data.status == 'success'){
                    authStore.destroy()
                    router.push('/login')
                }
            })
        }

        return {
            logout,
            token
        }
    },
}
</script>

<style scoped>
li{
    position:relative;
    left: 720px;
}
</style>
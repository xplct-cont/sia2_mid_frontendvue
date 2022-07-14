<template>
    
     <div>
     </div>

    <div class="card shadow-lg p-3 mb-5 bg-light rounded" style="margin-top: 30px; width: 400px; position:relative; 
    left: 380px;">
        <div class="card-header rounded bg-success">
            <h1 style="font-size: 20px; color:white;">Current User</h1> 
        </div>

        <div class="card-body">
             Last Name: {{user.lname}} <br>
            <hr>
             First Name: {{user.fname}}
        </div>
    </div>

</template>


<script>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'


export default {
    
    // data:()=>{
    //        return{
    //         user:{}
    //        }
    // },


   async mounted(){
        await fetch('http://localhost:8000/api/user', {
            method:'get',
            headers: {
                 "Accept": "application/json",
                 "Authorization": "Bearer" + this.token
            }
        }).then(response=>response.json())
        .then(data=>{
               this.user = data
        })
           


   },


    setup(){
        const { user, token } = useAuthStore()
        const router = useRouter()

        if(token==''){
            router.replace('/login')
        }
        return{
            user,
            token

        }
    }
}
</script>



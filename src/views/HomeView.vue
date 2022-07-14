<template>
      <div>
    
      </div>
          <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="margin-top: 30px;">
            <div class="card-header">
              <h3 style="font-size:15px; font-weight:regular;">User Information</h3> 
            </div>

            <h2 style="font-size:20px;  position:fixed; left:390px;">Token: {{token}}</h2> 
            <hr>
            <table class="table-bordered text-center bg-success">
              <thead>
                <tr>
                  <th class="text-white">Last Name</th>
                  <th class="text-white">First Name</th>
                  <th class="text-white">Course</th>
                  <th class="text-white">Year</th>
                  <th class="text-white">Address</th>
                  <th class="text-white">Mobile Number</th>
                </tr>
              </thead>
              

             <tbody>
              <td class="text-white bg-secondary">{{user.lname}}</td>
              <td class="text-white bg-secondary">{{user.fname}}</td>
              <td class="text-white bg-secondary">{{user.course}}</td>
              <td class="text-white bg-secondary">{{user.year}}</td>
              <td class="text-white bg-secondary">{{user.address}}</td>
              <td class="text-white bg-secondary">{{user.mobile}}</td>



             </tbody>
            </table>
          
            </div>
          

</template>

<script>
import {useAuthStore} from '../stores/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {

    const { user, token } = useAuthStore()
    const router = useRouter()
     
    if(token==''){
      router.replace('/login')

    }

    return {
      user, token
    }
    
  },
}
</script>


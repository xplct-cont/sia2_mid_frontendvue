<template>
      <div>
      </div>
          <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="margin-top: 30px;">
            <div class="card-header">
              <h3 style="font-size:15px; font-weight:regular;">Recent Shouts</h3> 
            </div>
            <hr>
            <table class="table-bordered text-center bg-success">
              <thead>
                <tr>
                  <th class="text-white">User ID</th>
                  <th class="text-white">Shoutouts</th>
                  <th class="text-white">Tags</th>
                  
                </tr>
              </thead>

             <tbody>
              <tr v-for="shout in shouts" :key="shout.id">
              <td class="text-white bg-secondary">{{shout.user_id}}</td>
              <td class="text-white bg-secondary">{{shout.shoutout}}</td>
              <td class="text-white bg-secondary">{{shout.tags}}</td>
            </tr>


             </tbody>
            </table>
          
            </div>
          

</template>

<script>
import { storeToRefs } from "pinia";
import {useAuthStore} from '../stores/auth'
import { useRouter } from 'vue-router'
import { def } from "@vue/shared";

export default {
  data() {
    return {
      shouts: [],
      token: "",
    };
    
  },
  
  methods: {
    getData() {
      const authStore = useAuthStore();
      const router = useRouter();

      const { token } = storeToRefs(useAuthStore());
      this.token = token;

      fetch("http://localhost:8000/api/shouts/", {
        method: 'get',
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + authStore.token,
        },
      })
        .then((data) => data.json())
        .then((data) => (this.shouts = data))
        .catch((err) => console.log(err));
    },
  },
  
//fetch data from api
  mounted() {
    this.getData();   
  
  
    const router = useRouter();
     if (this.token == "") {
      router.replace("/login");
    }
  },
};
</script>
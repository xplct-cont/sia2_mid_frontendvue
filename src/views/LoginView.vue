<template>
       <div class="row mt-4">
           <div class="col-md-4 offset-md-4">
              <form @submit="login">
              
                <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                          <div class="card-header bg-info rounded">
                            <h1 style="font-size:25px; font-weight:regular; margin-left: 50px;">User Registration</h1>
                          </div>
                              <div class="card-body">
                                 <div class="mb-3">
                                <label for="email">Email</label>
                                <input type="email" id="email" class="form-control" v-model="email">
                               </div>

                               <div class="mb-3">
                                <label for="password">Password</label>
                                <input type="password" id="password" class="form-control" v-model="password">
                               </div>
                               <button type="submit" class="btn btn-primary">Login</button>
                              </div>


                          </div>
              </form>
           </div>
       </div>
</template>


<script>
export default {
 data() {
    return {email:"", password:"",};
 },
 
methods: {
    async login(e) {
      e.preventDefault();

      const loginRequest = {email: this.email, password: this.password,};

      fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({ path: "/" });
          }
        })
        .catch((err) => console.log(err));
    },
  },
}
  

</script>
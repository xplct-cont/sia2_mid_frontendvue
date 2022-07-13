<template>
    <div class="row mt-4">

        <div class="col-md-4 offset-md-4">
            <form @submit ="register">
                     <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                          <div class="card-header bg-info rounded">
                            <h1 style="font-size:25px; font-weight:regular; margin-left: 50px;">User Registration</h1>
                          </div>

                          <div class="card-body">
                               <div class="mb-3">
                                <label for="name">Lastname</label>
                                <input type="text" id="lastname" class="form-control" v-model="lname">
                               </div>
                               <div class="mb-3">
                                <label for="name">Firstname</label>
                                <input type="text" id="firstName" class="form-control" v-model="fname">
                               </div>
                                <div class="mb-3">
                                <label for="email">Email</label>
                                <input type="email" id="email" class="form-control" v-model="email">
                               </div>
                                <div class="mb-3">
                                <label for="">Course</label>
                                <input type="text" id="course" class="form-control" v-model="course">
                               </div>
                                <div class="mb-3">
                                <label for="">Year</label>
                                <input type="text" id="year" class="form-control" v-model="year">
                               </div>
                                <div class="mb-3">
                                <label for="">Address</label>
                                <input type="text" id="address" class="form-control" v-model="address">
                               </div>
                                <div class="mb-3">
                                <label for="">Mobile Number</label>
                                <input type="text" id="mobile" class="form-control" v-model="mobile">
                               </div>
                                <div class="mb-3">
                                <label for="password">Password</label>
                                <input type="password" id="password" class="form-control" v-model="password">
                               </div>
                               <button type="submit" class="btn btn-primary">Register</button>
                          </div>
                     </div>
                     
                     </form>
        </div>
       
    </div>
</template>


<script>
export default {
  data() {
    return {lname: "",fname:"",email: "",course:"",year:"",address:"",mobile: "",password: "",};
  },
  methods: {
    async register(e) {
      e.preventDefault();

      const registerRequest = {
        lname: this.lname,
        fname: this.fname,
        email: this.email,
        course: this.course,
        year: this.year,
        address: this.address,
        mobile: this.mobile,  
        password: this.password,
     
       
      };

      fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerRequest),
      })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({ path: "/" });
          }
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.register();
    console.log("mounted");
  },
};
</script>
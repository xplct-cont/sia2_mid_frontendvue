<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-info ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sia2-Midterm</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
         <li class="nav-item">
          <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
        </li>
         <li class="nav-item">
          <RouterLink class="nav-link" to="/shouts">Shouts</RouterLink>
        </li>
         <li class="nav-item">
          <RouterLink class="nav-link" to="/login">Login</RouterLink>
        </li>
         <li class="nav-item">
          <RouterLink class="nav-link" to="/register">Register</RouterLink>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
</template>

<script>
export default{
    setup(){

    }
}

</script>

<style scoped>
li{
    position:relative;
    left: 800px;
}
</style>
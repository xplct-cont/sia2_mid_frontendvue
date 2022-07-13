<script setup>
import {RouterView } from 'vue-router'
import Nav from './components/navbar.vue'
</script>

<script>
export default {
  component:{
    Nav
  }
}
</script>

<template>
 
  <Nav></Nav>

  <div class="container">
    <RouterView/>
  </div>
</template>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");


</style>

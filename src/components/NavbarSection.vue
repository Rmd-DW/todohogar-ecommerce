<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="mx-5 px-5">
          <h3 class="navbar-brand mb-0 text-primary">TodoHogar</h3>
        </div>
        <router-link class="navbar-brand" to="/">Home</router-link>
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Productos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">Administrador</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarSection'
  };
  </script>
  
  <style scoped>


 
  </style>
  
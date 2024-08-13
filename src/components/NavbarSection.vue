<template>
  <nav class="navbar navbar-expand-lg navbar-dark ">
    <div class=" container">
      <div class="container-fluid d-flex align-items-center justify-content-between">
      <div class="navbar-brand">
        <img src="../../public/logo/logo2.png" alt="banner-todohogar" class="img-fluid" width="200">
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
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
    </div>
   
  </nav>
</template>

  <script>
  export default {
    name: 'NavbarSection'
  };
  </script>
  
  <style scoped>
nav {
  background-color: #495057;
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-brand img {
  max-width: 150px;
  height: auto;
}

.navbar-nav .nav-item .nav-link {
  color: #fff;
  padding: 0.75rem 1rem;
}

.navbar-nav .nav-item .nav-link:hover {
  color: #adb5bd;
}

body {
  padding-top: 5rem;
}
</style>

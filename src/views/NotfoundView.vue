<template>
    <main class="container text-center mt-5">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1 class="display-1">404</h1>
          <p class="lead">Recurso no encontrado</p>
          <router-link to="/" class="btn btn-primary m-2 p-2">Volver a Home</router-link>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'NotfoundView',
  };
  </script>
  
  <style scoped>
  h1{
    font-size: 20rem;
  }

main{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
  </style>
  
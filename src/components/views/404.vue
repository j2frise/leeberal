<template>
  <div class="notFound text-center"  >
      <h1>ERROR 404</h1>
  <h2>Page introuvable</h2>
  <router-link to="/">
    <a class="btn btn-primary">Accueil</a>
  </router-link>
  </div>
  
</template>

<script>

export default {
  name: "NotFound"
 
};
</script>

<style lang="css" scoped >

div {
  background-color: red;
  color: white;
}
</style>

<template>
  <div class="login"  >
      <section>
        <div class="container">
          <form-login></form-login>
        </div>
      </section>
  
  </div>
</template>

<script>
import FormLogin from '../widgets/FormLogin.vue';
export default {
  name: "Login",
  components: {
    FormLogin
  }
 
};
</script>

<style lang="css" scoped>

</style>

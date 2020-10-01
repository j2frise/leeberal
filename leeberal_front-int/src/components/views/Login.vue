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

section {
  margin-top: 100px;
}


/* format tablet */
@media (min-width: 768px) {
  section {
    width: 60%;
    margin: 115px auto;
  }
}

/* format desktop */
@media (min-width: 1025px) {
  section {
    width: 30%;
    margin: 150px auto;
  }
}

</style>

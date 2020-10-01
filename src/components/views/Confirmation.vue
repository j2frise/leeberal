<template>
  <div class="confirm">
      <br><br><br>
      <h2 class="text-center text-success">{{message[type-1]}}</h2>
      <br><br><br>
  </div>
</template>

<script>

export default {
  name: "Confirmation",
  props: ['type'],
  data() {
      return {
          logo: require('../../assets/img/leeberal.png'),
          message: [
            "Votre compe a été créé avec succès. Veuillez vous connecter",
            "Votre compte sera vérifié et validé par nos services",
            "Votre compte n'est pas encore actif, veuillez attendre la validation de vos données"
          ]
      }
  },
  methods: {
    redirect(){
      setTimeout(() => {
        this.$router.push('/')
      }, 4000);
    }
  },
  mounted() {
    //this.redirect()
  }
  
};
</script>

<style lang="css" scoped>

</style>
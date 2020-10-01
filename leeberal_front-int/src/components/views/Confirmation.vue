<template>
  <div class="confirm">
      <div class="container">
        <img :src="logo" alt="">
        <p class="text-center">Votre rendez-vous est confirmé, merci de votre confiance. Vous avez pris rendez-vous avec Monsieur X pour le 13/11/2020 à 10h.</p>
        <div class="content-confirm">
            <router-link :to="'/'">
            <button class="btn btn-theme">C’est noté !</button>
            </router-link>
        </div>
      </div>
      
  </div>
</template>

<script>

export default {
  name: "Confirmation",
  data() {
      return {
          logo: require('../../assets/img/leeberal.png')
      }
  }
  
};
</script>

<style lang="css" scoped>

img {
    width: 120px;
}

.confirm {
    margin-top: 100px;
}

.confirm .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p {
    font-weight: bold;
    margin-top: 20px;
    color: #000000;
}

.content-confirm {
color: white;
margin-top: 20px;
}

.content-confirm .btn-theme {
    background-color: #1592E6;
    border-color: #1592E6;
}

.container {
    background-color: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 30px;
    padding-top: 80px;
    padding-bottom: 100px;
}

/* format tablet */
@media (min-width: 768px) {

    .confirm {
        margin-top: 200px;
        width: 65%;
        margin: auto;
    }
}

/* format desktop */
@media (min-width: 1025px) {

    .confirm {
        margin-top: 250px;
        margin-bottom: 200px;
        width: 40%;
    }
}

</style>
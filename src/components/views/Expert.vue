<template>
  <div class="confirm">
      <div class="container">
        <img :src="logo" alt="">
        <p class="text-center">Votre rendez-vous est confirmé, merci de votre confiance. Vous avez pris rendez-vous avec Monsieur X pour le 13/11/2020 à 10h.</p>
        <div class="content-confirm">
            C’est noté !
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "Confirmation",
  data() {
      return {
          listcard: [
        {
          img: require('../../assets/img/communaute.png'),
          info: 'Un abonnement mensuel attractif et sans commission.'
        },
        {
          img: require('../../assets/img/prise.png'),
          info: 'Prenez rendez-vous en ligne, où que vous soyez, 24h/24 e 7j/7 pour une consultation physique ou vidéo'
        },
        {
          img: require('../../assets/img/Historique.png'),
          info: 'Retrouvez l’historique de vos échanges écrits et de vos rendez-vous.'
        }
      ]
      }
  }
  
};
</script>

<style lang="css" scoped>

</style>
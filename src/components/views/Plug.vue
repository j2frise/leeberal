<template>

  <div class="plug">
      
  </div>

</template>

<script>
export default {
  name: "Plug",
  components: {
     
  },
  data() {
      return {
          profil: require('../../assets/img/profil.jpeg'),
          tarif: require('../../assets/img/tarif.png'),
          works: [
              {
                  img: require('../../assets/img/tarif.png'),
                  title: 'Tarifs',
                  value: 'Sur devis a partir de'
              },
              {
                  img: require('../../assets/img/logo-carte.png'),
                  title: 'Moyen de payement',
                  value: 'CB - Espèces - Chèques'
              },
              {
                  img: require('../../assets/img/ampoule.png'),
                  title: 'Aide juridictionnelle acceptée',
                  value: 'Adresse'
              },
              {
                  img: require('../../assets/img/job.jpg'),
                  title: 'Spécialités',
                  value: 'Divorce, recouvrement, ...'
              },
              {
                  img: require('../../assets/img/langues.jpg'),
                  title: 'Langues parlées',
                  value: 'Francais, anglais, italien, ...'
              }
          ],
        intro: [
              {
                  img: require('../../assets/img/cap.png'),
                  title: 'Diplômes',
                  value: 'Master en ???'
              },
              {
                  img: require('../../assets/img/legal.png'),
                  title: 'Expériences',
                  value: 'juriste, ...'
              }
        ]
      }
  },
  methods: {
      
  },
  mounted() {
  }
 
};
</script>

<style lang="css" scoped >

</style>
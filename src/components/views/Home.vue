<template>
 <div class="home">
   <Search :type="'home'" :listJob="$parent.listJobs"></Search>
    
 </div>
</template>



<script>
import CardImg from '../widgets/CardImg.vue';
import Search from '../widgets/Search.vue';
export default {
  name: "Home",
  components: {
    CardImg,
    Search
  },
  data() {
    return {
      suggestion: undefined,
      appId: undefined,
      apiKey: undefined,
      bg: require('../../assets/img/fond3.png'),
      google: require('../../assets/img/Google.png'),
      store: require('../../assets/img/store.png'),
      smartphone: require('../../assets/img/smartphone.png'),
      juriste: require('../../assets/img/okk.png'),
      listcard: [
        {
          img: require('../../assets/img/communaute.png'),
          info: 'Accédez immédiatement aux disponibilités de dizaines de milliers d’experts juridiques.'
        },
        {
          img: require('../../assets/img/prise.png'),
          info: 'Prenez rendez-vous en ligne, où que vous soyez, 24h/24 e 7j/7 pour une consultation physique ou vidéo'
        },
        {
          img: require('../../assets/img/Historique.png'),
          info: 'Retrouvez l’historique de vos échanges écrits et de vos rendez-vous.'
        },
        {
          img: require('../../assets/img/rappel.png'),
          info: 'Recevez un rappel avant votre rendez-vous par sms et/ou mail.'
        }
      ]
    };
  },
 
};
</script>

<style lang="css" >

</style>

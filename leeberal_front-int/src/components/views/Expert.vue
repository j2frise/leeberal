<template>
<div class="expert-app">
    <Block :listcard='listcard' :col="4"></Block>
    <div class="form">
    <button data-toggle="modal" data-target="#exampleModalCenter2" type="submit" class="btn btn-theme">En savoir plus</button>
    </div>
</div>

</template>

<script>
import Block from '../widgets/Block.vue'
export default {
  name: "Expert",
  components: {
    Block
  },
  data() {
      return {
          listcard: [
        {
          img: require('../../assets/img/abonnement.png'),
          info: 'Un abonnement mensuel attractif et sans commission.'
        },
        {
          img: require('../../assets/img/Gain.png'),
          info: 'Un gain de temps dans le secretariat.'
        },
        {
          img: require('../../assets/img/Visibilite.png'),
          info: 'Obtenez plus de visibilité en ligne.'
        }
      ]
    };
  },
  
};
</script>

<style lang="css" scoped>

button {
  margin-top: 250px;
  margin-left: 950px;
  width: 284px;
  height: 59px;
  background: transparent linear-gradient(252deg, #FF4F5A 0%, #FF4F5A 100%) 0% 0% no-repeat padding-box;
  border-radius: 30px;
}


/* format tablet */
@media (min-width: 768px) {

  

}

/* format desktop */
@media (min-width: 1025px) {
  

}

</style>
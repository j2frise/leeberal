<template>
 <div class="home">
   <section class="welcome">
     <div class="bg">
       <img :src="bg" alt="" class="img">
     </div>
     <div class="sentence">
        <h1>Trouvez l’expert juridique qu’il vous faut n’aura jamais été aussi simple !</h1>
        <p>Réservez immédiatement votre rendez-vous physique ou vidéo avec un expert juridique et ceci gratuitement.</p>
     </div>
     <div class="search">
       <form action="">
         <div class="row">
          <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <input list="browsers" name="browser" type="search" class="form-control first" placeholder="Quel est votre besoin?">
            <datalist id="browsers">
              <option value="Avocat"></option>
              <option value="Expert comptable"></option>
              <option value="Huissiers"></option>
              <option value="Notaires"></option>
              <option value="Traducteurs"></option>
            </datalist>
          </div>
          <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <input type="search" class="form-control second" placeholder="Où? (Ville, Code postal,…)">
          </div>
          <div class="form-group btn-search col-xs-6 col-sm-6 col-md-2 col-lg-2">
            <router-link :to="'/search'">
            <button type="submit" class="btn btn-theme form-control">Trouver</button>
            </router-link>
          </div>
         </div>
       </form>
     </div>
   </section>
   <Block :listcard='listcard' :col="3"></Block>
   <section class="plateform">
       <div class="plateform-content">
         <div class="plateform-sentence text-center">
           <h1>Découvrez l’application mobile</h1>
           <p>Pour une prise de rendez-vous encore plus rapide</p>
         </div>
         <div class="store">
           <a href="#"><img :src="store" alt=""></a>
           </div>
         <div class="google">
           <a href="#"><img :src="google" alt=""></a>
           </div>
         <div class="smartphone">
           <img :src="smartphone" alt="">
           </div>
         
       </div>
   </section>
   <section class="expert">
       <div class="content-expert row">
         <div class="left col-xs-12 col-sm-12 col-md-7 col-lg-8">
           <h1>Vous êtes Expert juridique ? </h1>
           <p>Équipez-vous de la plateforme Leeberal pour améliorer l’organisation de votre cabinet, à moindre coût.</p>
           <img :src="juriste" alt="" class="mobile">
           <ul>
             <li>—> Gagnez du temps  </li>
             <li>—> Protégez vous face au Covid</li>
             <li>—> Augmentez votre portefeuille client</li>
           </ul>
         </div>
         <div class="tablet col-xs-12 col-sm-12 col-md-5 col-lg-4 text-right">
           <img :src="juriste" alt="">
           </div>
       </div>
   </section>
   <section class="help">
       <div class="row">
         <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6">
           <h1>Une question ? Besoin d’aide ?</h1>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-5 col-lg-6 text-center">
           <a href="#" class="btn btn-theme">Consulter le centre d’aide</a>
         </div>
       </div>
   </section>
 </div>
</template>



<script>
import Block from '../widgets/Block.vue'
export default {
  name: "Home",
  components: {
    Block
  },
  data() {
    return {
      suggestion: undefined,
      appId: undefined,
      apiKey: undefined,
      bg: require('../../assets/img/fond5.png'),
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

<style lang="css" scoped >

.sentence .container {
  display: flex;
  flex-direction: column;
}

.sentence h1 {
  width: 75%;
}

.sentence p {
  width: 75%;
  align-self: flex-end;
  margin-top: 60px;
  font-weight: bold;
}

.bg {
  width: 100%;
  top: 0;
  position: absolute;
  z-index: -1;
  overflow-x: hidden;
}

.img {
  width: 550px;
  
}

.sentence {
  display: flex;
  align-items: center;
  height: 400px;
}

.welcome {
  position: relative;
  
}

.btn-search {
  text-align: center;
}

.plateform-content {
  padding: 25px 10px;
  background-color: #1B81DD;
  color: white;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.plateform-sentence {
  grid-column: 1/span 2;
  grid-row: 1;
}

.plateform-sentence h1 {
  color: white;
}

.plateform-sentence p {
  width: 75%;
  margin: auto;
}

.store {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: center;
}
.google {
  grid-column: 1;
  grid-row: 3;
}
.smartphone {
  grid-column: 2;
  grid-row: 2/span 2;
}

.store img, .google img {
  width: 100px;
}

.smartphone img {
  width: 90%;
}

.plateform {
  margin-top: 70px;
}

.tablet {
  display: none;
}

.left {
  padding-top: 60px;
  position: relative;
  overflow: hidden;
}

.left p {
  font-weight: bold;
  width: 90%;
}

.left h1 {
  text-align: center;
}

.left ul {
  margin-top: 40px;
  font-size: 120%;
}

.left .mobile {
  position: absolute;
  width: 170px;
  right: -70px;
  top: 75px;
  opacity: 0.3;
  z-index: -1;
}

.help h1 {
  text-align: center;
}

.help {
  margin-top: 80px;
}

.expert {
  margin-top: 25px;
}

/* format tablet */
@media (min-width: 768px) {
  .img {
    width: 100%;
  }

  .sentence h1 {
  width: 100%;
  text-align: center;
  }

.sentence p {
  width: 80%;
  align-self: center;
  margin-top: 30px;
  text-align: center;
  font-size: 110%;
  }

  .sentence {
    padding: 30px 0;
    height: auto;
  }

  .welcome {
    height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .search .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .search .form-group {
    padding: 0;
  }

  .search .row {
    display: flex;
    justify-content: center;
  }

  .plateform-content {
  padding: 40px 20px;
  grid-template-rows: 100px 1fr 1fr;
} 

.store img, .google img {
  width: 180px;
}

.plateform {
  margin-top: 100px;
}

.tablet {
  display: block;
}

.tablet img {
  width: 300px;
}

.left {
  padding-top: 80px;
}

.left p {
  width: 100%;
}

.left ul {
  margin-top: 80px;
}

.left .mobile {
  display: none;
}

.left h1 {
  text-align: left;
}

.help h1 {
  text-align: left;
}

.help {
  margin-top: 100px;
}

.expert {
  margin-top: 90px;
}

input[type='search'].form-control.first {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

input[type='search'].form-control.second {
  border-radius: 0;
}


}

/* format desktop */
@media (min-width: 1025px) {
  .bg {
    top: -250px;
  }
  .img {
   max-width: 100%;
    
  }

  .search {
    position: relative;
    top: 20px;
  }

  .sentence {
    margin-top: 55px;
  }

  .search .form-control {
    padding-top: 23px;
    padding-bottom: 23px;
  }
  .search .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .plateform-content {
  padding: 25px 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 80%;
  margin: auto;
  }

.store {
  justify-content: center;
}
.google {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.smartphone {
  grid-column: 3/span 2;
  grid-row: 1/span 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.store img, .google img {
  width: 120px;
}

.smartphone img {
  width: 150px;
}

.plateform {
  margin-top: 120px;
}

.plateform-sentence p {
  width: 100%;
}

.expert {
  width: 80%;
  margin: auto;
  padding: 50px;
}

.left {
  padding-left: 120px;
  padding-top: 60px;
}

.left p {
  padding-left: 20px;
}

.help .row {
  width: 80%;
  margin: auto;
}

}

</style>

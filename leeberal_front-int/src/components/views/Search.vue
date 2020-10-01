<template>
  <div class="search">
      
   <section class="welcome">
     
     <div class="sentence">
       <div class="container">
        <h1>Trouvez l’expert juridique qu’il vous faut n’aura jamais été aussi simple !</h1>
        <p>Réservez immédiatement votre rendez-vous physique ou vidéo avec un expert juridique et ceci gratuitement.</p>
       </div>
     </div>
     <div class="search-bar">
       <div class="container">
       <form action="">
         <div class="row">
          <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <input type="search" :src="loupe" alt="Lancer la recherche" class="form-control" placeholder="Quel est votre besoin?">
          </div>
          <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <input type="search" class="form-control" placeholder="Où? (Ville, Code postal,…)">
          </div>
          <div class="form-group btn-search col-xs-6 col-sm-6 col-md-2 col-lg-2">
            <button type="submit" class="btn btn-theme form-control">Rechercher</button>
          </div>
         </div>
         <div class="row">
           <div class="form-group ">
           <h1>Filtrer par:</h1>
           </div>
           <div class="form-group ">
             <form action="">
           <input list="motif" name="motif" id="motif" class="filtre form-control">
                      <datalist id="motif">
                        <option value="">Disponibilité</option>
                        <option value="">Aujourd'hui</option>
                        <option value="">Dans 3 jours</option>
                        <option value="">Peu importe</option>
                      </datalist>
             </form>
            </div>
            <div class="form-group ">
            <input list="motif" name="choose" id="motif" class="filtre form-control">
                      <datalist id="motif">
                        <option value="">Langues parlées</option>
                      </datalist>
                    
            </div>
            <div class="form-group ">
            <input list="motif" name="choose" id="motif" class="filtre form-control">
                      <datalist id="motif">
                        <option value="">Honoraires</option>
                        <option value="">Aide juridictionnelle</option>
                      </datalist>
                   
            </div>
            <div class="form-group ">
            <input list="motif" name="choose" id="motif" class="filtre form-control">
                      <datalist id="motif">
                        <option value="">Téléconsultation</option>
                      </datalist>
                    
            </div>
         </div>
       </form>
       </div>
     </div>
   </section>
        <section class="identity col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <div class="row">
            <div class="container">
                <div class="card col-xs-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="container">
                        <img :src="profil" alt="">
                        <div class="full-name">
                            <p>Nom Prénom</p>
                            <p>Fonction</p>
                        </div>
                        <div class="adresse">
                            <p>Adresse</p>
                        </div>
                        <div class="aide">
                            <span>Aide juridictionnelle:</span>
                            <input type="checkbox" id="check1" checked>
                            <label for="check1" class="loadcheck" id="loadcheck1">
                              <span class="entypo-check">&#10004;</span>
                              <span class="entypo-cancel">&#10008;</span>
                            </label>
                        </div>
                        <div class="choose">
                          <router-link :to="'/plug'">
                            <button type="submit">Prendre rendez-vous</button>
                          </router-link>
                        </div>
                        <div class="row">
                            <div v-for="(element, index) in works" :key="index" class="col-12">
                                <ElementCard :img="element.img" :title="element.title" :value="element.value"></ElementCard>
                            </div>
                        </div>
                    </div> 
                </div>
                
                <div class="card col-xs-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="container">
                        <img :src="profil" alt="">
                        <div class="full-name">
                            <p>Nom Prénom</p>
                            <p>Fonction</p>
                        </div>
                        <div class="adresse">
                            <p>Adresse</p>
                        </div>
                        <div class="aide">
                            <span>Aide juridictionnelle:</span>
                            <input type="checkbox" id="check1" checked>
                            <label for="check1" class="loadcheck" id="loadcheck1">
                              <span class="entypo-check">&#10004;</span>
                              <span class="entypo-cancel">&#10008;</span>
                            </label>
                        </div>
                        <div class="choose">
                          <router-link :to="'/plug'">
                            <button type="submit">Prendre rendez-vous</button>
                          </router-link>
                        </div>
                        <div class="row">
                          
                                <div v-for="(element, index) in intro" :key="index" class="col-12">
                                    <element-card :img="element.img" :title="element.title" :value="element.value"></element-card>
                                
                                </div>
                        </div>
                    </div>
                </div>
            

            <div class="form-group ">
                <div class="container map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.367615116874!2d2.495677815670746!3d48.75577567927761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60b9ec5c271ed%3A0x8806b54881a678e4!2s2%20Place%20des%20Tilleuls%2C%2094470%20Boissy-Saint-L%C3%A9ger!5e0!3m2!1sfr!2sfr!4v1599990058946!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            </div>
          </div>
         
        </section>
       
  </div>
</template>

<script>
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import ElementCard from '../widgets/ElementCard.vue';
export default {
  name: "Search",
  components: {
    ElementCard
  },
  methods: {
      getCalendar() {
          document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');

            var calendar = new Calendar(calendarEl, {
                plugins: [ dayGridPlugin ]
            });

            calendar.render();
            });
      }
  },
  mounted() {
      this.getCalendar() 
  },
  data() {
   return {
     loupe: require('../../assets/img/loupe.png'),
     local: require('../../assets/img/local.png')
   }
 }
 
};
</script>

<style lang="css" scoped>

.search {
  align-content: center;
  align-items: center;
  align-self: start;
}

.search-bar input,button {
  border-radius: 10px;
  border-color: transparent;
}

.search-bar input {
  box-shadow: 0px 3px 31px #00000029;
}

button {
  background-color: #1B81DD;
}

.card {
    display: flex;
    box-shadow: 0px 3px 31px #00000029;
    border-radius: 30px;
    margin-bottom: 50px;
    margin-left: 30px;
    width: 550px;
    height: 250px;
}

.card button {
  width: 121px;
  height: 22px;
  background: #FF4F5A 0% 0% no-repeat padding-box;
  border-radius: 0px 5px 5px 0px;
  margin-top: 15px;
  font: normal normal 600 10px/13px Montserrat;
}


iframe {
    display: flex;
    border-radius: 30px;
    margin-top: -557px;
    margin-left: 600px;
    box-shadow: 0px 3px 31px #00000029;
}

.address {
    padding: 30px;
    height: auto;
}


.calendar {
    padding: 30px;
    box-shadow: 0px 3px 31px #00000029;
    width: 100px;
}

.filtre {
width: 150px;
height: 5px;
border-radius: 100%;
box-shadow: 0px 3px 31px #00000029;
margin-left: 15px;
}

.identity {
  margin-top: 150px;
}

.container img {
    margin-top: 10px;
    width: 80px;
    height: 80px;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #707070;
    border-radius: 20px;
}

.full-name {
    margin-left: 100px;
    margin-top: -80px;
}

.card span {
    padding: 0;
    margin: 0;
    font: normal normal bold 12px/20px Montserrat;
    letter-spacing: 0px;
    color: #000000;
}

.adresse {
    margin-left: 100px;
    margin-top: 30px;
}

.aide {
    margin-top: 50px;
}

input[type="checkbox"] {
  display:none;
}
span[class*="entypo"]{
  cursor:pointer;
  margin-left: 5px;
  }

span[class*="cancel"]{
  font-size:20px;
  color:#db1536;
}
span[class*="check"]{
  font-size:20px;
  color:rgba(0,0,0,.1);
}
#check:checked + .loadcheck .entypo-check{
  color:#58d37b;
}
#check:checked + .loadcheck .entypo-cancel{
  color:rgba(0,0,0,.1);
}

#check1:checked + .loadcheck .entypo-check{
  color:#58d37b;
}
#check1:checked + .loadcheck .entypo-cancel{
  color:rgba(0,0,0,.1);
}

/* format tablet */
@media (min-width: 768px) {
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

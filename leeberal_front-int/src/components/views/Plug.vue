<template>

  <div class="plug">
      <div class="row">
        <section class="identity col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div class="name">
                <div class="container">
                    <img :src="profil" alt="">
                    <div class="full-name">
                        <p>Maître <b>Claire Dubois</b></p>
                        <p>Avocate</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card col-xs-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="container">
                        <h2>titre a venir</h2>
                        <div class="row">
                            <div v-for="(element, index) in works" :key="index" class="col-12">
                                <element-card :img="element.img" :title="element.title" :value="element.value"></element-card>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="card col-xs-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="container">
                        <h2>Présentation de l’expert juridique</h2>
                        <p>Présentation du professionnelle</p>
                        <div class="row">
                                <div v-for="(element, index) in intro" :key="index" class="col-12">
                                    <element-card :img="element.img" :title="element.title" :value="element.value"></element-card>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="address col-xs-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="container">
                        <h2>Carte et informations d’accès</h2>
                        <div class="map-info">
                            <div class="location">
                                <ul>
                                    <li>Adresse</li>
                                    <li>Moyens de transports</li>
                                    <li>Infos pratiques</li>
                                </ul>
                            </div>
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.367615116874!2d2.495677815670746!3d48.75577567927761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60b9ec5c271ed%3A0x8806b54881a678e4!2s2%20Place%20des%20Tilleuls%2C%2094470%20Boissy-Saint-L%C3%A9ger!5e0!3m2!1sfr!2sfr!4v1599990058946!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="calendar col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div class="container">
                <h2 class="text-center">Prenez votre rendez-vous en ligne</h2>
                <div>
                <h4>1. Motif de consultation :</h4>
                <form action="">
                    <select name="choose" id="motif" class="form-control">
                        <option value="">Choisir un motif</option>
                        <option value="">Premier contact</option>
                        <option value="">Entretien</option>
                        <option value="">Urgent</option>
                        <option value="">Autres ...</option>
                    </select>
                </form>
                <div id="calendar"></div>
                </div>
            </div>
        </section>
      </div>
  </div>

</template>

<script>
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import ElementCard from '../widgets/ElementCard.vue';
export default {
  name: "Plug",
  components: {
      ElementCard
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
       
      console.log(this.$parent.changeLink())
      if(this.$parent.changeLink()) {
          this.getCalendar()
      }
  }
 
};
</script>

<style lang="css" scoped >

.plug {
    margin-top: 100px;
}

.name {
    height: 70px;
    background-color: #29567a;
    color: white;
    padding: 15px 0;
}

.name .container {
    display: flex;
}

.name img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
}

.full-name {
    margin-left: 20px;
}

.full-name p {
    padding: 0;
    margin: 0;
}

.card {
    padding: 15px 0;
    background-color: white;
    box-shadow: 0px 3px 31px #00000029;
    margin-top: 40px;
}

.address {
    margin-top: 40px;
}

iframe {
    width: 100%;
    height: 100%;
}

.calendar {
    padding: 30px;
    box-shadow: 0px 3px 31px #00000029;
    height: 600px;
    right: 14px;
}

.calendar h2 {
    margin-bottom: 50px;
}

.calendar h4,select {
    margin-bottom: 30px;
}

select {
    align-items: center;
    width: 80%;
    background: transparent 0% 0% no-repeat padding-box;
    border: transparent;
    text-align: center;
    font: normal normal bold 15px/19px Montserrat;
    letter-spacing: 0px;
    color: #000000;
}
select:hover {
    border: 1px solid #1B81DD;
    box-shadow: 0px 3px 31px #00000029;
    border-radius: 10px;
    text-align: center;
    font: normal normal bold 15px/19px Montserrat;
    letter-spacing: 0px;
    color: #000000;
}

/* format desktop */
@media (min-width: 1025px) {
.location {
    width: 100%;
    height: 200px;
    box-shadow: 0px 3px 31px #00000029;
    display: flex;
    align-items: center;
    background-color: white;
    padding-left: 20px;
    font-size: 88%;
    color: black;
    margin-top: 100px;
}

.map-info {
    position: relative;
    margin-bottom: 120px;
}

.map {
    width: 100%;
    height: 300px;
    overflow: hidden;
    margin-top: 20px;
}

}

</style>
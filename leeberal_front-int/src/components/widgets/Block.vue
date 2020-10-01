<template>
 <div class="block">
   <section class="infos">
     <div class="container">
     <h1 class="text-center">Pourquoi prendre rendez-vous avec Leeberal?</h1>
     <div class="row none">
       <div v-for="(element, index) in listcard" :key="index" :class="'col-xs-12 col-sm-12 col-md-6 col-lg-'+ col">
         <card-img :img="element.img" :text="element.info"></card-img>
       </div>
     </div>
     <div id="carousel">
       <div class="btn-bar">
          <div id="buttons">
            <a id="prev" href="#"> &lt; </a>
            <a id="next" href="#"> &gt; </a> 
          </div>
        </div>
        <div id="slides">
          <ul>
            <li v-for="(element, index) in listcard" :key="index" class="slide">
              <card-img :img="element.img" :text="element.info"></card-img>
            </li>
          </ul>
        </div>
     </div>
     </div>
   </section>
 </div>
</template>



<script>
import CardImg from './CardImg.vue'
export default {
  name: "Block",
  components: {
      CardImg
  },
  props:['listcard', 'col'],
  data() {
    return {
      
    };
  },
 
};
</script>

<style lang="css" scoped >

/* slide */
.infos {
  margin-top: 90px;
}

.infos .row {
    margin-top: 40px;
}

.infos .row.none {
  display: none;
}

#carousel {
position: relative;
}

#slides {
overflow: hidden;
position: relative;
width: 95%;
margin: 40px auto;
}

#slides ul {
list-style: none;
width:100%;
margin: 0;
padding: 0;
position: relative;
display: flex;
}

 #slides li {
  position: relative;
  width: 100%;
}
/* Styling for prev and next buttons */
.btn-bar{
    max-width: 346px;
    margin: 0 auto;
    display: block;
    position: relative;
    top: 40px;
}

 #buttons {
padding:0 0 5px 0;
display: flex;
justify-content: space-between;
}

#buttons a {
text-align:center;
display:block;
font-size:50px;
outline:0;
margin:0;
color: rgba(0, 0, 0, 0.6);
text-decoration:none;
display:block;
padding:9px;
width:35px;
}

a#prev:hover, a#next:hover {
color:#FF4F5A;
text-shadow:.5px 0px rgba(0, 0, 0, 0.6);
}


/* format tablet */
@media (min-width: 768px) {

    /* slide */
.infos .row.none {
  display:-ms-flexbox;
  display:flex;
}

.infos .row div {
  margin-top: 25px;
}

.infos {
  margin-top: 250px;
}

#carousel {
  display: none;
}
  
}

/* format desktop */
@media (min-width: 1025px) {
  
}

</style>

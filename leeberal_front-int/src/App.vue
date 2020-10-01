<template>
  <div id="app" >
    <Header v-if="$route.name !== 'NotFound'"/>
    <div v-if="$route.name !== 'NotFound'" class="clearfix"></div>
    <router-view></router-view>
    <Footer v-if="$route.name !== 'NotFound'"/>
    
    <!--modal-->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form-login></form-login>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form-sign></form-sign>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import FormLogin from './components/widgets/FormLogin.vue';
import FormSign from './components/widgets/FormSign.vue';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import api from './api';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    FormLogin,
    FormSign
  },
  computed: {
    page() {
      return this.$route.name
    }
  },
  methods: {
    changeLink() {
      return this.page == 'Plug'
    }
  },
  mounted() {
    
    FormLogin
  },
  data() {
    return {
      listLanguage: []
    }
  },
  methods: {
    getLanguage() {
      api
        .request('get', '/common/list/language', this.$store.state.token)
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log('error', error))
    }
  },
  mounted() {
    this.getLanguage()
  }
 
};
</script>

<style lang="css" >
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');


/* format mobile */
body {
font-family: 'PT Sans', sans-serif;
background-color: #FFFAFA;
color: rgba(0, 0, 0, 0.6);
font-size: 13px;
overflow-x: hidden;
}

.btn, .form-control {
  
  border-radius: 10px;

}

.btn-theme {
  background: #FF4F5A 0% 0% no-repeat padding-box;
  border: 1px solid #FF4F5A;
  color: white;
}

.btn-theme-secondary {
  background: #1592E6 0% 0% no-repeat padding-box;
  border: 1px solid #1592E6;
  color: white;
}


li {
  line-height: 30px;
}

a {
  color: rgba(0, 0, 0, 0.6);
  transition: color 0.2s ease-in-out;
  cursor: pointer;
}

a:hover {
  color: #FF4F5A;
  text-decoration: none;
}

.btn.btn-link {
  color: #1592E6;
}

h4, h5, h6 {
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
}

h1 {
  font-size: 20px;
  font-weight: bold;
  color: black;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
}

p {
  color: black;
}

.forgot {
  margin-top: 20px;
  display: block;
}

.new {
  margin-top: 35px;
  margin-bottom: 30px;
}


.modal .modal-dialog .modal-content {
  background-color: white;
  border: 1px solid black;

}

.modal-header {
  border: none;
}

.modal-body {
  padding: 60px 0;
  
}

.clearfix {
  margin-top: 50px;
}

body.overflow {
  overflow: hidden;
}

/*  OVERLAY */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #b7ac7f;
  opacity: 0;
  visibility: hidden;
}
.overlay.show {
  opacity: 0.8;
  visibility: visible;
}



/* format tablet */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }

  .clearfix {
  margin-top: 75px;
}

h1 {
  font-size: 30px;
  font-weight: bold;
  color: black;
}

h2 {
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
}



}
/* format desktop */
@media (min-width: 1025px) {
  h1 {
  font-size: 30px;
  font-weight: bold;
  color: black;
}

h2 {
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
}
}

</style>
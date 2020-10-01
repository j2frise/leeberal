<template>
  <div id="app" class="hk-wrapper hk-alt-nav hk-icon-nav">
    <Header v-if="$route.name !== 'NotFound'"/>
    <!-- Main Content -->
    <div v-if="$route.name == 'Home'" class="clearfix"></div>
    <section class="welcome " v-if="$route.name == 'Home'">
        <div class="bg">
          <img :src="bg" alt="" class="img">
        </div>
        <div class="sentence">
          <div class="container">
            <h1>Trouvez l’expert juridique qu’il vous faut n’aura jamais été aussi simple !</h1>
            <p>Réservez immédiatement votre rendez-vous physique ou vidéo avec un expert juridique et ceci gratuitement.</p>
          </div>
        </div>
        <div class="search">
          <div class="container">
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
        </div>
      </section>
    <div class="hk-pg-wrapper">
      <div class="container mt-xl-50 mt-sm-30 mt-15">
        <router-view></router-view>
      </div>
      <Footer v-if="$route.name !== 'NotFound'"/>
    </div>
  </div>
</template>

<script>
import api from './api'
import FormLogin from './components/widgets/FormLogin.vue';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    FormLogin
  },
  data() {
    return {
      isConnected: false,
      user:[],
      firstname:"",
      lastename: "",
      isDashboard: false,
      isCustomer: true,
      nullValue : ["null", null],
      listLanguages: [],
      listJobs: [],
      bg: require('./assets/img/fond5.png')
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    },
    currentRoutePath() {
        return this.$route.path;
    }
  },
  methods: {
    connected: function() {
      var exclude = ["Login","RegisterPro","Register","Forgot"];
      if (!this.$options.filters.include(this.nullValue, this.$store.state.token) && this.$options.filters.include(exclude, this.currentRouteName)) {
        this.$router.push('/');
      }
    },
    notConnected: function() { 
      var exclude = ["user"];
      var tabPath = this.currentRoutePath.split("/");
      if (this.$options.filters.include(this.nullValue, this.$store.state.token) && this.$options.filters.include(exclude, tabPath[1])) {
        this.$router.push('/');
      } 
    },
    expiredSession: function(){
      setInterval(() => {
        if (this.$store.state.token == "null" || this.$store.state.token == null || this.$store.state.token == undefined) {
          alert("Cette session a expirée");
          document.location.reload(true);
        } 
      }, 2000);
    },
    getUser(){
      var tabPath = this.currentRoutePath.split("/");
      this.isDashboard = tabPath[1] === "user";

      if((this.$store.state.token != null) && this.$store.state.user != null){
        this.user = this.$store.state.user;
        this.isConnected = true;
        this.usersActive();
      } else {
        this.isConnected = false;
      }
    },
    usersActive(){
      if(this.user.Customers && this.user.Customers.length != 0){
        this.firstname = this.user.Customers[0].firstName;
        this.lastename = this.user.Customers[0].lastName;
        this.isCustomer = true;
      } else {
        if(this.user.Professionals && this.user.Professionals.length != 0){
          this.firstname = this.user.Professionals[0].firstName;
          this.lastename = this.user.Professionals[0].lastName;
          this.isCustomer = false;
        }
      }
    },
    destroy () {
      this.$store.commit('SET_USER', null)
      this.$store.commit('SET_TOKEN', null)

      if (window.localStorage) {
        window.localStorage.setItem('user', null)
        window.localStorage.setItem('token', null)
      }
    },
    listLangue(){
      api
        .request('get', '/common/list/language')
        .then(response => {
            if (response.error) {
              console.log(response.error);
            } else {
              this.listLanguages = response;
            }
        })
        .catch(error => {
            console.log(error);
        })
    },
    listJob(){
      api
        .request('get', '/common/list/job')
        .then(response => {
            if (response.error) {
              console.log(response.error);
            } else {
              this.listJobs = response;
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
  },
  beforeMount() {
    this.connected()
    this.notConnected()
    this.getUser()
    this.listLangue()
    this.listJob()
  },
  mounted() {
    
  },
  watch: {
    $route (to, from){
      this.connected()
      this.notConnected()
      this.getUser()
    }
  }
};
</script>

<style lang="css" >
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

    
  .btn.btn-link {
    color: #1592E6;
  }


  .forgot {
    margin-top: 20px;
    display: block;
  }

  .new {
    margin-top: 35px;
    margin-bottom: 30px;
  }

  h4, h5, h6 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

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
  z-index: 0;
  overflow-x: hidden;
}

.img {
  width: 550px;
  
}

.sentence {
  display: flex;
  align-items: center;
  height: 400px;
  z-index: 1
}

.welcome {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.btn-search {
  text-align: center;
}

.clearfix {
  margin-top: 50px;
}

/* format tablet */
@media (min-width: 768px) {

h1 {
  font-size: 25px;
}

h2 {
  font-size: 20px;
}
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


  input[type='search'].form-control.first {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  input[type='search'].form-control.second {
    border-radius: 0;
  }

  .clearfix {
    margin-top: 230px;
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

}
</style>
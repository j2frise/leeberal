<template>
  <div id="app" class="hk-wrapper hk-alt-nav hk-icon-nav">
    <Header v-if="$route.name !== 'NotFound'"/>
    <div v-if="$route.name !== 'NotFound'" class="clearfix"></div>
    <router-view></router-view>
    <Footer v-if="$route.name !== 'NotFound'"/>
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
      listJobs: []
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
  
</style>
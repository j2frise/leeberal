//import file
import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import VueRouter from "vue-router";
import { count,disabled,validMail,validPassword,phoneFrance,formVerified,include,search,getDatetimeFr } from "./filters";


/*
const algoliasearch = require("algoliasearch");
const client = algoliasearch("9LPYEXJ580", "5b81c4f009e73a40f535c5da762b1a41");
const index = client.initIndex("main.js");
*/

//config helpers
Vue.filter("count", count)
Vue.filter("disabled", disabled)
Vue.filter("validMail", validMail)
Vue.filter("validPassword", validPassword)
Vue.filter("phoneFrance", phoneFrance)
Vue.filter("formVerified", formVerified)
Vue.filter("include", include)
Vue.filter("search", search)
Vue.filter("getDatetimeFr", getDatetimeFr)

//use vue
Vue.use(VueRouter)
var router = new VueRouter({
  routes: routes,
  mode: "history",
  linkExactActiveClass: "active",
  scrollBehavior: function(to, from, savedPosition){
    return savedPosition || {x: 0, y: 0}
  }
})

//syncronise 
sync(store, router)

if (window.localStorage) {
  var localUserString = window.localStorage.getItem("user") || "null"
  var localToken = window.localStorage.getItem("token") || null
  var localUser = JSON.parse(localUserString);
  
  if (localToken !== null) {
    store.commit("SET_TOKEN", localToken)
  }
  if(localUser && store.state.user !== localUser){
    store.commit("SET_USER", localUser)
  }
}

Vue.config.productionTip = false;

new Vue({
  router, 
  store,
  render: h => h(App),
}).$mount("#app");


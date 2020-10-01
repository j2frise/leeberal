//import file
import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import VueRouter from "vue-router";
import { count } from "./filters";


/*
const algoliasearch = require("algoliasearch");
const client = algoliasearch("9LPYEXJ580", "5b81c4f009e73a40f535c5da762b1a41");
const index = client.initIndex("main.js");
*/

//config helpers
Vue.filter("count", count)

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

console.log(sync)
//syncronise 
sync(store, router)

if (window.localStorage) {
  var localUserString = window.localStorage.getItem("user") || "null"
  var localUser = JSON.parse(localUserString) 
  
  if (localUser && store.state.user !== localUser) {
    store.commit("SET_USER", localUser)
    store.commit("SET_TOKEN", windows.localStorage.getItem("token"))
  }
}

Vue.config.productionTip = false;

new Vue({
  router, 
  store,
  render: h => h(App),

  
  
}).$mount("#app");


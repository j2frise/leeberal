<template>
  <!-- Top Navbar -->
    <nav class="navbar navbar-expand-xl navbar-light fixed-top hk-navbar hk-navbar-alt">
      <div class="container"> 
        <a class="navbar-toggle-btn nav-link-hover navbar-toggler" href="javascript:void(0);" data-toggle="collapse" data-target="#navbarCollapseAlt" aria-controls="navbarCollapseAlt" aria-expanded="false" aria-label="Toggle navigation"><span class="feather-icon"><i data-feather="menu"></i></span></a>
        <router-link to="/">
          <a @click.prevent class="navbar-brand text-red">
            <img :src="logo" alt="" width="120">
          </a>
        </router-link>
       
        <ul class="navbar-nav hk-navbar-content">
            <li class="nav-item">
                <router-link to="/register-pro">
                  <a href="#" @click.prevent class="btn btn-sm btn-rounded btn-danger">Vous êtes un expert juridique ?</a>
                </router-link>
            </li>
        </ul>
      </div>


       <!-- /Top Navbar -->
      <!--<div class="header">
         <router-link to="/">
          <img :src="logo" alt="" width="120">
        </router-link>

        <router-link to="/login">
          <a class="btn btn-primary pull-right" v-if="!$parent.isConnected"><em class="fa fa-user"></em> Se connecter</a>
        </router-link>
        <div class="pull-right"  v-if="$parent.isConnected">
          <a href="#" class="btn btn-warning pull-right" @click.prevent="logout"><em class="fa fa-power-off"></em> Se déconnecter</a>
          <router-link to="/user">
            <a class="pull-right" style="margin-right:20px" v-if="!$parent.isDashboard"><em class="fa fa-sign-in"></em> Espace membre</a>
          </router-link>
          <p class="pull-right" style="margin-right:20px">{{$parent.firstname}} {{$parent.lastename}}</p>
        </div>
        <router-link to="/register-pro">
          <a style="margin-right: 40px" v-if="!$parent.isConnected" class="btn btn-danger pull-right"><em class="fa fa-users"></em> Vous êtes un professionel ?</a>
        </router-link>
      </div>-->
    </nav>
       
</template>

<script>

export default {
  
  name: "Header",
  data() {
    return {
      logo: require('../../assets/img/logo.png'),
      legal: require('../../assets/img/legal.png')
    }
  },
  methods: {
    logout () {
      this.$parent.destroy();
      document.location.reload(true);
    }
  },
  mounted() {
    
  },
  watch: {

  }
};
</script>

<style lang="css" scoped>

</style>

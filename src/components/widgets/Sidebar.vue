<template>
    <div class="sidebars">
        <img :src="$store.state.serverURI+c.photo" alt="">
        <hr>
        <ul>
            <li>
                <router-link to="/user">
                    <a><em class="fa fa-tachometer"></em> Tableau de bord</a>
                </router-link>
            </li>
            <li>
                <router-link to="/user/profile">
                    <a><em class="fa fa-user"></em> Mon profil</a>
                </router-link>
            </li>
            <li>
                <router-link to="/user/profile">
                    <a><em class="fa fa-users"></em> {{isCustumer?"Mon réseau":"Mes clients"}}</a>
                </router-link>
            </li>
            <li v-if="!isCustumer">
                <router-link to="/user/agenda">
                    <a><em class="fa fa-calendar"></em> Mon agenda</a>
                </router-link>
            </li>
            <li>
                <router-link to="/user/profile">
                    <a><em class="fa fa-calendar"></em> Mes rendez-vous</a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  
  name: "Sidebar",
  props: ["c","isCustumer"],
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
  watch: {

  }
};
</script>

<style lang="css" scoped>
    img {
        width: 50%;
        border-radius: 100%;
    }
    a {
        color: white;
    }

    ul {
        margin-top: 20px
    }
    li {
        margin-top: 10px;
    }
</style>

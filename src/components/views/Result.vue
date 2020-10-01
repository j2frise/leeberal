<template>
    <div class="Result">
      <br><br>
      <Search :type="'other'" :listJob="$parent.listJobs" :listLanguages="$parent.listLanguages" :currentUrl="currentUrl"/>
      <br><br>
      <div class="container" v-if="list.length > 0">
        <result-card :list="list"></result-card>
      </div>
      <div class="container text-danger" v-else>
        <em>0 résultat trouvé</em>
      </div>

    </div>
</template>

<script>
import api from '../../api';
import Search from '../widgets/Search.vue'
import ResultCard from '../widgets/ResultCard.vue'
export default {
  
  name: "Result",
  props: ["data"],
  components:{
    Search,
    ResultCard
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    currentUrl() {
      return this.$route.fullPath;
    }
  },
  methods: {
    getRessult(){
      var get = [];
      if(this.$route.query.location){ get.push("location="+this.$route.query.location);}
      if(this.$route.query.job){ get.push("job="+this.$route.query.job);}
      if(this.$route.query.lng){ get.push("language="+this.$route.query.lng);}
      if(this.$route.query.spec){ get.push("specialization="+this.$route.query.spec);}
      var params = get.length==0?"":get.join("&");
      api
        .request("get", "/search/professional?"+params+"&order=lastname:ASC&limit=10")
        .then(response => {
          this.list = response
        })
        .catch(error => {
           console.log(error);
        })
    }
  },
  mounted() {
    this.getRessult()  
  },
  watch: {
    currentUrl() {
      this.getRessult()
    }
  }
};
</script>

<style lang="css" scoped>
  
</style>
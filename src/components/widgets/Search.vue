<template>
    <div class="search">
        <div class="container" style="margin-top: 120px" v-if="type.toLowerCase()=='home'">
            <form class="form" @submit.prevent="actionSeach">
                <div class="row">
                    <div class="col-5 form-group">
                        <select class="form-control" v-model="job">
                            <option value="">Quel type de professionel cherchez vous ?</option>
                            <optgroup label="liste des métiers">
                                <option v-for="(element, index) in listJob" :key="index" :value="element.id">{{element.name}}</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-5 form-group">
                        <input type="text" class="form-control" placeholder="lieu" v-model.trim="location">
                    </div>
                    <div class="col-2 form-group">
                        <button type="submit" class="form-control btn btn-primary">Recherche</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="container" v-else>
            <form class="form" @submit.prevent="actionSeach">
                <div class="row">
                    <div class="col-5 form-group">
                        <select class="form-control" v-model="job">
                            <option value="">Quel type de professionel cherchez vous ?</option>
                            <optgroup label="liste des métiers">
                                <option v-for="(element, index) in listJob" :key="index" :value="element.id">{{element.name}}</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-5 form-group">
                        <input type="text" class="form-control" placeholder="lieu" v-model.trim="location">
                    </div>
                    <div class="col-2 form-group">
                        <button type="submit" class="form-control btn btn-primary">Recherche</button>
                    </div>
                </div>
                <div class="row">
                     <div class="col-5 form-group">
                        <input type="text" class="form-control" placeholder="spécialisation" v-model.trim="specialization">
                     </div>
                     <div class="col-5 form-group">
                        <select class="form-control" v-model="languages" multiple>
                            <option value="">Choisissez les langues ?</option>
                            <optgroup label="liste des langues">
                                <option v-for="(element, index) in listLanguages" :key="index" :value="element.ref">{{element.name}}</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
  
  name: "Search",
  props: ["type","listJob","listLanguages","currentUrl"],
  data() {
    return {
      job: "",
      location: "",
      languages:[],
      specialization:""
    }
  },
  methods: {
    actionSeach(){
        var lng = this.languages.toString();
        var url = '/result?job='+this.job+'&location='+this.location+'&lng='+lng+'&spec='+this.specialization;
        if(url != this.currentUrl){
            this.$router.push(url);
        }
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
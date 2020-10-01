<template>
    <div class="result-card">
        <p><strong>{{nbResult.length}} résultat{{plurial}} trouvé{{plurial}}</strong></p>
        <br><br>
        <section v-for="(element, index) in list" :key="index" v-if="element.User.Speaks.length">
            <router-link :to="'/expert/'+element.id">
                <div class="row">
                    <div class="col-2"><img :src="$store.state.serverURI+element.photo" width="90" height="90" alt=""></div>
                    <div class="col-5">
                        <ul>
                            <li><strong>{{element.title}}</strong> {{element.lastName}} {{element.firstName}}</li>
                            <li>{{element.Job.name}}</li>
                            <li>spécialisé{{element.gender=="F"?"e":""}} en {{element.specialization.toLowerCase()}}</li>
                            <li>langue(s) parlé(s): <strong><span v-for="(item, i) in element.User.Speaks" :key="i">{{item.Language.name}}{{i != element.User.Speaks.length - 1?",":""}} </span></strong></li>
                        </ul>
                    </div>
                    <!--
                    <div class="col-5">
                        <form>
                            <h6 class="text-center">Prendre RDV</h6>
                            <div v-if="element.Agendas.length">
                                <select name="" class="form-control" v-model="motif">
                                    <option value="">Motif de RDV</option>
                                    <option value="Consultation">Consultation</option>
                                    <option value="Ai-je besoin ?">Ai-je besoin ?</option>
                                </select>
                                <hr>
                                <h6 class="text-center">Choisir sur l'emploi du temps</h6>

                                <label  v-for="(item, i) in element.Agendas" :key="i"><input type="radio" name="rdv" :value="item.id">{{$options.filters.getDatetimeFr(item.day)}} &nbsp;&nbsp;</label>

                            </div>
                            <div v-else class="text-danger">
                                Créneau horaire non disponible pour prendre RDV
                            </div>
                            
                        </form>
                        
                    </div>
                    -->
                </div>
            </router-link>
            <br>
        </section>
    </div>
</template>

<script>

export default {
  
  name: "ResultCard",
  props: ["list"],
  data() {
    return {
        nbResult: [],
        plurial: this.nbResult>1?"s":"",
        motif:""
    }
  },
  methods: {
      
  },
  mounted() {
      console.log(this.list);
  },
  watch: {

  }
};
</script>

<style lang="css" scoped>
  
</style>
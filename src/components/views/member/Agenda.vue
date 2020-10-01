<template>
  <!-- Main content -->
  <section class="agenda">
      <br><br>
      <h1>Ajouter mon agenda</h1>
      <br><br>
      <form class="form" @submit.prevent="addAgenda">
        <div class="row">
            <div class="form-group col-5">
              <input type="datetime-local" class="form-control">
            </div>
            <div class="form-group col-2">
              <button type="submit" class="btn btn-primary">AJOUTER</button>
            </div>
        </div>
      </form>
      <br><br>
      <h5>Je suis disponible le :</h5>
      <ul v-if="myAgenda.length > 0">
        <li v-for="(element, index) in myAgenda" :key="index">
          <span  v-if="element.status == 1">
            {{$options.filters.getDatetimeFr(element.day)}} <a href="#" @click.prevent="updateAgenda(element.id,2)" class="text-danger"><em class="fa fa-trash"></em></a>
          </span>
           <span  v-if="element.status == 3" class="text-success">
            {{$options.filters.getDatetimeFr(element.day)}} (créneau pris par un client) <em class="fa fa-check"></em>
          </span>
           <span  v-if="element.status == 2" class="text-danger">
            {{$options.filters.getDatetimeFr(element.day)}} (créneau supprimé) <a href="#" @click.prevent="updateAgenda(element.id,1)" class="text-success"><em class="fa fa-reply"></em></a>
          </span>
        </li>
      </ul>
      <div class="text-danger" v-else><em>Vous n'avez pas de disponibilité</em></div>
  </section>
  <!-- /.content -->
</template>

<script>
import api from '../../../api'
export default {
  name: 'Agenda',
  components: {
      
  },
  data () {
    return {
     nbError:0,
     myAgenda:[]
    }
  },
  methods: {
    addAgenda(e){
      var target = e.target
      this.nbError = 0;
      this.nbError = this.$options.filters.formVerified(target);
      if(this.nbError === 0){
        var datetime = target.querySelector("input.form-control");
        var parameters = new URLSearchParams();
        parameters.append("day", datetime.value);
         api
          .request('post', '/professionals/add/agenda', this.$store.state.token, parameters)
          .then(response => {
            if (response.error) {
              console.log(response.error);
            } else {
              this.myAgenda = response;
            }
          })
          .catch(error => {
              console.log(error);
          })
      }
    },
    updateAgenda(id,sta){
        var text = sta == 2 ? "Voulez vous désactiver ce créneau horaire ?":"Voulez vous restaurer ce créneau horaire ?"
        var confirms = confirm(text);
        if(confirms){
            api
            .request('get', '/professionals/update/agenda/'+id+'/'+sta, this.$store.state.token)
            .then(response => {
                if (response.error) {
                        console.log(response.error);
                    } else {
                        this.myAgenda = response;
                    }
            })
            .catch(error => {
                console.log(error);
                this.showMessage("Opération échouée, veuillez contacter le service client Leeberal","danger");
                this.nbError++;
            })

        }
    },
    myAgendas(){
      api
        .request('get', '/professionals/get/agenda/'+this.$parent.user.info.id)
        .then(response => {
            if (response.error) {
              console.log(response.error);
            } else {
              this.myAgenda = response;
            }
        })
        .catch(error => {
            console.log(error);
      })
    }
  },
  mounted () {
    this.myAgendas()
  }
}
</script>
<style scoped>

</style>

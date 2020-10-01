<template>
    <!-- Main content -->
    <div class="info-card">
        <section>
            <div class="col-2" style="margin-bottom: 50px">
                <img :src="$store.state.serverURI+v.photo" alt="" width="120">
            </div>
             <form class="form" @submit.prevent="updateAvatar" v-if="isConnect" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-6">
                        <input type="file" name="avatar" accept="image/*" class="form-control">
                    </div>
                    <div class="col-2">
                        <button type="submit" class="btn btn-warning">Modifer</button>
                    </div>
                </div>
            </form>
            <br>
            <div class="row">
                <div class="col-2"><strong>Nom : </strong></div>
                <div class="col-6"><strong>{{!isCustomer?v.title:""}}</strong> {{v.lastName}}</div>
            </div>
            <div class="row">
                <div class="col-2"><strong>Prénom : </strong></div>
                <div class="col-6">{{v.firstName}}</div>
            </div>
            <div class="row">
                <div class="col-2"><strong>Email : </strong></div>
                <div class="col-6">{{$store.state.user.email}}</div>
            </div>
            <div class="row">
                <div class="col-2"><strong>Né le : </strong></div>
                <div class="col-6" v-if='v.birthday'>{{v.birthday}}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row">
                <div class="col-2"><strong>Genre : </strong></div>
                <div class="col-6" v-if='v.gender'>{{ v.gender=="H"?"Homme":"Femme" }}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row" v-if="isCustomer">
                <div class="col-2"><strong>Adresse : </strong></div>
                <div class="col-6" v-if='v.address'>{{v.address}}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row">
                <div class="col-2"><strong>Profession : </strong></div>
                <div class="col-6" v-if='isCustomer?v.job:v.JobId'>{{isCustomer?v.job:v.Job.name}}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row" v-if="!isCustomer">
                <div class="col-2"><strong>Spécialisation: </strong></div>
                <div class="col-6" v-if='v.specialization'>{{v.specialization}}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row" v-if="!isCustomer">
                <div class="col-2"><strong>Langues: </strong></div>
                <div class="col-6" v-if='s.length > 0'>
                    <span v-for="(element, index) in s" :key="index">{{element.Language.name}}{{index != s.length - 1?",":""}} </span>
                </div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row" v-if="!isCustomer">
                <div class="col-2"><strong>Description: </strong></div>
                <div class="col-6" v-if='v.bio'>{{v.bio}}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
        </section>
    </div>
  <!-- /.content -->
</template>

<script>
import api from '../../api'

export default {
  name: 'InfoCard',
  props: ['c','s','isCustomer','isConnect'],
  components: {
      
  },
  data () {
    return {
        v: this.c,
        nbError: 0
    }
  },
  methods: {
    updateAvatar(e) {
      var target = e.target
      this.nbError = 0;
      this.nbError = this.$options.filters.formVerified(target);
      var link = this.isCustomer ? '/customers/update/avatar':'/professionals/update/avatar';

      if (this.nbError == 0){
          this.$options.filters.disabled(".form",true);
          setTimeout(() => {
                var parameters = new FormData();
                parameters.append("avatar", target.querySelector('input[type=file]').files[0]);
                api
                    .request('post_file', link, this.$store.state.token, parameters)
                    .then(response => {
                        if (response.error) {
                                console.log(response.error);
                            } else {
                                var localUser = JSON.parse(window.localStorage.getItem("user"));
                                this.v = response;
                                
                                if(this.isCustomer){
                                    localUser.Customers[0] = response;
                                } else {
                                    localUser.Professionals[0] = response;
                                }

                                this.$store.commit('SET_USER', localUser);
                                if (window.localStorage) {
                                    window.localStorage.setItem('user', JSON.stringify(localUser));
                                }
                                window.localStorage.setItem('user', JSON.stringify(localUser));
                                this.$parent.$parent.$parent.getUser(); 
                                target.querySelector('input[type=file]').value="";
                            }
                    })
                    .catch(error => {
                        console.log(error);
                    })
                this.$options.filters.disabled(".form",false);
                
            }, 3000);
      }

    }
  },
  mounted () {
  
  }
}
</script>
<style scoped>

</style>

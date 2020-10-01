<template>
      <div class="form-login">
          
        <h2>J’ai déjà un compte Leeberal</h2>
        <div class="form-group col-12">
        <a href="#" class="btn btn-theme col-12 google"><em class="fa fa-google"></em> Se connecter avec Google</a>
        </div>
        <form  action="" class="col-12 form" @submit.prevent="login" >
            <div :class="'form-group col-5 alert alert-'+typeMessage" v-if="nbError > 0">{{message}}</div>
            <div class="form-group col-12">
                <input type="text" name="email" id="email" v-model.trim="email" class="form-control" placeholder="Adresse email">
                <span class="text-danger" v-if="!emailFormat">* Le format de l'email est incorrect</span>
            </div>
            <div class="form-group col-12">
                <input type="password" id="password" name="password" v-model.trim="password" class="form-control" placeholder="Mot de passe" >
            </div>
            <div class="form-group text-center">
                <button type="submit" class="btn btn-theme-secondary col-6 submit">SE CONNECTER</button>
            </div>
           
        </form>
        <a href="#" class="link forgot">mot de passe oublié ?</a>
        <h6 class="new">Nouveau sur Leeberal ?</h6>
        <router-link to="/register">
          <a href="#" class="btn btn-link sign-up">S’INSCRIRE</a>
        </router-link>
      </div>

</template>

<script>
import api from '../../api'

export default {
  name: "FormLogin",
  data(){
      return {
          email:"",
          password:"",
          nbError: 0,
          message: "",
          typeMessage: "success",
          emailFormat: true,
      }
  },
  methods: {
      login(e){ 
        this.nbError = 0;
        this.nbError = this.$options.filters.formVerified(e.target);

        if(this.nbError !== 0){
            this.showMessage("Veuillez remplir tous les champs !","danger");
        }

        this.emailFormat = this.$options.filters.validMail(this.email, "#email");

        if (this.nbError == 0 && this.emailFormat){
            document.querySelector("#email").classList.remove("is-invalid");
            this.$options.filters.disabled(".form",true);

            setTimeout(() => {
              var parameters = new URLSearchParams();
              parameters.append("email", this.email);
              parameters.append("password", this.password);

              api
                .request('post', '/users/login', this.$store.state.token, parameters)
                .then(response => {
                    if (response.userId) {
                      var token = 'Bearer ' + response.token;
                      
                      this.$store.commit('SET_TOKEN', token);
                      if (window.localStorage) {
                        window.localStorage.setItem('token', token);
                      }
                      
                      this.getCustomer(token);

                    } else {
                        this.showMessage(response.error,"danger");
                        this.nbError++;
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.showMessage("Opération échouée, veuillez contacter le service client Leeberal","danger");
                    this.nbError++;
                })
              this.$options.filters.disabled(".form",false);
            }, 3000);
            
        }
      },
      getCustomer(token){
        api
          .request('get', '/users/get/customer', token)
          .then(response => {
              if (response.id) {
                if(response.Customers.length != 0){
                  this.$store.commit('SET_USER', response);
                  if (window.localStorage) {
                    window.localStorage.setItem('user', JSON.stringify(response));
                  }
                  this.$router.push('/user');
                } else {
                  this.getProfessional(token);
                }

              } else {
                  this.showMessage(response.error,"danger");
                  this.nbError++;
              }
          })
          .catch(error => {
              console.log(error);
              this.showMessage("Opération échouée, veuillez contacter le service client Leeberal","danger");
              this.nbError++;
          })
      },
      getProfessional(token){
        api
          .request('get', '/users/get/legal', token)
          .then(response => {
              if (response.id) {
                if(response.Professionals.length != 0){
                  this.$store.commit('SET_USER', response);
                  if (window.localStorage) {
                    window.localStorage.setItem('user', JSON.stringify(response));
                  }
                  this.$router.push('/user');
                }

              } else {
                  this.showMessage(response.error,"danger");
                  this.nbError++;
              }
          })
          .catch(error => {
              console.log(error);
              this.showMessage("Opération échouée, veuillez contacter le service client Leeberal","danger");
              this.nbError++;
          })
      },
      showMessage(content, type){
        this.typeMessage = type;
        this.message = content;
      }
  }
};
</script>

<style lang="css" scoped>

</style>

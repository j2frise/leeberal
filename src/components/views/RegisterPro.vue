
<template>
      <div class="register-pro">
        <br><br>
        <h2>inscription professionel leeberal</h2>
        <form  action="" class="col-12 form" @submit.prevent="register">
            <div :class="'form-group col-5 alert alert-'+typeMessage" v-if="nbError > 0">{{message}}</div>
            <div class="form-group col-5">
                <input type="text" name="name" id="name" v-model.trim="name" class="form-control" placeholder="Nom de la société">
            </div>
             <div class="form-group col-5">
                 <div class="row">
                     <div class="form-group col-6">
                         <select name="type" id="" class="form-control" v-model="type">
                             <option value="">choisissez le type</option>
                             <option value="siret">SIRET</option>
                             <option value="siren">SIREN</option>
                         </select>
                     </div>
                     <div class="form-group col-6">
                        <input type="text" name="number" id="number" v-model.trim="number" class="form-control" placeholder="Numéro professionel">
                     </div>
                 </div>
            </div>
            <div class="form-group col-5">
                <input type="text" name="email" id="email" v-model.trim="email" class="form-control" placeholder="Adresse email">
                <span class="text-danger" v-if="!emailFormat">* Le format de l'email est incorrect</span>
            </div>
             <div class="form-group col-5">
                 <div class="row">
                     <div class="form-group col-6">
                         <input type="text" name="lastname" id="lastname" v-model.trim="lastname" class="form-control" placeholder="Nom">
                     </div>
                     <div class="form-group col-6">
                        <input type="text" name="firstname" id="firstname" v-model.trim="firstname" class="form-control" placeholder="Prénom">
                     </div>
                 </div>
            </div>
           
            <div class="form-group col-5">
                <input type="text" name="phone" id="phone" v-model.trim="phone" class="form-control" placeholder="téléphone">
                <span class="text-danger" v-if="!phoneFormat">* Le format du téléphone est incorrect</span>
            </div>
            <div class="form-group col-5">
                <input type="password" id="password" name="password" v-model.trim="password" class="form-control" placeholder="Mot de passe" >
                <span class="text-danger" v-if='!passFormat'>* le mot de passe doit contenir plus de 6 caractère, et au moins un chiffre, une lettre majiscule et une lettre minuscule</span>
            </div>
              <div class="form-group col-5">
                <input type="password" id="cpassword" name="cpassword" v-model.trim="cpassword" @input="confirmationPassword" class="form-control" placeholder="Confirmer le mot de passe" >
                <span class="text-danger" v-if='!isSame'>* Mot de passe non identique</span>
            </div>
            <div class="form-group col-5">
                <button type="submit" class="btn btn-theme-secondary col-6 submit">S'INSCRIRE</button>
            </div>
           
        </form>
        <router-link to="/login">
            <a >Je suis déjà membre</a>
        </router-link>
        <br>
        <router-link to="/register">
            <a >Je veux m'inscrire entant que client</a>
        </router-link>
        
      </div>

</template>

<script>
import api from '../../api'
export default {
  name: "RegisterPro",
  data(){
      return {
          email:"",
          password:"",
          cpassword:"",
          firstname:"",
          lastname:"",
          name:"",
          phone:"",
          number:"",
          type:"",
          nbError: 0,
          message: "",
          typeMessage: "success",
          isSame: true,
          passFormat: true,
          emailFormat: true,
          phoneFormat: true
      }
  },
  methods: {
      register(e){ 
        this.nbError = 0;
        if(this.isSame){
            this.nbError = this.$options.filters.formVerified(e.target);

            if(this.nbError !== 0){
                this.showMessage("Veuillez remplir tous les champs !","danger");
            }

            this.emailFormat = this.$options.filters.validMail(this.email, "#email");
            this.phoneFormat = this.$options.filters.phoneFrance(this.phone, "#phone");
            if(this.cpassword != ""){
                this.confirmationPassword();
            }
            this.passFormat = this.$options.filters.validPassword(this.password, "#password");

            if (this.nbError == 0 && this.isSame && this.passFormat && this.emailFormat && this.phoneFormat){
                document.querySelector("#email").classList.remove("is-invalid");
                this.$options.filters.disabled(".form",true);

                setTimeout(() => {
                    var parameters = new URLSearchParams();
                    parameters.append("email", this.email);
                    parameters.append("password", this.password);
                    parameters.append("firstname", this.firstname);
                    parameters.append("lastname", this.lastname);
                    parameters.append("company", this.name);
                    parameters.append("phone", this.phone);
                    parameters.append("type", this.type);
                    parameters.append("number", this.number);
                    parameters.append("compte", 1);

                    api
                        .request('post', '/users/register', this.$store.state.token, parameters)
                        .then(response => {
                            if (response.userId) {
                                this.$router.push('/confirm/2')
                            } else {
                                document.querySelector("#email").classList.add("is-invalid");
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
        }
      },
      confirmationPassword(){
          if(this.cpassword !== this.password){
              document.querySelector("#cpassword").classList.add("is-invalid");
              this.isSame = false
          } else {
              document.querySelector("#cpassword").classList.remove("is-invalid");
              this.isSame = true
          }
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

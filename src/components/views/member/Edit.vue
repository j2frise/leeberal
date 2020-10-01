<template>
  <!-- Main content -->
  <div class="edit">
    <br><br>
    <router-link :to='$route.matched[0].path+"/profile"'>
        <a class="btn btn-danger">Annuler</a>
    </router-link>
    <section v-if="type == 'profile'">
        <br><br>
        <h4>Changer le mot de passe</h4>
        <form  action="" class="col-12 formPass" @submit.prevent="changePassword">
            <div :class="'form-group col-7 alert alert-'+typeMessagePass" v-if="nbErrorPass > 0">{{messagePass}}</div>
            <div :class="'form-group col-7 alert alert-'+typeMessagePass" v-else-if="nbErrorPass == -1">{{messagePass}}</div>
            <div class="form-group col-7">
                <input type="password" id="apassword" name="apassword" v-model.trim="apassword" class="form-control" placeholder="Ancien mot de passe" >
            </div>
            <div class="form-group col-7">
                <input type="password" id="npassword" name="npassword" v-model.trim="npassword" class="form-control" placeholder="Nouveau mot de passe" >
                <span class="text-danger" v-if='!passFormat'>* le mot de passe doit contenir plus de 6 caractère, et au moins un chiffre, une lettre majiscule et une lettre minuscule</span>
            </div>
            <div class="form-group col-7">
                <input type="password" id="cpassword" name="cpassword" v-model.trim="cpassword" @input="confirmationPassword" class="form-control" placeholder="Confirmer le mot de passe" >
                <span class="text-danger" v-if='!isSame'>* Mot de passe non identique</span>
            </div>
            <div class="form-group col-7">
                <button type="submit" class="btn btn-warning col-6 submit">MODIFIER</button>
            </div>
            
        </form>

        <br><br>
        <h4>Modifier les informations personnelles</h4>
        <form  action="" class="col-12 form" @submit.prevent="changerInfoCustomer" v-if="$parent.$parent.isCustomer">
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-if="nbError > 0">{{message}}</div>
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-else-if="nbError == -1">{{message}}</div>
            <div class="form-group col-7">
                <input type="text" name="lastname" id="lastname" v-model.trim="lastname" class="form-control" placeholder="Nom">
            </div>
            <div class="form-group col-7">
                <input type="text" name="firstname" id="firstname" v-model.trim="firstname" class="form-control" placeholder="Prénom">
            </div>
            <div class="form-group col-7" v-if="!genderBirthday">
                Vous êtes un 
                <input type="radio" name="gender" v-model="gender" value="H" :checked="gender==='H'" > Homme | une 
                <input type="radio" name="gender" v-model="gender" value="F" :checked="gender==='F'"> Femme
            </div>
            <div class="form-group col-7" v-if="!genderBirthday">
                date de naissance
                <input type="date" name="birthday" id="birthday" v-model.trim="birthday" class="form-control" placeholder="Date de naissance">
            </div>
            <div class="form-group col-7">
                <input type="text" name="address" id="address" v-model.trim="address" class="form-control" placeholder="Adresse">
            </div>
            <div class="form-group col-7">
                <input type="text" name="phone" id="phone" v-model.trim="phone" class="form-control" placeholder="téléphone">
                <span class="text-danger" v-if="!phoneFormat">* Le format du téléphone est incorrect</span>
            </div>
            <div class="form-group col-7">
                <input type="text" name="job" id="job" v-model.trim="job" class="form-control" placeholder="Profession">
            </div>
            <div class="form-group col-7">
                <button type="submit" class="btn btn-warning col-6 submit">MODIFIER</button>
            </div>
            
        </form>

        <form  action="" class="col-12 form" @submit.prevent="changerInfoProfessional" v-if="!$parent.$parent.isCustomer">
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-if="nbError > 0">{{message}}</div>
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-else-if="nbError == -1">{{message}}</div>
            <div class="form-group col-7">
                <input type="text" name="lastname" v-model.trim="lastname" class="form-control require" placeholder="Nom">
            </div>
            <div class="form-group col-7">
                <input type="text" name="firstname" v-model.trim="firstname" class="form-control require" placeholder="Prénom">
            </div>
            <div class="form-group col-7" v-if="!genderBirthday">
                Vous êtes un 
                <input type="radio" name="gender" v-model="gender" value="H" :checked="gender==='H'" > Homme | une 
                <input type="radio" name="gender" v-model="gender" value="F" :checked="gender==='F'"> Femme
            </div>
            <div class="form-group col-7" v-if="!genderBirthday">
                date de naissance
                <input type="date" name="birthday" v-model.trim="birthday" class="form-control require" placeholder="Date de naissance">
            </div>
            <div class="form-group col-7">
                <select name="job" class="form-control require" v-model="jobId">
                    <option value="">Choisissez la profession</option> 
                    <option v-for="(element, index) in $parent.$parent.listJobs" :key="index" :value="element.id" :selected="jobId == element.id ? 'selected':false">{{element.name}}</option>
                </select>
            </div>
             <div class="form-group col-7">
                <input type="text" name="specialization" v-model.trim="specialization" class="form-control require" placeholder="Spécialisation">
            </div>
             <div class="form-group col-7">
                <select name="title" class="form-control require" v-model="title">
                    <option value="" >Titre de profession</option>
                    <option value="Maître" :selected="title == 'Maître' ? 'selected':false">Mâitre</option>
                    <option value="Docteur" :selected="title == 'Docteur' ? 'selected':false">Docteur</option>
                    <option value="Professeur" :selected="title == 'Professeur' ? 'selected':false">Professeur</option>
                </select>
            </div>
             <div class="form-group col-7">
                 <label style="margin-left: 15px" v-for="(e, i) in $parent.$parent.listLanguages" :key="i">
                    <input type="checkbox" :value="e.id" v-model="languages"> {{e.name}}
                 </label> 
            </div>
            <div class="form-group col-7">
                <textarea name="bio" rows="3" class="form-control require" v-model="bio"></textarea>
            </div>
            <div class="form-group col-7">
                <button type="submit" class="btn btn-warning col-6 submit">MODIFIER</button>
            </div>
        </form>

    </section>
    
    <section v-if="type == 'bank' && !$parent.$parent.isCustomer">
        <br><br>
        <h4>Mes coordonnées bancaires</h4>
        <form  action="" class="col-12 form" @submit.prevent="changerBank">
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-if="nbError > 0">{{message}}</div>
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-else-if="nbError == -1">{{message}}</div>
            <div class="form-group col-7">
                <label for="">IBAN</label>
                <input type="text" name="iban" id="iban" v-model.trim="iban" class="form-control" placeholder="Non renseigné">
            </div>
            <div class="form-group col-7">
                <label for="">BIC</label>
                <input type="text" name="bic" id="bic" v-model.trim="bic" class="form-control" placeholder="Non renseigné">
            </div>
            <div class="form-group col-7">
                <button type="submit" class="btn btn-warning col-6 submit">MODIFIER</button>
            </div>
            
        </form>
    </section>

     <section v-if="type == 'work' && !$parent.$parent.isCustomer">
        <br><br>
        <h4>Modifier les informations professionnelles</h4>
        <form  action="" class="col-12 form" @submit.prevent="changerWork">
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-if="nbError > 0">{{message}}</div>
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-else-if="nbError == -1">{{message}}</div>
            <div class="form-group col-7">
                <input type="text" name="address" v-model.trim="address" class="form-control require" placeholder="Adresse">
            </div>
            <div class="form-group col-7">
                <input type="text" name="phone" id="phonePro" v-model.trim="phone" class="form-control require" placeholder="téléphone">
                <span class="text-danger" v-if="!phoneFormat">* Le format du téléphone est incorrect</span>
            </div>
             <div class="form-group col-7">
                 <div class="row">
                     <div class="form-group col-6">
                         <select name="type" class="form-control require" v-model="typeNum">
                             <option value="">choisissez le type</option>
                             <option value="siret">SIRET</option>
                             <option value="siren">SIREN</option>
                         </select>
                     </div>
                     <div class="form-group col-6">
                        <input type="text" name="number" v-model.trim="number" class="form-control require" placeholder="Numéro professionel">
                     </div>
                 </div>
            </div>
            <div class="form-group col-7">
                 <div class="row">
                     <div class="form-group col-6">
                         <select name="onlyPayment" class="form-control require" v-model="onlyPayment">
                             <option value="">Accepte les paiements en ligne</option>
                             <option value="0">Non</option>
                             <option value="1">Oui</option>
                         </select>
                    </div>
                    <div class="form-group col-6">
                        <input type="text" name="hourlyRate" v-model.trim="hourlyRate" class="form-control" placeholder="Taux horaire">
                    </div>
                 </div>
            </div>
            <div class="form-group col-7">
                <button type="submit" class="btn btn-warning col-7 submit">MODIFIER</button>
            </div>
            
        </form>
    </section>

    <section v-if="type == 'rung' && !$parent.$parent.isCustomer">
        <br><br>
        <h4>Modifier concernant le barreau</h4>
        <form class="col-12 form" @submit.prevent>
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-if="nbError > 0">{{message}}</div>
            <div :class="'form-group col-7 alert alert-'+typeMessage" v-else-if="nbError == -1">{{message}}</div>
            <div class="form-group col-7" v-for="(item, index)  in rungName" :key="index">
                <input type="text" @keyup.enter="addInput" v-model.trim="item.value" class="form-control" placeholder="Dans quel barreau êtes vous inscrit ?">
            </div>
            
            <div class="form-group col-7">
                <button type="button" @click.prevent="addRung" class="btn btn-warning col-7 submit">AJOUTER</button>
            </div>
            
        </form>
        <br>
        <h6>Liste</h6>
        <ul v-if="r.length > 0">
            <li v-for="(element, index) in r" :key="index">{{element.name}} <a href="#" @click.prevent="deleteRung(element.id)" class="text-danger"><em class="fa fa-trash"></em></a></li>
        </ul>
        <div class="text-danger" v-else><em>Non renseigné</em></div>
    </section>
  </div>
  <!-- /.content -->
</template>

<script>
import api from '../../../api'

export default {
  name: 'Edit',
  props: ['type'],
  components: {
      
  },
  data () {
    return {
        accept:["profile","work","bank","rung"],
        c: this.$parent.user.info,
        s: this.$parent.user.speak,
        b: this.$parent.user.bank,
        r: this.$parent.user.rung,
        firstname:"",
        lastname:"",
        gender:"H",
        apassword:"",
        cpassword:"",
        npassword:"",
        nbErrorPass: 0,
        messagePass: "",
        address:"",
        phone:"",
        job:"",
        jobId:"",
        birthday:"",
        specialization:"",
        title:"",
        bio:"",
        bic:"",
        iban:"",
        rungName:[],
        languages:[],
        typeNum:"",
        number:"",
        hourlyRate:"",
        onlyPayment:"",
        typeMessagePass: "success",
        nbError: 0,
        message: "",
        typeMessage: "success",
        isSame: true,
        passFormat: true,
        phoneFormat: true,
        genderBirthday: false
    }
  },
  methods: {
    authorization(){
        if (!this.$options.filters.include(this.accept, this.type)) {
            this.$router.push('/user/profile');
        }
    },
    changePassword(e){
        this.nbErrorPass = 0;
        if(this.isSame){
            this.nbErrorPass = this.$options.filters.formVerified(e.target);

            if(this.nbErrorPass !== 0){
                this.showMessagePass("Veuillez remplir tous les champs !","danger");
            }

            if(this.cpassword != ""){
                this.confirmationPassword();
            }
            this.passFormat = this.$options.filters.validPassword(this.npassword, "#npassword");

            if (this.nbErrorPass == 0 && this.isSame && this.passFormat){
                document.querySelector("#apassword").classList.remove("is-invalid");
                this.$options.filters.disabled(".formPass",true);

                setTimeout(() => {
                    var parameters = new URLSearchParams();
                    parameters.append("email", this.$store.state.user.email);
                    parameters.append("password", this.apassword);
                    parameters.append("newPassword", this.npassword);

                    api
                        .request('put', '/users/update', this.$store.state.token, parameters)
                        .then(response => {
                            if (response.error) {
                                document.querySelector("#apassword").classList.add("is-invalid");
                                this.showMessagePass(response.error,"danger");
                                this.nbErrorPass++;
                            } else {
                                this.nbErrorPass = -1;
                                this.showMessagePass("Votre mot de passe a été modifié avec succès","success");
                                this.apassword = "";
                                this.npassword = "";
                                this.cpassword = "";
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            this.showMessagePass("Opération échouée, veuillez contacter le service client Leeberal","danger");
                            this.nbErrorPass++;
                        })
                    this.$options.filters.disabled(".formPass",false);
                }, 3000);
            }
        }
    },
    changerInfoCustomer(e){
        this.nbError = 0;
        this.nbError = this.$options.filters.formVerified(e.target);

        if(this.nbError !== 0){
            this.showMessage("Veuillez remplir tous les champs !","danger");
        }

        this.phoneFormat = this.$options.filters.phoneFrance(this.phone, "#phone");

        if (this.nbError == 0 && this.phoneFormat){
            this.$options.filters.disabled(".form",true);

            setTimeout(() => {
                var parameters = new URLSearchParams();
                parameters.append("firstName", this.firstname);
                parameters.append("lastName", this.lastname);
                parameters.append("phone", this.phone);
                parameters.append("gender", this.gender);
                parameters.append("address", this.address);
                parameters.append("job", this.job);
                parameters.append("birthday", this.birthday);

                api
                    .request('put', '/customers/update/info', this.$store.state.token, parameters)
                    .then(response => {
                        if (response.error) {
                                this.showMessage(response.error,"danger");
                                this.nbError++;
                            } else {
                                var localUser = JSON.parse(window.localStorage.getItem("user"));
                                this.nbError = -1;
                                this.showMessage("Données modifiées avec succès","success");
                                this.c = response;
                                localUser.Customers[0] = response;

                                this.$store.commit('SET_USER', localUser);
                                if (window.localStorage) {
                                    window.localStorage.setItem('user', JSON.stringify(localUser));
                                }
                                window.localStorage.setItem('user', JSON.stringify(localUser));
                                this.$parent.$parent.getUser(); 
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
    changerWork(e){
        this.nbError = 0;
        this.nbError = this.$options.filters.formVerified(e.target,'require');

        if(this.nbError !== 0){
            this.showMessage("Veuillez remplir tous les champs !","danger");
        }

        this.phoneFormat = this.$options.filters.phoneFrance(this.phone, "#phonePro");

        if (this.nbError == 0 && this.phoneFormat){
            this.$options.filters.disabled(".form",true);

            setTimeout(() => {
                var parameters = new URLSearchParams();
                parameters.append("onlyPayment", this.onlyPayment);
                parameters.append("hourlyRate", this.hourlyRate);
                parameters.append("phone", this.phone);
                parameters.append("address", this.address);
                parameters.append("type", this.typeNum);
                parameters.append("number", this.number);

                this.professionalsInfoApi(parameters,'work');
            }, 3000);
            
        }
    },
    changerInfoProfessional(e){
        this.nbError = 0;
        this.nbError = this.$options.filters.formVerified(e.target,"require");

        if(this.nbError !== 0){
            this.showMessage("Veuillez remplir tous les champs !","danger");
        }

        if(this.languages.length == 0){
            this.showMessage("Veuillez remplir tous les champs !","danger");
            this.nbError++;
        }

        if (this.nbError == 0 && this.languages.length > 0){
            this.$options.filters.disabled(".form",true);

            setTimeout(() => {
                var parameters = new URLSearchParams();
                parameters.append("firstName", this.firstname);
                parameters.append("lastName", this.lastname);
                parameters.append("specialization", this.specialization);
                parameters.append("gender", this.gender);
                parameters.append("job", this.jobId);
                parameters.append("bio", this.bio);
                parameters.append("title", this.title);
                parameters.append("birthday", this.birthday);

                this.professionalsInfoApi(parameters,'info');
            }, 3000);
            
        }
    },
    addLangueSpeak(){
         var parameters = new URLSearchParams();
            for(var i = 0; i< this.languages.length; i++){
                parameters.append("language[]", this.languages[i]);
            }
        api
            .request('put', '/professionals/add/speak', this.$store.state.token, parameters)
            .then(response => {
                if (response.error) {
                    this.showMessage(response.error,"danger");
                    this.nbError++;
                } else {
                    var localUser = JSON.parse(window.localStorage.getItem("user"));
                    this.s = response;
                    localUser.Speaks = response;

                    this.$store.commit('SET_USER', localUser);
                    if (window.localStorage) {
                        window.localStorage.setItem('user', JSON.stringify(localUser));
                    }
                    window.localStorage.setItem('user', JSON.stringify(localUser));
                    this.$parent.$parent.getUser(); 
                }
            })
            .catch(error => {
                console.log(error);
                this.showMessage("Opération échouée, veuillez contacter le service client Leeberal","danger");
                this.nbError++;
            })
    },
    changerBank(e){
        this.nbError = 0;
        this.$options.filters.disabled(".form",true);

        setTimeout(() => {
            var parameters = new URLSearchParams();
            parameters.append("bic", this.bic);
            parameters.append("iban", this.iban);

            api
                .request('put', '/professionals/update/bank', this.$store.state.token, parameters)
                .then(response => {
                    if (response.error) {
                            this.showMessage(response.error,"danger");
                            this.nbError++;
                        } else {
                            var localUser = JSON.parse(window.localStorage.getItem("user"));
                            this.nbError = -1;
                            this.showMessage("Données modifiées avec succès","success");
                            this.b = response;
                            localUser.Banks[0] = response;

                            this.$store.commit('SET_USER', localUser);
                            if (window.localStorage) {
                                window.localStorage.setItem('user', JSON.stringify(localUser));
                            }
                            window.localStorage.setItem('user', JSON.stringify(localUser));
                            this.$parent.$parent.getUser(); 
                        }
                })
                .catch(error => {
                    console.log(error);
                    this.showMessage("Opération échouée, veuillez contacter le service client Leeberal","danger");
                    this.nbError++;
                })
            this.$options.filters.disabled(".form",false);
        }, 3000);
    },
    professionalsInfoApi(params,link){
        api
            .request('put', '/professionals/update/'+link, this.$store.state.token, params)
            .then(response => {
                if (response.error) {
                        this.showMessage(response.error,"danger");
                        this.nbError++;
                    } else {
                        var localUser = JSON.parse(window.localStorage.getItem("user"));
                        this.nbError = -1;
                        this.showMessage("Données modifiées avec succès","success");
                        this.c = response;
                        localUser.Professionals[0] = response;

                        this.$store.commit('SET_USER', localUser);
                        if (window.localStorage) {
                            window.localStorage.setItem('user', JSON.stringify(localUser));
                        }
                        window.localStorage.setItem('user', JSON.stringify(localUser));
                        this.$parent.$parent.getUser(); 
                    }
            })
            .catch(error => {
                console.log(error);
                this.showMessage("Opération échouée, veuillez contacter le service client Leeberal","danger");
                this.nbError++;
            })
        this.$options.filters.disabled(".form",false);
    },
    confirmationPassword(){
        if(this.cpassword !== this.npassword){
            document.querySelector("#cpassword").classList.add("is-invalid");
            this.isSame = false
        } else {
            document.querySelector("#cpassword").classList.remove("is-invalid");
            this.isSame = true
        }
    },
    showMessagePass(content, type){
        this.typeMessagePass = type;
        this.messagePass = content;
    },
    showMessage(content, type){
        this.typeMessage = type;
        this.message = content;
    },
    addRung(e){
        this.nbError = 0;

        if(this.rungName.length == 0){
            this.showMessage("Renseigné au moins un barreau","danger");
            this.nbError++;
        }

        if (this.nbError == 0){
            this.$options.filters.disabled(".form",true);
            setTimeout(() => {
                var parameters = new URLSearchParams();
                for(var i = 0; i< this.rungName.length; i++){
                    if(this.rungName[i].value){
                        parameters.append("name[]", this.rungName[i].value);
                    }
                }

                api
                    .request('put', '/professionals/add/rung', this.$store.state.token, parameters)
                    .then(response => {
                        if (response.error) {
                                this.showMessage(response.error,"danger");
                                this.nbError++;
                            } else {
                                var localUser = JSON.parse(window.localStorage.getItem("user"));
                                this.nbError = -1;
                                this.showMessage("Données modifiées avec succès","success");
                                this.r = response;
                                localUser.Rungs = response;

                                this.$store.commit('SET_USER', localUser);
                                if (window.localStorage) {
                                    window.localStorage.setItem('user', JSON.stringify(localUser));
                                }
                                window.localStorage.setItem('user', JSON.stringify(localUser));
                                this.$parent.$parent.getUser(); 
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
    deleteRung(id){
        var confirms = confirm("Voulez-vous supprimer ce barreau ?");
        if(confirms){
            api
            .request('get', '/professionals/delete/rung/'+id, this.$store.state.token)
            .then(response => {
                if (response.error) {
                        console.log(response.error);
                    } else {
                        var localUser = JSON.parse(window.localStorage.getItem("user"));
                        this.r = response;
                        localUser.Rungs = response;

                        this.$store.commit('SET_USER', localUser);
                        if (window.localStorage) {
                            window.localStorage.setItem('user', JSON.stringify(localUser));
                        }
                        window.localStorage.setItem('user', JSON.stringify(localUser));
                        this.$parent.$parent.getUser(); 
                    }
            })
            .catch(error => {
                console.log(error);
                this.showMessage("Opération échouée, veuillez contacter le service client Leeberal","danger");
                this.nbError++;
            })

        }
    },
    defaultValue(){
        this.firstname =  this.c.firstName?this.c.firstName:""
        this.lastname = this.c.lastName?this.c.lastName:""
        this.address = this.c.address?this.c.address:""
        this.phone = this.c.phone?this.c.phone:""
        this.job = this.c.job?this.c.job:""
        this.jobId = this.c.JobId?this.c.JobId:""
        this.bio = this.c.bio?this.c.bio:""
        this.title = this.c.title?this.c.title:""
        this.specialization = this.c.specialization?this.c.specialization:""
        this.genderBirthday = this.c.gender == null && this.c.birthday == null ? false : true
        this.iban = this.b.iban?this.b.iban:""
        this.bic = this.b.bic?this.b.bic:""
        this.hourlyRate =  this.c.hourlyRate == 0 || this.c.hourlyRate?this.c.hourlyRate:""
        this.onlyPayment =  this.c.onlyPayment==1 || this.c.onlyPayment==0 ?this.c.onlyPayment:""
        this.rungName = [{ value: '' }];

        if(this.c.siren){
            this.typeNum = "siren"
            this.number = this.c.siren
        }

        if(this.c.siret){
            this.typeNum = "siret"
            this.number = this.c.siret
        }
        this.languages = []

        for(var i = 0; i<this.s.length; i++){
           this.languages.push(this.s[i].LanguageId)
        }
    },
    addInput(){
        this.rungName.push({ value: '' });
    }
  },
  mounted () {
      this.defaultValue()
      this.authorization()
  },
  watch: {
    c() {
      this.defaultValue()
    },
    s() {
      this.defaultValue()
    },
    b() {
      this.defaultValue()
    },
    r() {
      this.defaultValue()
    }
  }
}
</script>
<style scoped>

</style>

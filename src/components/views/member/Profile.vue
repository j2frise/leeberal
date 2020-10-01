<template>
  <!-- Main content -->
  <section class="profile">
      <br><br>
      <h3 v-if="!$parent.$parent.isCustomer">Informations de profil</h3>
      
      <info-card :c="$parent.user.info" :s="$parent.user.speak" :isCustomer="$parent.$parent.isCustomer" :isConnect="$parent.$parent.isConnected"/>
      <br><br>
      <router-link to="edit/profile">
          <a class="btn btn-primary">Modifier</a>
      </router-link>
      <div v-if="!$parent.$parent.isCustomer">
        <br><br>
        <h3>Informations professionelles</h3>
        <work-card :c="$parent.user.info"/>
        <br><br>
        <router-link to="edit/work">
            <a class="btn btn-primary">Modifier</a>
        </router-link>
        <br><br>
        <h3>Enregistré{{$parent.user.info.gender == "F"?"e":""}} au barreau de :</h3>
        <rung-card :r="$parent.user.rung"/>
        <br><br>
        <router-link to="edit/rung">
            <a class="btn btn-primary">Modifier</a>
        </router-link>
        <br><br>
        <h3>Informations bancaire</h3>
        <bank-card :b="$parent.user.bank"/>
        <br><br>
        <router-link to="edit/bank">
            <a class="btn btn-primary">Modifier</a>
        </router-link>
      </div>
  </section>
  <!-- /.content -->
</template>

<script>

import InfoCard from '../../widgets/InfoCard.vue'
import BankCard from '../../widgets/BankCard.vue'
import WorkCard from '../../widgets/WorkCard.vue'
import RungCard from '../../widgets/RungCard.vue'
export default {
  name: 'Profile',
  components: {
    InfoCard,
    BankCard,
    WorkCard,
    RungCard
  },
  data () {
    return {

    }
  },
  methods: {
    
  },
  mounted () {
    
  }
}
</script>
<style scoped>

</style>

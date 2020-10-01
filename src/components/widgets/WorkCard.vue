<template>
    <!-- Main content -->
    <div class="work-card">
        <section>
            <div class="row">
                <div class="col-3"><strong>Enseigne : </strong></div>
                <div class="col-6">{{c.companyName}}</div>
            </div>
            <div class="row" v-if='c.siren'>
                <div class="col-3"><strong>Siren : </strong></div>
                <div class="col-6">{{c.siren}}</div>
            </div>
            <div class="row" v-if='c.siret'>
                <div class="col-3"><strong>Siret : </strong></div>
                <div class="col-6">{{c.siret}}</div>
            </div>
            <div class="row">
                <div class="col-3"><strong>Adresse : </strong></div>
                <div class="col-6" v-if='c.address'>{{c.address}}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row">
                <div class="col-3"><strong>Téléphone : </strong></div>
                <div class="col-6">{{c.phone}}</div>
            </div>
            <div class="row">
                <div class="col-3"><strong>Paiement en ligne : </strong></div>
                <div class="col-6" v-if='c.onlyPayment != null'>{{c.onlyPayment == 1?"Oui":"Non"}}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row">
                <div class="col-3"><strong>Taux horaire : </strong></div>
                <div class="col-6" v-if='c.hourlyRate != null'>{{c.hourlyRate}} € / heure</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
        </section>
    </div>
  <!-- /.content -->
</template>

<script>

export default {
  name: 'WorkCard',
  props: ['c'],
  components: {
      
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

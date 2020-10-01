<template>
    <!-- Main content -->
    <div class="bank-card">
        <section>
             <div class="row">
                <div class="col-2"><strong>IBAN : </strong></div>
                <div class="col-6" v-if='b.iban'>{{b.iban}}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
            <div class="row">
                <div class="col-2"><strong>BIC : </strong></div>
                <div class="col-6" v-if='b.bic'>{{ b.bic }}</div>
                <div class="col-6 text-danger" v-else>non renseigné</div>
            </div>
        </section>
    </div>
  <!-- /.content -->
</template>

<script>

export default {
  name: 'BankCard',
  props: ['b'],
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

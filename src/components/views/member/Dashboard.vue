<template>
  <!-- Main content -->
  <section class="dashboard">
      <div v-if="$parent.$parent.isCustomer">
        client
      </div>
      <div v-if="!$parent.$parent.isCustomer">
        pro
      </div>
  </section>
  <!-- /.content -->
</template>

<script>

export default {
  name: 'Dashboard',
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

<template>
    <!-- Main content -->
    <div class="work-card">
        <section>
           <ul v-if="r.length > 0">
               <li v-for="(element, index) in r" :key="index">{{element.name}}</li>
           </ul>
           <div class="text-danger" v-else><em>Non renseigné</em></div>
        </section>
    </div>
  <!-- /.content -->
</template>

<script>

export default {
  name: 'RungCard',
  props: ['r'],
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

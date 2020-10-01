<template>
  <div class="footer">
   <hr><p class="text-center">Copyright Leeberal</p>
  </div>
</template>

<script>
import Lists from '../widgets/Lists.vue'
export default {
  name: "Footer",
  components: {
    Lists
  },
 data() {
   return {
     menuFooter: [ 
       {
         title: 'A propos de Leeberal', 
         data: [{name:'Téléconsultation', link:'#'},{name:'A propos de nous', link:'#'},{name:'Presse', link:'#'},{name:'Besoin d\'aide ?', link:'#'}]
       },
       {
         title: 'Trouvez votre spécialiste', 
         data: [{name:'Avocat', link:'#'},{name:'Expert comptable', link:'#'},{name:'Huissiers', link:'#'},{name:'Notaires', link:'#'},{name:'Traducteurs', link:'#'}]
       },
       {
         title: 'Pour les experts juridiques', 
         data: [{name:'Plateforme de gestion Leeberal', link:'#'},{name:'Communauté Leeberal', link:'#'}]
       }
     ]
   }
 }
};
</script>

<style lang="css" scoped>

</style>
<template>
 	<!-- Footer -->
  <div class="hk-footer-wrap container">
      <footer class="footer">
          <div class="row">
              <div class="col-md-6 col-sm-12">
                  <p>Copyright © 2020 <a href="#" class="text-dark" @click.prevent>Leeberal</a></p>
              </div>
              <div class="col-md-6 col-sm-12">
                  <p class="d-inline-block">Suivez nous sur </p>
                  <a href="#" target='_blank' class="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span class="btn-icon-wrap"><i class="fa fa-facebook"></i></span></a>
                  <a href="#" target='_blank' class="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span class="btn-icon-wrap"><i class="fa fa-linkedin"></i></span></a>
                  <a href="#" target='_blank' class="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"><span class="btn-icon-wrap"><i class="fa fa-instagram"></i></span></a>
              </div>
          </div>
      </footer>
  </div>
  <!-- /Footer -->
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
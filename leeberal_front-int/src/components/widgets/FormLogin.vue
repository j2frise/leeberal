<template>
      <div class="form-login">
          
        <h2>J’ai déjà un compte Leeberal</h2>
        <div class="form-group col-12">
        <a href="#" class="btn btn-theme col-12 google"><i class="fa fa-google"></i> Se connecter avec Google</a>
        </div>
        <form  action="" class="col-12 form">
            <div class="form-group col-12">
                <input type="text" class="form-control" placeholder="Adresse email ou numéro de téléphone" required>
            </div>
            <div class="form-group col-12">
                <input type="password" class="form-control" placeholder="Mot de passe" required>
            </div>
            <div class="form-group text-center">
                <button type="submit" class="btn btn-theme-secondary col-6 submit">SE CONNECTER</button>
            </div>
           
        </form>
        <a href="#" class="link forgot">mot de passe oublié ?</a>
        <h6 class="new">Nouveau sur Leeberal ?</h6>
        <a href="#" class="btn btn-link sign-up">S’INSCRIRE</a>
      </div>

</template>

<script>

export default {
  name: "FormLogin"
};
</script>

<style lang="css" scoped>

</style>

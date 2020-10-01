<template>
    <div class="form-sign">    
        
        <h1>Vous êtes un professionnel juridique ?</h1>
        <p>Un de nos experts vous recontacte.</p>
        <form  action="" class="col-12 form">
            <div class="row">
                <div class="form-group ">
                    <input type="text" class="form-control" placeholder="Nom *" required>
                </div>
                <div class="form-group ">
                    <input type="text" class="form-control" placeholder="Prénom *" required>
                </div>
            </div>
            <div class="row">
                <div class="form-group ">
                    <input type="text" class="form-control" placeholder="Code postale cabinet *" required>
                </div>
                <div class="form-group ">
                    <input type="text" class="form-control" placeholder="Téléphone portable *" required>
                </div>
            </div>
            <div class="form-group col-12">
                <input type="text" class="form-control" placeholder="Votre spécialité *" required>
            </div>
            <div class="form-group col-12">
                <input type="text" class="form-control" placeholder="Adresse email *" required>
            </div>
            <div class="row">
            <p>*Champs obligatoires</p>
            <div class="form-group col-6 ">
                <button type="submit" class="btn btn-theme-secondary submit">Découvrir Leeberal Pro</button>
            </div>
           </div>
        </form>
            
    </div>

</template>

<script>

export default {
  name: "FormSign"
};
</script>

<style lang="css" scoped>

.form-sign h1 {
    width: 65%;
    font-size: 120%;
}

.form-sign p {
  width: 75%;
  font-size: 100%;
  align-self: flex-end;
  font-weight: bold;
}

.form-sign {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
}

.form-sign .row {
    display: flex;
    justify-content: center;
  }

.form-group {
      border-radius: 15px;
      margin-bottom: 40px;
      margin-left: 15px;
      margin-right: 15px;
      margin-top: 40px;
  }
  
  button {
      justify-content: right;
      border-radius: 30px;
      background: transparent linear-gradient(252deg, #FF4F5A 0%, #FF4F5A 100%) 0% 0% no-repeat padding-box;

  }



  input {
      
  }

</style>

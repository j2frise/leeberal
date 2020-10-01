export function count(tab) {
    return tab.length
}

export function disabled(selector, state){
    var form = document.querySelector(selector);
    Array.from(form.elements).forEach(formElement => formElement.disabled = state);
}

export function validMail(value, selector) {
  var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var state;
  if(!(regEmail.test(value))){
      document.querySelector(selector).classList.add("is-invalid");
      state = false;
  } else {
      document.querySelector(selector).classList.remove("is-invalid");
      state = true;
  }
  return state;
}

export function validPassword(value, selector){
  var regPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,24}$/;
  var state;
  if(!(regPwd.test(value))){
      document.querySelector(selector).classList.add("is-invalid");
      state = false;
  }else{
      document.querySelector(selector).classList.remove("is-invalid");
      state = true;
  }
  return state;
}

export function phoneFrance(value, selector){
    var phone =  /^(01|02|03|04|05|06|07|08|09)[0-9]{8}/gi;
    var state;
    if(phone.test(value) && value.length === 10){
        document.querySelector(selector).classList.remove("is-invalid");
        state = true;
    } else {
        document.querySelector(selector).classList.add("is-invalid");
        state = false;
    }
    return state;
}

export function formVerified(form, addClass=null){
    var err = 0;
    var inputs = addClass ? form.querySelectorAll("input."+addClass+", select."+addClass+", textarea."+addClass):form.querySelectorAll("input, select, textarea");
    inputs.forEach(element => {
        if(element.value.trim()==""){
          element.classList.add("is-invalid");
          err++;
        } else {
          element.classList.remove("is-invalid");
        }
    });
    return err;
}

export function include(arr,obj) {
    return (arr.indexOf(obj) != -1)
}

export function search(name, nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i][name] === nameKey) {
            return myArray[i];
        }
    }
}

export function getDatetimeFr(value){
    var d = new Date(value);
    var date = ("0" + d.getUTCDate()).slice(-2);
    var month = ("0" + (d.getUTCMonth() + 1)).slice(-2);
    var year = d.getUTCFullYear();
    var hours = ("0" + d.getUTCHours()).slice(-2);
    var minutes = ("0" + d.getUTCMinutes()).slice(-2);
    var seconds = ("0" + d.getUTCSeconds()).slice(-2);
    return date + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

}

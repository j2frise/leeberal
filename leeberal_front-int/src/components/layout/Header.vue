<template>
      <div class="header">
        <div class="container">
          <router-link :to="'/'">
            <img class="logo" :src="logo">
          </router-link>
          <nav>
            <div class="mobile">
              <div class="burger">
                <span></span>
              </div>
            </div>
            <div class="nav">
              <ul class="main">
                <li>
                  <a href="#" class=" link-menu btn btn-sm "><img :src="legal">Vous êtes un Expert juridique ?</a>
                </li>
                <!-- communauté leeberal -->
                <li>
                  <router-link :to="'/login'">
                    <a class="link-menu" ><i class="fa fa-user"></i><span> Se connecter </span></a>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="overlay"></div>
            <div class="desktop">
              <router-link :to="'/expert'">
              <a href="#"  class="btn btn-sm btn-theme"><img :src="legal">Vous êtes un Expert juridique ?</a>
              </router-link>
              <!-- communauté leeberal -->
              <a href="#" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-user"></i><span> Se connecter </span></a>
            </div>
          </nav>
        </div>
      </div>
</template>

<script>

export default {
  
  name: "Header",
 data() {
   return {
     logo: require('../../assets/img/logo.png'),
     legal: require('../../assets/img/legal.png')
   }
 }
};
</script>

<style lang="css" scoped>

.btn-sm {
background-color: #FFFFFF;
color: #FF4F5A;
border-color: white;
}

.btn-sm:hover {
  color: black;
}

.header {
  height: 50px;
  background-color: rgba(7,70,121, 0.8);/*"#074679";*/
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.logo {
width: 100px;
}

a {
  text-align: left;
  color: white;
  border-radius: 30px;
}


nav img {
  width: 17px ;
}

.desktop {
  display: none;
}

.mobile {
  position: relative;
}

/*  BURGER */
.burger {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  position: fixed;
  z-index: 10;
  top: 24px;
  right: 24px;
}
.burger span {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -25px;
  margin-bottom: 9px;
}
.burger span, .burger span::before, .burger span::after {
  display: block;
  width: 30px;
  height: 3px;
  background-color: white;
  outline: 1px solid transparent;
  -webkit-transition-property: background-color, -webkit-transform;
  -moz-transition-property: background-color, -moz-transform;
  -o-transition-property: background-color, -o-transform;
  transition-property: background-color, transform;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.burger span::before, .burger span::after {
  position: absolute;
  content: "";
}
.burger span::before {
  top: -9px;
}
.burger span::after {
  top: 9px;
}
.burger.clicked span {
  background-color: transparent;
}
.burger.clicked span::before {
  -webkit-transform: translateY(9px) rotate(45deg);
  -moz-transform: translateY(9px) rotate(45deg);
  -ms-transform: translateY(9px) rotate(45deg);
  -o-transform: translateY(9px) rotate(45deg);
  transform: translateY(9px) rotate(45deg);
}
.burger.clicked span::after {
  -webkit-transform: translateY(-9px) rotate(-45deg);
  -moz-transform: translateY(-9px) rotate(-45deg);
  -ms-transform: translateY(-9px) rotate(-45deg);
  -o-transform: translateY(-9px) rotate(-45deg);
  transform: translateY(-9px) rotate(-45deg);
}
.burger.clicked span:before, .burger.clicked span:after {
  background-color: #ffffff;
  
}
.burger:hover {
  cursor: pointer;
}

.nav {
  background-color: #2a2a2a;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  height: 100%;
  max-width: 515px;
  width: 100%;
  padding: 100px 40px 60px 40px;
  overflow-y: auto;
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -ms-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
  -webkit-transition: transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -moz-transition: transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -o-transition: transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.nav.show {
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  -ms-transform: translateX(0px);
  -o-transform: translateX(0px);
  transform: translateX(0px);
}
.nav.show ul.main li {
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  -ms-transform: translateX(0px);
  -o-transform: translateX(0px);
  transform: translateX(0px);
  opacity: 1;
}
.nav.show ul.main li:nth-child(1) {
  transition-delay: 0.15s;
}
.nav.show ul.main li:nth-child(2) {
  transition-delay: 0.3s;
}
.nav.show ul.main li:nth-child(3) {
  transition-delay: 0.45s;
}
.nav.show ul.main li:nth-child(4) {
  transition-delay: 0.6s;
}
.nav.show ul.main li:nth-child(5) {
  transition-delay: 0.75s;
}
.nav.show ul.main li:nth-child(6) {
  transition-delay: 0.9s;
}
.nav.show ul.main li:nth-child(7) {
  transition-delay: 1.05s;
}
.nav.show ul.main li:nth-child(8) {
  transition-delay: 1.2s;
}
.nav.show ul.main li:nth-child(9) {
  transition-delay: 1.35s;
}

.nav ul.main li {
  margin-bottom: 20px;
  -webkit-transform: translateX(40px);
  -moz-transform: translateX(40px);
  -ms-transform: translateX(40px);
  -o-transform: translateX(40px);
  transform: translateX(40px);
  opacity: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.nav ul.main li:last-of-type {
  margin-bottom: 0px;
}



/* format tablet */
@media (min-width: 768px) {
  
  .header {
    height: 70px;
  }

  nav .desktop a {
    margin-left: 70px;
  }

 .nav {
    padding: 120px 90px 70px 90px;
  }

.burger span {
  margin-top: -15px;
}
  
}
/* format desktop */
@media (min-width: 1025px) {

  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}

</style>

<template>
  <div class="user">
      <div class="sidebar">
        <Sidebar :c="user.info" :isCustumer="$parent.isCustomer" />
      </div>
      <section class="content">
        <div class="container">
          <router-view></router-view>
        </div>
      </section>
  </div>
</template>

<script>
import Sidebar from '../../widgets/Sidebar.vue'

export default {
  name: 'User',
  components: {
    Sidebar
  },
  data() {
    return {
      
    }
  },
  computed: {
    user(){
      return {
        info: (this.$parent.isCustomer ? this.$parent.user.Customers[0]:this.$parent.user.Professionals[0]),
        bank: (!this.$parent.isCustomer ? this.$parent.user.Banks[0]:""),
        rung: (!this.$parent.isCustomer ? this.$parent.user.Rungs:""),
        speak: (!this.$parent.isCustomer ? this.$parent.user.Speaks:"")
      }
    }
  },
  methods: {
    professionalActive(){
      if(!this.$parent.isCustomer){
        if(this.$parent.user.status == 0){
          this.$parent.destroy();
          this.$router.push('/confirm/3')
        }
      }
    }
  },
  beforeMount() {
    this.professionalActive();
  }
}
</script>

<style scoped>

  .user {
    display: flex;
    justify-content: flex-end;
  }
  .sidebar {
      padding: 20px;
      background: #4682B4;
      color: white;
      width: 20%;
      position: fixed;
      left: 0;
      top: 100px;
    }

    .content {
      width: 78%;
    }
</style>

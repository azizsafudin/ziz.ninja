<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import Navbar from './components/partials/navbar.vue';
  import Foot from './components/partials/foot.vue';

  export default {
    components: {Navbar,Foot},
    name: 'app',
    data () {
      return {
      }
    },
  }
</script>

<style lang="scss">
  @import 'assets/css/styles.scss';
</style>

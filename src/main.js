// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('vue2-animate/dist/vue2-animate.min.css')

Vue.config.productionTip = false
Vue.filter('truncate', function (string, value) {
  if (string && string.length > value - 3) return string.substring(0, value) + '...';
  else return string;
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

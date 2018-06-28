import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/home.vue'
import Work from '../components/pages/work/index.vue'
import About from '../components/pages/about.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Abdul Aziz',
      }
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      meta: {
        title: 'Abdul Aziz - Work',
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'Abdul Aziz - About',
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});
export default router;

import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage.vue';
import SignUp from './views/SignUp.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import ErrorPage from './views/ErrorPage.vue';

Vue.use(Router);

const redirectActiveUser = async (to, from, next) => {
  if (sessionStorage.getItem('auth-token')) {
    next('/dashboard');
  } else {
    next();
  }
};

const redirectInactiveUser = async (to, from, next) => {
  if (!sessionStorage.getItem('auth-token')) {
    next('/login');
  } else {
    next();
  }
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage,
      beforeEnter: redirectActiveUser,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: redirectInactiveUser,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      beforeEnter: redirectActiveUser,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: redirectActiveUser,
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPage,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});

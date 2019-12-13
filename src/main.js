import Vue from 'vue';

import VueApollo from 'vue-apollo';
import browserDetect from 'vue-browser-detect-plugin';
import { apolloClient } from './apollo';

import App from './App.vue';
import router from './router';


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);
Vue.use(browserDetect);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  apolloProvider,
}).$mount('#app');

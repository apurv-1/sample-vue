import Vue from 'vue';
import App from './App.vue';
import index from "../src/components/index"

Vue.config.productionTip = false;
Vue.use(index);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

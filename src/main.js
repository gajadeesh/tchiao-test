// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import firebase from "firebase/app";
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

// Vue.component('apexchart', VueApexCharts)
// todo
// cssVars()

Vue.use(BootstrapVue)

/* eslint-disable no-new */
// let app;
// firebase.auth().onAuthStateChanged(user => {
//   if (!app) {
//     app = 
    new Vue({ 
        el: '#app',
        router,
        template: '<App/>',
        components: {
          App
      //   }
      // })
    }
  });

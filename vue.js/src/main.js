// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueApollo from "vue-apollo";
import Vuelidate from "vuelidate";
import { apolloClient, messageClient } from "./apollo";
import bulma from "bulma";
import main from "./main.css";
import fontAwesome from "font-awesome/css/font-awesome.min.css";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuelidate);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});

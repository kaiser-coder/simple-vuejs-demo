import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "@/router";
import VueRouter from "vue-router";
import Vuex from "vuex";
import store from "@/stores";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: (h) => h(require("./App.vue")),
}).$mount("#app");

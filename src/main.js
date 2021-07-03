import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "@/router";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");

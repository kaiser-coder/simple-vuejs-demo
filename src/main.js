import Vue, { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import VueRouter from "vue-router";
import router from "@/router";

import Vuex from "vuex";
import store from "@/stores";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);

createApp(App)
  .use(router)
  .use(store)
  .mount("#app")

import Vue from "vue";
import Vuex from "vuex";
import Products from "./modules/Products";
import Carts from "./modules/carts";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Products, Carts, users },
});

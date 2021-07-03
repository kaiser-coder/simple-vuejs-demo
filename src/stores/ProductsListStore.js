import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

const state = {
  products: [],
  selectedProducts: [],
};

const mutations = {
  ADD_PRODUCT_PANEL: (state, product) => {
    state.selectedProducts.push(product);
  },
  REMOVE_PRODUCT_PANEL: (state, id) => {
    _.remove(state.selectedProducts, (el) => {
      return el.id != id;
    });
  },
};

const actions = {
  add_product: (store, product) => {
    store.commit("ADD_PRODUCT_PANEL", product);
  },
  remove_product: (store, id) => {
    store.commit("REMOVE_PRODUCT_PANEL", id);
  },
};

const getters = {
  products: (state) => state.products,
  selectedProducts: (state) => state.selectedProducts,
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
});

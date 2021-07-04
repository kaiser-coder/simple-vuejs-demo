import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import _ from "lodash";

Vue.use(Vuex);

const state = {
  products: [],
  selectedProducts: [],
};

const mutations = {
  FETCH_PRODUCTS: (state) => {
    axios
      .get("https://fakestoreapi.com/products?limit=9")
      .then((response) => (state.products = response.data));
  },
  ADD_PRODUCT_PANEL: (state, product) => {
    let p = _.findIndex(state.selectedProducts, { id: product.id });
    if (p == -1) state.selectedProducts.push(product);
  },
  REMOVE_PRODUCT_PANEL: (state, id) => {
    state.selectedProducts = _.remove(state.selectedProducts, (el) => {
      return el.id != id;
    });
  },
};

const actions = {
  fetch_products: (store) => {
    store.commit("FETCH_PRODUCTS");
  },
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
  selectedProductsCount: (state) => state.selectedProducts.length,
  totalPricePanel: (state) => {
    let total = 0;
    state.selectedProducts.forEach((item) => {
      total += item.price * 1;
    });
    return Math.round(total * 100) / 100;
  },
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
});

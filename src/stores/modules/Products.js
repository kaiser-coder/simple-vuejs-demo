import Product from "@/api/Products";
import _ from "lodash";

const state = {
  products: [],
  selectedProducts: [],
};

const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products;
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
  getProducts: (store) => {
    store.commit("SET_PRODUCTS", Product.getProducts());
  },
  addProduct: (store, product) => {
    store.commit("ADD_PRODUCT_PANEL", product);
  },
  removeProduct: (store, id) => {
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

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
};

import _ from "lodash";

const state = {
  selectedProducts: [],
};

const actions = {
  addProduct: (store, item) => {
    store.commit("ADD_PRODUCT_PANEL", item);
  },
  removeProduct: (store, id) => {
    store.commit("REMOVE_PRODUCT_PANEL", id);
  },
};

const mutations = {
  ADD_PRODUCT_PANEL: (state, item) => {
    let p = _.findIndex(state.selectedProducts, { product: item.product });
    if (p == -1) state.selectedProducts.push(item);
  },
  REMOVE_PRODUCT_PANEL: (state, id) => {
    state.selectedProducts = _.remove(state.selectedProducts, (el) => {
      return el.id != id;
    });
  },
};

const getters = {
  selectedProducts: (state) => state.selectedProducts,
  selectedProductsCount: (state) => state.selectedProducts.length,
  totalPrice: (state) => {
    let total = 0;
    state.selectedProducts.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return Math.round(total * 100) / 100;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

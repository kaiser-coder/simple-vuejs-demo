import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  products: [
    {
      name: "Produit1",
      img: "Image",
      price: "154",
      description:
        "Totam veniam dolor atque architecto aperiam cupiditate eligendi nihil non. Iusto ea consequatur ut dolorem nam. Voluptate velit blanditiis ducimus dolores quis odit debitis veniam quo. Id sed ut velit dolores qui quasi. Et voluptatum vel.",
    },
  ],
  selectedProducts: [],
};

const mutations = {
  ADD_PRODUCT_PANEL: (state, product) => {
    state.selectedProducts.push(product);
  },
};

const actions = {
  add_product_panel: (store, product) => {
    store.commit("ADD_PRODUCT_PANEL", product);
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
  strict: true,
});

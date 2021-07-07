import Product from "@/api/Products";

const state = {
  products: [],
};

const mutations = {
  SET_PRODUCTS: (state) => {
    Product.fetch().then((data) => (state.products = data));
  },
};

const getters = {
  products: (state) => state.products,
};

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
};

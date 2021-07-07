import Product from "@/api/Products";

const state = {
  products: [],
  categories: [],
};

const mutations = {
  SET_PRODUCTS: (state) => {
    Product.fetch().then((data) => (state.products = data));
  },
  SET_CATEGORIES: (state) => {
    state.categories = [
      ...new Set(state.products.map((item) => item.category)),
    ];
  },
};

const actions = {
  getProducts: (store) => {
    store.commit("SET_PRODUCTS");
  },
  getCategories: (store) => {
    store.commit("SET_CATEGORIES");
  },
};

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
};

import Product from "@/api/Products";

const state = {
  products: [],
  categories: [],
};

const mutations = {
  setData: (state) => {
    Product.fetch().then((data) => {
      state.products = data;
      state.categories = [...new Set(data.map((item) => item.category))];
    });
  },
};

const actions = {
  fetchData: (store) => {
    store.commit("setData");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

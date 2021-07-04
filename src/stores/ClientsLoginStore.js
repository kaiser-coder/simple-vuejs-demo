import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import _ from "lodash";

Vue.use(Vuex);

const state = {
  users: [],
  logged_user: [],
};

const getters = {
  users: (state) => state.users,
  loggedUser: (state) => state.logged_user,
};

const mutations = {
  FETCH_USERS: (state) => {
    axios
      .get("https://fakestoreapi.com/users?limit=3")
      .then((response) => (state.users = response.data));
  },
  LOGIN: (state, user) => {
    let u = _.findIndex(state.users, {
      user: user.email,
      password: user.password,
    });
    if (u != -1) state.logged_user = user;
  },
  LOGOUT: (state) => {
    state.logged_user = null;
  },
};

const actions = {
  fetch_users: (store) => {
    store.commit("FETCH_USERS");
  },
  login: (store, user) => {
    store.commit("LOGIN", user);
  },
  logout: (store) => {
    store.commit("LOGOUT");
  },
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

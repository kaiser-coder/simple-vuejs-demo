import user from "@/api/users";
import _ from "lodash";

const state = {
  users: [],
  connectedUser: [],
};

const mutations = {
  setUsers: (state) => {
    user.fetch().then((data) => {
      state.users = data;
    });
  },
  setConnectedUser: (state, user) => {
    let { email, password } = user;
    let index = _.findIndex(state.users, {
      email: email,
      password: password,
    });
    if (index != -1) state.connectedUser = state.users[index];
  },
  unsetConnectedUser: (state) => {
    state.connectedUser = [];
  },
};

const actions = {
  fetchUsers: (store) => {
    store.commit("setUsers");
  },
  auth: (store, user) => {
    store.commit("setConnectedUser", user);
  },
  logout: (store) => {
    store.commit("unsetConnectedUser");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

<template>
  <div>
    <b-button id="show-btn" @click="showModal($bvModal)" variant="info"
      >Acheter ({{ productsCount }})</b-button
    >
    <b-modal id="bv-modal-example" hide-footer hide-header>
      <div class="d-block text-center">
        <h5>Connecter-vous</h5>
      </div>

      <b-form>
        <b-form-group id="input-group-1" label="Email: " label-for="input-1">
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Entrer votre email"
            required
            :value="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Mot de passe:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            placeholder="Entrer votre mot de passe"
            required
            :value="password"
          ></b-form-input>
        </b-form-group>

        <b-button
          @click="login(user)"
          type="submit"
          class="mr-1"
          variant="primary"
          >Se connecter</b-button
        >
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import store from "@/stores/ClientsLoginStore";
import Vuex from "vuex";

export default {
  store: store,
  name: "login-modal",
  data() {
    return {
      user: null,
      email: "",
      password: "",
    };
  },
  props: ["productsCount"],
  computed: {
    ...Vuex.mapGetters(["loggedUser"]),
  },
  methods: {
    ...Vuex.mapActions(["login", "fetch_users"]),
    showModal($bvModal) {
      if (this.loggedUser == []) $bvModal.show("bv-modal-example");
    },
  },
  mounted() {
    this.fetch_users();
  },
};
</script>

<style></style>

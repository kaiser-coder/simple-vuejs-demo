<template>
  <div>
    <b-modal id="bv-modal-user-login" size="md" hide-header hide-footer>
      <b-container>
        <b-row>
          <b-col lg="12">
            <b-form @submit="login(form)">
              <b-form-group
                id="input-group-1"
                label="Votre email:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  placeholder="Entrer votre email"
                  required
                  v-model="form.email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Votre mot de passe:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  placeholder="Entrer votre mot de passe"
                  required
                  v-model="form.password"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="info" class="mr-2"
                >Se connecter</b-button
              >
              <b-button type="reset" variant="danger">Vider</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login-form",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("users", ["auth"]),
    login(form) {
      this.auth(form);
      this.$bvModal.hide("bv-modal-user-login");
    },
  },
};
</script>

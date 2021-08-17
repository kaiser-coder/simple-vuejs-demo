<template>
  <div>
    <b-navbar class="mb-4" toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#">E-commerce</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/products">
            <b-icon icon="shop" font-scale="1"></b-icon>
            Boutique
          </b-nav-item>
          <b-nav-item @click.prevent="$bvModal.show('bv-modal-product-cart')">
            <b-icon icon="cart-fill" font-scale="1"></b-icon>
            Panier
            <b-badge variant="info"
              >{{ selectedProductsCount }}
            </b-badge></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="connectedUser.length == 0">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Utilisateur</em>
            </template>
            <b-dropdown-item
              href=""
              @click.prevent="$bvModal.show('bv-modal-user-login')"
              >Se connecter</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right v-else>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ fullname }}</em>
            </template>
            <b-dropdown-item href="" @click.prevent="logout()"
              >Se Déconnecter</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <login-form></login-form>

    <router-view></router-view>

    <footer class="pt-3 pb-3 bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-12 pb-2">
            <h5>Auteur</h5>
            <ul class="list-unstyled">
              <li v-for="(author, index) in authors" :key="index" class="pb-3">
                {{ author }}
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-12 pb-2">
            <h5>Contacts</h5>
            <ul class="list-unstyled">
              <li>
                <b-icon icon="phone-fill" font-scale="1"></b-icon>
                Téléphone: {{ contacts.phone }}
              </li>
              <li>
                <b-icon icon="envelope-fill" font-scale="1"></b-icon>
                Email: {{ contacts.email }}
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-sm-12 pb-2">
            <h5>A propos</h5>
            <p>
              Et ad fugiat perferendis magni maiores neque sapiente nam minima.
              Cumque molestiae quia quisquam amet. Ratione eligendi quia
              consectetur. Assumenda deleniti ut qui est. In repellat ipsa. Et
              repudiandae distinctio possimus error. Ut deleniti atque eos amet
              nulla ratione iusto est qui. Ab dolorem sit fuga fugit assumenda
              amet doloremque aspernatur similique. Pariatur quod hic eligendi
              odit et et reprehenderit nisi doloremque. Est qui qui possimus et
              enim quidem blanditiis consectetur ducimus. Inventore eum veniam
              sit. Dolorum similique perferendis iure quae rerum labore minima
              et sed. Adipisci ipsum aut nisi possimus explicabo aut. Labore
              quas maiores molestias qui. Repellat officia non nobis beatae sunt
              culpa molestias vitae dolorum.
            </p>
          </div>
        </div>
        <b-row>
          <b-col lg="12" class="text-center">
            <div style="font-size: 2.5rem;">
              <b-icon icon="facebook" class="rounded-circle p-2"></b-icon>
              <b-icon
                icon="instagram"
                class="rounded-circle p-2"
                variant="light"
              ></b-icon>
              <b-icon
                icon="twitter"
                class="rounded-circle p-2"
                variant="light"
              ></b-icon>
            </div>
          </b-col>
        </b-row>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import LoginForm from "@/components/users/LoginForm.vue";

export default {
  name: "main-layout",
  components: {
    LoginForm,
  },
  data() {
    return {
      authors: [
        "Kaiser Coder",
      ],
      contacts: {
        phone: "991.456.1222",
        email: "kaiser-coder@gmail.com",
      },
    };
  },
  mounted() {
    this.fetchUsers();
  },
  computed: {
    ...mapGetters("Carts", ["selectedProductsCount"]),
    ...mapState("users", ["connectedUser"]),

    fullname() {
      return (
        this.connectedUser.name.firstname +
        " " +
        this.connectedUser.name.lastname
      );
    },
  },
  methods: {
    ...mapActions("users", ["fetchUsers", "auth", "logout"]),
  },
};
</script>

<style scoped>
footer {
  min-height: 200px;
}
li {
  font-size: 13px;
}
</style>

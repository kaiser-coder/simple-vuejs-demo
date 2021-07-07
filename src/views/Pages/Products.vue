<template>
  <div>
    <!-- Breadcumb -->
    <b-row>
      <b-col lg="6" class="ml-4">
        <b-nav>
          <b-nav-item link-classes="text-dark" disbaled
            >Toutes les catégories:
          </b-nav-item>
          <b-nav-item
            link-classes="text-dark"
            v-for="(category, index) in categories"
            :key="index"
          >
            {{ category }}
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>

    <div class="container">
      <!-- Product Cart Modal -->
      <cart>
        <cart-item
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></cart-item>
      </cart>

      <div class="row mt-3 mb-3">
        <!-- Product Card -->
        <card
          :product="product"
          v-for="product in products"
          :key="product.id"
          @addToPanel="addProduct(product)"
        ></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/products/Card";
import { mapState, mapActions } from "vuex";
import Cart from "@/components/products/Cart.vue";
import CartItem from "@/components/products/CartItem.vue";

export default {
  name: "products",
  components: {
    Card,
    Cart,
    CartItem,
  },
  computed: {
    ...mapState("Products", ["products", "categories"]),
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("Products", ["fetchData"]),
  },
};
</script>

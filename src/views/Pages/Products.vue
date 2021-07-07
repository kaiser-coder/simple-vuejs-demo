<template>
  <div>
    <!-- Breadcumb -->
    <b-row>
      <b-col lg="6" class="ml-4">
        <b-nav>
          <b-nav-item link-classes="text-dark" @click.prevent="query = ''"
            >Toutes les catégories
          </b-nav-item>
          <b-nav-item
            link-classes="text-dark"
            v-for="(category, index) in categories"
            :key="index"
            @click.prevent="query = category"
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
        <!-- Products Cards -->
        <card
          :product="product"
          v-for="product in filteredProducts"
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
import _ from "lodash";

export default {
  name: "products",
  data() {
    return {
      query: "",
    };
  },
  components: {
    Card,
    Cart,
    CartItem,
  },
  computed: {
    ...mapState("Products", ["products", "categories"]),
    filteredProducts() {
      if (this.query == "") {
        return this.products;
      } else {
        return _.filter(this.products, { category: this.query });
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("Products", ["fetchData"]),
  },
};
</script>

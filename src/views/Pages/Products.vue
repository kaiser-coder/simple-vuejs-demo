<template>
  <div class="row mt-3 mb-3 container-fluid">
    <div class="col-12">
      <div class="row">
        <b-alert show dismissible fade variant="success" class="offset-2 col-8"
          >Achat effectué</b-alert
        >
      </div>
      <div class="row">
        <div class="col-9">
          <div class="row">
            <!-- Product Card -->
            <card
              :product="product"
              v-for="product in products"
              :key="product.id"
              @addToPanel="addProduct(product)"
            ></card>
          </div>
        </div>
        <div class="col-3">
          <!-- Product Panel -->
          <panel></panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/products/Card";
import Panel from "@/components/products/Panel";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "products",
  components: {
    Card,
    Panel,
  },
  computed: {
    ...mapGetters("Products", ["products"]),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("Products", ["addProduct", "getProducts"]),
  },
};
</script>

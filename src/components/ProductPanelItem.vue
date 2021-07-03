<template>
  <b-card-text class="mb-2">
    <div class="alert alert-secondary">
      <div class="row">
        <div class="col-10">
          <b>{{ product.title }}</b>
        </div>
        <div class="col-2">
          <a
            id="drop-btn"
            class="font-weight-bold text-dark"
            @click.prevent="remove_product(id)"
          >
            x
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          {{ product.price }}
        </div>
      </div>
    </div>
  </b-card-text>
</template>

<script>
import store from "@/stores/ProductsListStore.js";
import Vuex from "vuex";

export default {
  store: store,
  name: "product-panel-item",
  props: ["product"],
  methods: {
    ...Vuex.mapActions(["remove_product"]),
  },
};
</script>

<style scoped>
#drop-btn {
  cursor: pointer;
}
</style>

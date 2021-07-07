<template>
  <div>
    <b-modal
      :id="'bv-modal-product-details' + product.id"
      size="xl"
      hide-header
      hide-footer
    >
      <b-row>
        <b-container class="mt-5 mb-5">
          <b-row>
            <img :src="product.image" alt="" class="col-4" />

            <b-col lg="8">
              <h3 class="font-weight-light">{{ product.title }}</h3>
              <b-row>
                <b-col lg="12">
                  <h4 class="font-weight-bold">Ar {{ product.price }}</h4>
                  <p>
                    {{ product.description }}
                  </p>
                </b-col>
              </b-row>

              <b-row>
                <b-col lg="2">
                  <label for="type-number">Nombre: </label>
                </b-col>
                <b-col lg="10">
                  <b-form-input
                    id="type-number"
                    type="number"
                    v-model="qtt"
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row class="mt-4 mb-4">
                <b-col lg="12">
                  <b-button
                    block
                    variant="outline-info"
                    @click.prevent="chooseProduct(product, qtt)"
                  >
                    <b-icon icon="bag-plus" font-scale="1"></b-icon>
                    Ajouter le produit</b-button
                  >
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "product-details",
  props: ["product"],
  data() {
    return {
      qtt: 1,
    };
  },
  methods: {
    ...mapActions("Carts", ["addProduct"]),
    chooseProduct(product, qtt) {
      let item = { product: product, quantity: qtt };
      this.addProduct(item);
      this.$bvModal.hide("bv-modal-product-details" + this.product.id);
    },
  },
};
</script>

<style>
p {
  font-size: 13px;
}
</style>

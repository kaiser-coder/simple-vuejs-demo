<template>
  <div class="col-lg-4 col-sm-12 pb-2">
    <b-card
      id="product-card"
      :img-src="product.image"
      img-alt="Image"
      img-top
      tag="article"
      img-height="400"
    >
      <b-card-text>
        <a
          class="text-muted"
          @click.prevent="
            $bvModal.show('bv-modal-product-details' + product.id)
          "
          >{{ product.title }}</a
        >
        <h6 class="font-weight-bold">
          <b-icon icon="tags-fill" font-scale="1"></b-icon>
          Ar {{ product.price }}
        </h6>
      </b-card-text>
    </b-card>

    <product-details :product="product"></product-details>
  </div>
</template>

<script>
import ProductDetails from "./Details";

export default {
  name: "product-card",
  props: ["product"],
  components: {
    ProductDetails,
  },
};
</script>

<style scoped>
#product-card {
  font-size: 13px;
}
a {
  cursor: pointer;
}
</style>

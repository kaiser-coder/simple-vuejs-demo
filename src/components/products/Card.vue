<template>
  <div class="col-3">
    <b-card
      id="product-card"
      :img-src="product.image"
      img-alt="Image"
      img-top
      tag="article"
    >
      <b-card-text>
        <a href="" class="text-muted">{{ product.title }}</a>
      </b-card-text>
      <b-card-text>
        <h6>Ar {{ product.price }}</h6>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: ["product"],
};
</script>

<style scoped>
#product-card {
  font-size: 13px;
}
</style>

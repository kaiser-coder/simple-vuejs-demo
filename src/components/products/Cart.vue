<template>
  <div>
    <b-modal
      id="bv-modal-product-cart"
      size="lg"
      title="Votre panier"
      hide-footer
    >
      <b-row>
        <b-container class="mb-5">
          <ul class="list-unstyled">
            <slot></slot>
          </ul>

          <b-button block variant="outline-primary">Acheter</b-button>
        </b-container>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "cart",
};
</script>

<style>
p {
  font-size: 13px;
}
</style>

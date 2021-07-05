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
                  <b-form-input id="type-number" type="number"></b-form-input>
                </b-col>
              </b-row>

              <b-row class="mt-4 mb-4">
                <b-col lg="12">
                  <b-button block variant="outline-info">Ajouter</b-button>
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
export default {
  name: "product-details",
  props: ["product"],
};
</script>

<style>
p {
  font-size: 13px;
}
</style>

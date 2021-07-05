<template>
  <div>
    <b-navbar class="mb-4" toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#">E-commerce</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/home">
            <b-icon icon="house" font-scale="1"></b-icon>
            Accueil</b-nav-item
          >
          <b-nav-item href="/products">
            <b-icon icon="shop" font-scale="1"></b-icon>
            Boutique
          </b-nav-item>
          <b-nav-item href="">
            <b-icon icon="cart-fill" font-scale="1"></b-icon>
            Panier <b-badge variant="info">9 </b-badge></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-row>
      <b-col lg="6" class="ml-4">
        <b-nav>
          <b-nav-item link-classes="text-dark" active
            >Toutes les catégories</b-nav-item
          >
          <b-nav-item link-classes="text-dark">Link</b-nav-item>
          <b-nav-item link-classes="text-dark">Another Link</b-nav-item>
          <b-nav-item link-classes="text-dark" disabled>Disabled</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>

    <router-view></router-view>

    <footer class="pt-3 pb-3 bg-dark text-white">
      <div class="container">
        <div class="col-6">
          AUTEURS
        </div>
        <div class="col-6"></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "main-layout",
};
</script>

<style scoped>
footer {
  min-height: 200px;
}
</style>

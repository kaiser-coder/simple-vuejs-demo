<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">E-commerce</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/products">Produits</b-nav-item>
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

    <router-view></router-view>

    <footer class="pt-3 pb-3 bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <p>
              AUTEURS <br>
              <ul>
                <li>RATOMPOARISON Rovasoa Tahinjanahary Nicolas</li>
                <li>HENINTSOA Onjaniaina Stephana</li>
                <li>ANDRIATSILAVO Mahery Sitraka</li>
                <li>RANDRIANIAINA Rajosoa</li>
                <li>ANDRIAMANJATO Tsilavo Hery Sitraka</li>
              </ul>
            </p>
          </div>
          <div class="col-6">
            <p>
              CONTACTS <br>
              <ul>
                <li>Tél : 0345805875</li>
                <li>Email : nicolasratompoarison@gmail.com</li>
              </ul>
            </p>
          </div>
        </div>
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

<template>
  <div id="app">
    <section class="brand">
      <img src="@/assets/brand.png" alt="logo" />
    </section>
    <b-navbar>
      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'gallery' }">
          gallery
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'locations' }">
          locations
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        &copy; MAXMIX {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
$brand-primary: "#EA4C55";

#app {
  .brand {
    display: flex;
    align-content: center;
    justify-content: center;
    img {
      width: 300px;
    }
  }

  .navbar-start {
    display: none;
  }

  .navbar-end {
    margin: auto;
  }

  h1 {
    border-top: 5px solid #ea4c55;
    display: inline-block;
    line-height: 1.5;
  }

  .footer {
    padding: 0.5rem;
    margin: 0.5rem;
  }
}
</style>

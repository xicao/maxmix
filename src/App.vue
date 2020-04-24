<template>
  <div id="app">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/logo.webp" alt="logo" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ name: 'gallery' }">
          Gallery
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'locations' }">
          Locations
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
#app {
  min-height: 100vh;
}
</style>

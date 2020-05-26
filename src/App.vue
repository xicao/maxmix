<template>
  <div id="app">
    <section class="brand shrink0">
      <img src="@/assets/brand.png" alt="logo" />
    </section>
    <b-navbar class="shrink0">
      <template slot="end">
        <b-navbar-item
          tag="router-link"
          exact
          :to="{ name: 'home' }"
          class="has-text-weight-semibold"
        >
          HOME
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'gallery' }"
          class="has-text-weight-semibold"
        >
          GALLERY
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'locations' }"
          class="has-text-weight-semibold"
        >
          LOCATIONS
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view class="grow1" />
    <footer class="footer shrink0">
      <div class="content has-text-centered">
        &copy; MAXMIX {{ new Date().getFullYear() }}
        <a href="https://www.instagram.com/maxmix_home_gifts/" target="_blank">
          <vue-fontawesome :icon="['fab', 'instagram']" />
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
$brand-primary: #ea4c55;

#app {
  a {
    color: $brand-primary;

    &.navbar-item {
      color: #4a4a4a;
    }
  }

  a.navbar-item:focus,
  a.navbar-item:focus-within,
  a.navbar-item:hover,
  a.navbar-item.is-active,
  .navbar-link:focus,
  .navbar-link:focus-within,
  .navbar-link:hover,
  .navbar-link.is-active {
    color: $brand-primary;
  }

  display: flex;
  flex-direction: column;
  height: 100vh;

  .shrink0 {
    flex-shrink: 0;
  }

  .grow1 {
    flex-grow: 1;
  }

  .brand {
    text-align: center;
    img {
      height: auto;
      width: 200px;

      @media screen and (max-width: 735px) {
        & {
          width: 100px;
        }
      }
    }
  }

  .navbar-start {
    display: none;
  }

  .navbar-end {
    margin: auto;
  }

  h1 {
    border-top: 5px solid $brand-primary;
    display: inline-block;
    line-height: 1.5;
  }

  .footer {
    padding: 0.5rem;
    margin: 0.5rem;
    .content {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        margin-left: 10px;
        color: $brand-primary;
      }
    }
  }
}
</style>

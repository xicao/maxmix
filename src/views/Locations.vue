<template>
  <div class="locations">
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-uppercase">
            Locations
          </h1>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns is-multiline is-centered">
        <div class="column is-8">
          <b-collapse
            class="card"
            animation="slide"
            v-for="(location, index) of locations"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index"
          >
            <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
            >
              <p class="card-header-title">
                {{ location.title }}
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'sort-down' : 'sort-up'" />
              </a>
            </div>
            <div class="card-content">
              <div
                class="content"
                style="display: flex; justify-content: space-between"
              >
                <span>{{ location.address }}</span>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Locations",

  data: () => ({
    isOpen: 0,
  }),

  computed: {
    locations() {
      return [
        {
          title: "Arndale Shopping Centre",
          address: "9/470 Torrens Rd, Kilkenny SA 5009",
        },
        {
          title: "Elizabeth Shopping Centre",
          address: "Shop S141 Elizabeth S/C 50 Elizabeth Way Elizabeth SA 5112",
        },
        {
          title: "Hallett Cove Shopping Centre",
          address: "246 Lonsdale Rd, Hallett Cove SA 5158",
        },
        {
          title: "Westfield Marion Shopping Centre",
          address: "267 Diagonal Rd, Oaklands Park SA 5046",
        },
      ];
    },
  },
};
</script>

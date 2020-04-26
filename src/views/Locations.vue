<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
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
            v-for="(collapse, index) of locations"
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
                {{ collapse.title }}
              </p>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'sort-down' : 'sort-up'"> </b-icon>
              </a>
            </div>
            <div class="card-content">
              <div class="content">
                {{ collapse.text }}
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
  data: () => ({
    isOpen: 0,
  }),
  computed: {
    locations() {
      return [
        {
          title: "Title 1",
          text: "Text 1",
          hours: [],
        },
        {
          title: "Title 2",
          text: "Text 2",
          hours: [],
        },
        {
          title: "Title 3",
          text: "Text 3",
          hours: [],
        },
      ];
    },
  },
};
</script>

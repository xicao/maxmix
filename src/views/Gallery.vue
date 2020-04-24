<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Gallery
          </h1>
        </div>
      </div>
    </section>

    <div class="columns is-mobile is-multiline">
      <div class="column is-half-mobile">1</div>
      <div class="column is-half-mobile">2</div>
      <div class="column is-half-mobile">3</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    images() {
      return [
        {
          url: null,
        },
      ];
    },
  },
};
</script>

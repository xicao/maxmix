<template>
  <div class="home">
    <b-carousel :arrow="carousel.arrow">
      <b-carousel-item v-for="(carousel, i) in carousel.items" :key="i">
        <section class="hero">
          <span class="image">
            <img :src="getImgUrl(i)" />
          </span>
        </section>
      </b-carousel-item>
    </b-carousel>

    <section class="section">
      <div class="container">
        <div class="column is-12 has-text-centered">
          <h1 class="title section-title">About Us</h1>
        </div>
        <div class="columns is-multiline is-centered">
          <div class="column is-6 has-vertically-aligned-content">
            <p class="is-larger">
              <strong>
                Showcase is a modern, beautiful personal website template to
                showcase who you are, as well as projects you've worked on in
                the past.
              </strong>
            </p>
            <br />
            <p>
              Showcase was built from the ground up with Bulma to be fast and
              responsive out of the box with all source files well documented
              for easy to customization. The Showcase template gives you a
              personal space to share what you are all about as a creative
              designer, developer, photographer, and more!
            </p>
            <br />
            <div class="is-divider"></div>
            <div class="columns about-links">
              <div class="column">
                <p class="heading">
                  <strong>Give me a ring</strong>
                </p>
                <p class="subheading">
                  123-456-7890
                </p>
              </div>
              <div class="column">
                <p class="heading">
                  <strong>Email Me</strong>
                </p>
                <p class="subheading">
                  hello@example.com
                </p>
              </div>
              <div class="column">
                <p class="heading">
                  <strong>View my portfolio</strong>
                </p>
                <p class="subheading">
                  example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",

  computed: {
    carousel() {
      return {
        arrow: true,
        items: [
          { text: "Slide 1", color: "primary" },
          { text: "Slide 2", color: "info" },
          { text: "Slide 3", color: "success" },
          { text: "Slide 4", color: "warning" },
          { text: "Slide 5", color: "danger" },
        ],
      };
    },
  },

  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
  },
};
</script>

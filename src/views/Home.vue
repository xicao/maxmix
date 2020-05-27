<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <div class="columns is-multiline is-centered">
          <div class="column is-8 has-vertically-aligned-content">
            <b-carousel :arrow="carousel.arrow">
              <b-carousel-item v-for="(carousel, i) in carousel.items" :key="i">
                <section class="hero">
                  <span class="image">
                    <img :src="carousel.image" />
                  </span>
                </section>
              </b-carousel-item>
            </b-carousel>
          </div>
        </div>
      </div>
    </section>

    <section class="section about">
      <div class="container">
        <div class="column is-12 has-text-centered">
          <h1 class="title section-title is-uppercase">About Us</h1>
        </div>
        <div class="columns is-multiline is-centered">
          <div class="column is-6 has-vertically-aligned-content">
            <p class="is-larger">
              <strong>maxmix home & gifts</strong> started in 2009 South
              Australia. We are focus on gifts and homewares for different ages.
              If you’re looking to buy homewares, gifts, souvenirs, and
              novelties that are affordable and good quality <br />
              <b>—— we can help.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import image from "@/mixins/image";

export default {
  name: "Home",

  mixins: [image],

  computed: {
    carousel() {
      return {
        arrow: true,
        items: [
          {
            image: this.getImgUrl("image0"),
          },
          {
            image: this.getImgUrl("image6"),
          },
          {
            image: this.getImgUrl("IMG_2996", "JPG"),
          },
          {
            image: this.getImgUrl("IMG_2993", "JPG"),
          },
          {
            image: this.getImgUrl("IMG_3004", "JPG"),
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .carousel {
    .carousel-items {
      img {
        max-height: 500px !important;
        object-fit: cover;
      }
    }
  }

  .about {
    margin-bottom: 3rem;
  }
}
</style>

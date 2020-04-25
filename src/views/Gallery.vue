<template>
  <div class="gallery">
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Gallery
          </h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns is-multiline is-centered">
        <div
          v-for="(image, index) of images"
          :key="index"
          class="column is-one-third"
        >
          <div class="card large">
            <div class="card-image">
              <figure class="image">
                <a href="#" @click.prevent="showImageModel(image.image)">
                  <img :src="image.image" alt="Image" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-modal :active.sync="model.active">
      <p class="image is-4by3">
        <img v-if="model.image" :src="model.image" />
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: {
      active: false,
      image: null,
    },
  }),

  computed: {
    images() {
      return [
        {
          image: this.getImgUrl(0),
        },
        {
          image: this.getImgUrl(1),
        },
        {
          image: this.getImgUrl(2),
        },
        {
          image: this.getImgUrl(3),
        },
        {
          image: this.getImgUrl(4),
        },
        {
          image: this.getImgUrl(5),
        },
      ];
    },
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/800/600`;
    },

    showImageModel(image) {
      this.model.active = true;
      this.model.image = image;
    },
  },
};
</script>

<style lang="scss">
.gallery {
  .card {
    box-shadow: none;
  }
  .card-image {
    img {
      transition: all 0.1s ease-in-out;
      border-radius: 5px;
      box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
    }
  }
}
</style>

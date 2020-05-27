<template>
  <div class="gallery">
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-uppercase">
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
                  <img loading="lazy" :src="image.image" alt="Image" />
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
import image from "@/mixins/image";

export default {
  name: "Gallery",

  mixins: [image],

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
          image: this.getImgUrl("image0", "jpeg"),
        },
        {
          image: this.getImgUrl("image1", "jpeg"),
        },
        {
          image: this.getImgUrl("image3", "jpeg"),
        },
        {
          image: this.getImgUrl("image4", "jpeg"),
        },
        {
          image: this.getImgUrl("image6", "jpeg"),
        },
        {
          image: this.getImgUrl("IMG_2993", "JPG"),
        },
        {
          image: this.getImgUrl("IMG_2996", "JPG"),
        },
        {
          image: this.getImgUrl("IMG_3004", "JPG"),
        },
        {
          image: this.getImgUrl("IMG_3006", "JPG"),
        },
        {
          image: this.getImgUrl("IMG_3008", "JPG"),
        },
      ];
    },
  },

  methods: {
    showImageModel(image) {
      this.model.active = true;
      this.model.image = image;
    },
  },
};
</script>

<style lang="scss">
.gallery {
  .image.is-4by3 img {
    height: inherit !important;
  }
  .card {
    box-shadow: none;
  }
  .card-image {
    img {
      transition: all 0.1s ease-in-out;
      border-radius: 5px;
      box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
      max-height: 250px !important;
      object-fit: cover;
    }
  }
}
</style>

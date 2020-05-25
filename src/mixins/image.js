export default {
  computed: {
    path: () => process.env.BASE_URL,
  },
  methods: {
    getImgUrl(value) {
      return `${this.path}assets/image${value}.jpeg`;
    },
  },
};

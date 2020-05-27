export default {
  computed: {
    path: () => process.env.BASE_URL,
  },
  methods: {
    getImgUrl(name, type = "jpeg") {
      return `${this.path}assets/${name}.${type}`;
    },
  },
};

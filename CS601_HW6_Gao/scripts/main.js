const app1 = new Vue({
  el: "#app1",
  data() {
    return {
      img: "img/older.png",
      text: "Now",
      img_origin: "img/older.png",
      img_over: "img/young.png",
      text: "Now",
      text_origin: "Now",
      text_over: "Young",
    };
  },
});

const app2 = new Vue({
  el: "#app2",
  data: {
    message: "Try Me!",
  },
  methods: {
    mouseover: function () {
      this.message = "Thanks for your teaching!";
    },
    mouseleave: function () {
      this.message = "Try Me!";
    },
  },
});

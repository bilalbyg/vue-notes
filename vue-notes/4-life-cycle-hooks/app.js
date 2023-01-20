const app = Vue.createApp({
  data() {
    return {
      title: "Test title",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreated executed");
  },
  created() {
    console.log("created executed");
    setTimeout(() => {
      this.itemList = [1, 2, 3, 5, 6];
    }, 2000);

    setTimeout(() => {
      this.itemList = [3, 4, 6, 1, 0];
    }, 5000);
  },
  beforeMounted() {
    console.log("beforeMounted executed");
  },
  mounted() {
    console.log("mounted executed");
  },
  beforeUpdate() {
    console.log("beforeUpdate executed");
  },
  updated() {
    console.log("updated executed");
  },
  beforeUnmount() {
    console.log("beforeUnmount executed");
  },
  unmounted() {
    console.log("unmounted executed");
  },
}).mount("#app");

setTimeout(() => {
  Vue.render(null, document.getElementById('app')) // app.unmount doesn't work
}, 7000);

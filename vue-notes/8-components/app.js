const app = Vue.createApp({
  data() {
    return {};
  },
});

app.component("counter-item", {
  data() {
    return {
      counter: 0,
    };
  },
  template: `
  <div class="container">
    <button @click="counter--" class="red">-</button>
    <button @click="counter++" class="green">+</button>
    <h3>{{ counter }}</h3>
  </div>
  `,
});

app.mount("#app");

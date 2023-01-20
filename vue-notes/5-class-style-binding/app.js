const app = Vue.createApp({
  data() {
    return {
      showBorder : false,
      redBG : false,
      bgColor : "cyan"
    };
  },
  computed : {
    boxClasses(){
      return {border : this.showBorder, red : this.redBG}
    }
  }

}).mount("#app");
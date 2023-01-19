const app = Vue.createApp({
  data() {
    // Properties
    return {
      title: "Vue JS Notes",
      content: "Lorem ipsum",
      link: {
        title: "Documentation",
        target: "_blank",
        url: "https:www.google.com",
      },
      coords:{
        x : 0,
        y : 0
      }
    }; 
  },
  methods : {
    changeTitle(){
      this.title = "We changed title" // we reach to title property in data with "this" keyword
    },
    changeTitleAgain(){
      this.title = "We changed title again"
    },
    changeCoords(event){ // if we use another parameter to this method we should use $event keyword ex(changeCoords('ourParam', $event))
      this.coords = {
        x : event.x,
        y : event.y
      }
    }
  }
}).mount("#app");

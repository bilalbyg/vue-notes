const app = Vue.createApp({
    data(){
        return {
            itemList : ["apple", "pineapple", "berry"],
            search : ""
        }
    },
    methods : {
        searchList() {
            //this.filteredList = this.itemList.filter(i => i.includes(this.search))
            //console.log('filteredList :>> ', filteredList);
        }
    },
    computed : { // render when just happened any update
        filteredList(){
            return this.itemList.filter(i => i.includes(this.search)); // 
        }
    }
}).mount("#app");
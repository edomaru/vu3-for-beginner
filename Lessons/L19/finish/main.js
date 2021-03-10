const mountedApp = Vue.createApp({
    data () {
      return {
        panjang: 0,
        lebar: 0,
        // luas: 0
      }
    },

    computed: {
      luas () {
        return this.panjang * this.lebar;
      }
    },

    // watch: {
    //   panjang (val) {
    //     this.luas = val * this.lebar
    //   },
    //   lebar (val) {
    //     this.luas = val * this.panjang
    //   }
    // }
  }).mount('#app')
const app= Vue.createApp({
    data () {
        return {
            products: [],
            searchTerm: ''
        }
    }
});

const mountedApp = app.mount('#app');
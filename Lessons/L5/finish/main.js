const app = Vue.createApp({
    data () {
        return {
            message: "Ready to upload",
            uploading: false,
            loadingImg: ''
        }
    }
})
const mountedApp = app.mount('#app')
const app = Vue.createApp({
    data () {
        return {
            message: "Ready to upload",
            uploading: false,
            loadingImg: '',
            selectedFile: 'No file selected'
        }
    }
})
const mountedApp = app.mount('#app')
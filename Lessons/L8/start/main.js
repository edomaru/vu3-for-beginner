const app = Vue.createApp({
    data () {
        return {
            message: "Ready to upload",
            uploading: false,
            loadingImg: '',
            selectedFile: ''
        }
    },
    methods: {
        handleUpload () {
            this.uploading = true;
            this.loadingImg = 'loading.gif';
        },
        browseFile () {
            this.$refs.file.click();
        },
        handleChange (event) {
            const files = event.target.files
            this.selectedFile = files[0].name
        }
    }
})
const mountedApp = app.mount('#app')
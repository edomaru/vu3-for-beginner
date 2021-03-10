const app = Vue.createApp({
    data () {
        return {
            message: "Ready to upload",
            uploading: false,
            loadingImg: '',
            selectedFile: '',
            files: [
                {
                    "id": 1,
                    "name": "File 1.jpg"
                },
                {
                    "id": 2,
                    "name": "File 2.jpg"
                },
                {
                    "id": 3,
                    "name": "File 3.jpg"
                }
            ],
            hoveredItem: null
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
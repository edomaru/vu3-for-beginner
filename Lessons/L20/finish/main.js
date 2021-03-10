const app = Vue.createApp({
    data () {
        return {
            message: "Ready to upload",
            uploading: false,
            loadingImg: '',
            selectedFile: '',
            selectedFileName: '',
            files: [],
            hoveredItem: null,
            progress: 0,
            searchTerm: '',
            sortDir: 1
        }
    },
    methods: {
        toggleSortDir () {
            this.sortDir = this.sortDir * -1
        },

        handleUpload () {
            this.uploading = true;
            
            const updateProgress = setInterval(() => {
                this.progress++

                if (this.progress === 100) {
                    clearInterval(updateProgress);

                    setTimeout(() => {
                        this.files.push({
                            id: this.files.length + 1,
                            name: this.selectedFile.name
                        })

                        this.uploading = false
                        this.selectedFile = null
                        this.selectedFileName = ""
                    }, 1000)
                }
            }, 50)
        },
        browseFile () {
            this.$refs.file.click();
        },
        handleChange (event) {
            const files = event.target.files
            this.selectedFile = files[0]
            this.selectedFileName = files[0].name
        },
        handleRemove (file) {
            if (confirm("Are you sure?")) {
                const index = this.files.findIndex(item => item.id === file.id)
                this.files.splice(index, 1)
            }
        },
        handleEnter (event) {
            this.searchTerm = event.target.value
        },
        handleEscape () {
            this.searchTerm = ''
        }
    },

    computed: {
        filesFiltered () {
            return this.files.filter(file => file.name.match(new RegExp(this.searchTerm, 'i')))
        },

        filesSorted () {
            return this.filesFiltered.sort((a, b) => {
                if (a.name < b.name) return -1 * this.sortDir;
                else if (a.name > b.name) return 1 * this.sortDir;
                else return 0;
            })
        }
    }
})

app.component("app-alert", {
    template: `#app-alert-template`
})

app.component("file-item", {
    data () {
        return {
            selected: false
        }
    },
    template: `#file-item-template`
})

const mountedApp = app.mount('#app')
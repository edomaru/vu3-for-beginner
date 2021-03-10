const app = Vue.createApp({
    data () {
        return {
            files: [
                {
                    id: 1,
                    name: "File 1.jpg"
                },
                {
                    id: 2,
                    name: "File 2.jpg"
                },
                {
                    id: 3,
                    name: "File 3.jpg"
                }
            ],
            searchTerm: '',
            sortDir: 1
        }
    },
    methods: {
        removeFile (file) {
            const index = this.files.findIndex(item => item.id === file.id)
            this.files.splice(index, 1)
        },
        addUploadedFile (file) {
            this.files.push({
                id: this.files.length + 1,
                name: file.name
            })
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

app.component("nav-form", {
    template: '#nav-form-template',
    emits: ['search', 'reset'],
    data () {
        return {
            searchTerm: ''
        }
    },
    methods: {
        handleEnter (event) {
            this.searchTerm = event.target.value
            this.$emit('search', this.searchTerm)
        },
        handleEscape () {
            this.searchTerm = ''
            this.$emit('reset', this.searchTerm)
        }
    }
})

app.component("section-heading", {
    props: ["text"],
    
    emits: ["sorted"],

    template: '#section-heading-template',

    data () {
        return {
            sortDir: 1
        }
    },

    methods: {
        toggleSortDir () {
            this.sortDir = this.sortDir * -1
            this.$emit('sorted', this.sortDir)
        }
    }
})

app.component("app-alert", {
    props: ['message', 'type'],
    computed: {
        alertClasses () {
            return [
                'alert',
                `alert-${this.type}`
            ]
        }
    },
    template: `#app-alert-template`
})

app.component("file-item", {
    emits: ['file-removed'],
    props: ['file'],
    data () {
        return {
            hoveredItem: null
        }
    },
    methods: {
        handleRemove (file) {
            if (confirm("Are you sure?")) {
                this.$emit('file-removed', file)
            }
        },
    },
    template: `#file-item-template`
})

app.component("file-input", {
    emits: ['file-uploaded'],
    
    data () {
        return {
            uploading: false,
            selectedFile: '',
            progress: 0
        }
    },

    computed: {
        selectedFileName () {
            return this.selectedFile ? this.selectedFile.name : ''
        }
    },

    methods: {
        handleUpload () {
            this.uploading = true;
            
            const updateProgress = setInterval(() => {
                this.progress++

                if (this.progress === 100) {
                    clearInterval(updateProgress);

                    setTimeout(() => {
                        this.$emit('file-uploaded', this.selectedFile)

                        this.uploading = false
                        this.selectedFile = null
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
        }
    },

    template: `#file-input-template`
})

const mountedApp = app.mount('#app')
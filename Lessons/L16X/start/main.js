const app= Vue.createApp({
    data () {
        return {
            products: [
                {
                    "id": 1,
                    "name":"Intelligent Granite Table",
                    "category":"Tools",
                    "price":"787.00"
                },
                {
                    "id": 2,
                    "name":"Handcrafted Rubber Hat",
                    "category":"Games",
                    "price":"232.00"
                },
                {
                    "id": 3,
                    "name":"Rustic Concrete Salad",
                    "category":"Jewelery",
                    "price":"115.00"
                },
                {
                    "id": 4,
                    "name":"Gorgeous Concrete Pizza",
                    "category":"Garden",
                    "price":"250.00"
                },
                {
                    "id": 5,
                    "name":"Refined Plastic Shoes",
                    "category":"Health",
                    "price":"844.00"
                },
                {
                    "id": 6,
                    "name":"Awesome Metal Soap",
                    "category":"Tools",
                    "price":"326.00"
                },
                {
                    "id": 7,
                    "name":"Intelligent Fresh Mouse",
                    "category":"Home",
                    "price":"783.00"
                },
                {
                    "id": 8,
                    "name":"Licensed Soft Keyboard",
                    "category":"Music",
                    "price":"361.00"
                },
                {
                    "id": 9,
                    "name":"Fantastic Rubber Pants",
                    "category":"Garden",
                    "price":"786.00"
                },
                {
                    "id": 10,
                    "name":"Awesome Rubber Ball",
                    "category":"Automotive",
                    "price":"696.00"
                }
            ],
            searchTerm: '',
            pages: 3
        }
    }
});

const mountedApp = app.mount('#app');
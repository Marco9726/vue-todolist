const {
    createApp
} = Vue;


createApp({
    data(){
        return {
            list:[
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Portare fuori il cane',
                    done: false
                },
                {
                    text: 'Lavare la macchina',
                    done: true
                },
                {
                    text: 'Passare in banca',
                    done: false
                },
                {
                    text: 'Sistemare il giardino',
                    done: true
                },
                {
                    text: 'Fare l\'esercizio',
                    done: false
                }
            ]
        }
    },
    methods: {
        
    }
}).mount('#app')
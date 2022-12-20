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
        //creo il metodo per rimuovere il todo
        removeTask(index){
            //rimuovi 1 elemento dall'array list in posizione index
            this.list.splice(index, 1);
        }
    }
}).mount('#app')
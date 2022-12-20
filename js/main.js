const {
    createApp
} = Vue;


createApp({
    data(){
        return {
            //nuova task inizialmente vuota, conterrà il valore dell'input text
            newTask: '',
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
        //creo il metodo per aggiungere todo alla lista
        addTask(){
            //aggiungi l'elemento newTask nellay list
            this.list.push(this.newTask);
            this.newTask = ''
        },
        //creo il metodo per rimuovere il todo
        removeTask(index){
            //rimuovi 1 elemento dall'array list in posizione index
            this.list.splice(index, 1);
        }
    }
}).mount('#app')
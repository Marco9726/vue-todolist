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
        addTask() {
            //definisco un nuovo oggetto che avrà come proprietà 'text' newTask, ovvero il value inserito dell'utente nell'input
            let newTodo = {
                text: `${this.newTask}`,
                done: true
            }
            //aggiungo l'oggetto appena creato newTodo nell'array list
            this.list.push(newTodo);
            this.newTask = ''  
        },
        //creo il metodo per rimuovere il todo
        removeTask(index){
            //rimuovi 1 elemento dall'array list in posizione index
            this.list.splice(index, 1);
        }

    }
}).mount('#app')
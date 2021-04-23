var app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        thisConversation: 0,
        newMessage: '',
        lastAccess: '',
        filter: '',
    },
    methods:{
        
        // 
        // per inviare i messaggi nelle chat
        addMessage(){
            let whatsapp = this.contacts[this.thisConversation].messages;
            let mess = {
                date:'',
                text:'',
                status:''
            };
            console.log(mess);

            mess.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            mess.text = this.newMessage;

            mess.status = 'sent';

            whatsapp.push(mess)

            this.newMessage = '';
            console.log(this.contacts[this.thisConversation].avatar);

            // 
            // risposta dell'"interlocutore"
            setTimeout(() => {
                let risposta = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'ok',
                    status: 'received'
                };
                this.contacts[this.thisConversation].messages.push(risposta);
            }, 1000);
        },

        // 
        // per filtrare i contatti in base al nome
        filtered(){
            return this.contacts.filter((contacts)=>{
                return contacts.name.toLowerCase().match(this.filter);
            });
        }
    }

  })
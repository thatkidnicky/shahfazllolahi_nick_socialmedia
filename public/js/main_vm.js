dev.ns.addingSocket
// imports always go first - if we're importing anything
import ChatMessage from "./modules/ChatMessage.js";

const socket = io();

//packet is whatever data we send through connect event from server

//this is data structuring go look it up on MDN
function setUserId({sID}) {
    console.log(sID);
    vm.socketID = sID;
}

function showDisconnectMessage() {
    console.log('a user disconnected');
}

function appendMessage(message) {
    vm.messages.push(message);
}

const vm = new Vue({
    data: {
        socketID: "", 
        message: "",
        nickname: "",
        messages: []
         
    },

    methods: {
        //emit message event to server so it can send to anyone connected
        dispatchMessage() {
            console.log('handle emit message');

            // double pipe || is an "or" operator
            // if first value is set, use it. else use whatever comes after "or" operator
            socket.emit('chat_message', {
                content: this.message,
                name: this.nickname || "anonymous"
            })
            
            this.message = "";
        }
    },

    mounted: function() {
        console.log('vue is done mounting');
    },

    components: {
        newmessage: ChatMessage
    }
}).$mount("#app");

socket.addEventListener('connected', setUserId);
socket.addEventListener('disconnect', showDisconnectMessage);
 dev.ns.working
socket.addEventListener('new_message', appendMessage);

// imports always go first - if we're importing anything
master
master

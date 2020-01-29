// imports always go first - if we're importing anything

const socket = io();

//packet is whatever data we send through connect event from server
function setUserId(packet) {
    console.log(packet);
}

function showDisconnectMessage() {
    console.log('a user disconnected');
}

socket.addEventListener('connected', setUserId);
socket.addEventListener('disconnect', showDisconnectMessage);
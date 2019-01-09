const express = require('express');
const socket = require('socket.io');

const app = express();

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    console.log('u are listening in 3000');
});

app.use(express.static('public'));

// setup the socket on the backend
let io = socket(server);

// fire the connection event when a connection is stablished
io.on('connection', (socket) => {
    console.log('connection made');

    // when the 'chat' message received
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

    //when the user is typing
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });
});
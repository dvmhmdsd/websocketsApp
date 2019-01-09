// make the connection
let socket = io.connect('http://localhost:3000');


let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');

// emit the data
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

// listen for events
socket.on('chat', (data) => {
    output.innerHTML += `<p><strong> ${data.handle}: </strong> ${data.message} </p>`;
});
// make the connection
let socket = io.connect('/');


let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');
let form = document.getElementById('form');

// emit the data
btn.addEventListener('click', (e) => {
    e.preventDefault();
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = '';
});

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
});

// listen for events
socket.on('chat', (data) => {
    feedback.innerHTML = '';
    output.innerHTML += `<p><strong> ${data.handle}: </strong> ${data.message} </p>`;
});

// typing event
socket.on('typing', (data) => {
    feedback.innerHTML = `<p><em> ${data} is typing now </em><p>`;
});
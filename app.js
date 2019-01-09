const express = require('express');

const app = express();


const server = app.listen(3000, () => {
    console.log('u are listening in 3000');
});

app.use(express.static('public'));
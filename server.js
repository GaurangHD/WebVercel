const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World! I am here.');
});

app.get('/gaurang', (req, res) => {
    res.send('Hello World!, I am Gaurang');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
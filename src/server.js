const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.static('public'));
app.use(express.static('public/js'));
app.use(express.static('node_modules'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({hi :"there"});
})

app.listen(port, ()=> console.log(`App started on port ${port}`));
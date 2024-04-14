require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello api');
});

app.get('/login', (req, res) => {
    res.send('this is you login response');
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});

/*
first install the node with nvm and after that create folder and run command the npm init or npm init -y;
after that install required package like express,dotenv,
create env file for static variable. use like this 
use env  =  require('dotenv').config(); process.env.PORT


*/
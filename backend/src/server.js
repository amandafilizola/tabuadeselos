const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const server = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amandafilizola:hai1HYDRA@cluster0-pfp1o.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
})
server.use(cors());
server.use(express.json())
server.use(routes);
server.listen(3333)
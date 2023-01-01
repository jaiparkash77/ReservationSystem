const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

// 👇️ configure CORS
app.use(cors());


//Routes import
const ticket = require('./route/ticketRoute');

app.use(ticket);

module.exports = app
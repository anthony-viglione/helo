require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive')

const app = express();

app.use(bodyParser.json());

const { CONNECTION_STRING, SERVER_PORT } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('database connected')
    app.listen(SERVER_PORT,()=>{console.log(`helo ready on port ${SERVER_PORT}`)})
})

app.post('/auth/register',ctrl.register)
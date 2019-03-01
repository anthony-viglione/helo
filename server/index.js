const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');

const app = express();

app.use(bodyParser.json());

app.listen(3001,()=>{console.log('helo ready on port 3001')})
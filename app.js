const express = require('express');
const router = require('./route/api.js');

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000);
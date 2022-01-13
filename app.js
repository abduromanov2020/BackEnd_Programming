/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

// Declare Express
const express = require("express");

// Declare Router
const router = require("./routes/TODO-2");

// Object Express
const app = express();

app.use(express.json());
app.use(router);

// Define port
app.listen(3000);

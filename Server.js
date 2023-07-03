const express = require('express');
const serverConfig = require('./config/server.config');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error",()=>{
    console.log("Error in connection....")
})


db.once("open",()=>{
    console.log("connection established....")
})




app.listen(serverConfig.PORT,()=>{
    console.log(`Server Started !......${serverConfig.PORT}`)
})
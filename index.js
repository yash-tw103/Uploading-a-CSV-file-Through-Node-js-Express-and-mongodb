const express = require('express');
const connectDb = require('./config/dbConnection');

const port  = 5000;

connectDb();
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use("/" , require('./routes/fileRoutes'));


app.listen(port , ()=>{
    console.log("server is running on the port : ", port);
});
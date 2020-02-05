require('dotenv').config(); // --------> require package xử lí biến môi trường

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());   //------> body-parser(package để post dữ liệu nhập từ bàn phím lên server)

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {     
    useNewUrlParser: true,   
    useCreateIndex: true, 
    useUnifiedTopology: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
}) // ------------> connect mongodb 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
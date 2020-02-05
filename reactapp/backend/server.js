require('dotenv').config(); // --------> require package xử lí biến môi trường
//----------------require các module đã cài đặt trong package.json---------------------------
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
//--------------------------------------------------------------------------------------------
const app = express();
const port = process.env.PORT || 5000; //------> cổng kết nối 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());   //------> body-parser(package để post dữ liệu nhập từ bàn phím lên server)

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // biến môi trường kết nối vs mongo atlas, xem trong file .env -------------

mongoose.connect(uri, {     
    useNewUrlParser: true,   
    useCreateIndex: true, 
    useUnifiedTopology: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
}) // ------------> connect mongodb 

app.get('/', (req, res, next) => {
    res.send('Đây là trang chủ');
})

// --------- required route -------------------------------------------
var userRoute = require('./routes/user.route');
var exerciseRoute = require('./routes/exercise.route');
// --------------------------------------------------------------------



// app.use('/exercise', exerciseRoute);
app.use('/user', userRoute);
app.use('/exercise', exerciseRoute);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
var express = require('express');
const connectDB = require('./config/db')
var app = express();

//Connect database 
connectDB();

app.get('/', (req, res) => res.send('Server'))
// Define Routes
app.use('/api/users', require('./routes/api/user.route'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
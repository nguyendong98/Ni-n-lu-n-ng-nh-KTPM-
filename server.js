var express = require('express');
const connectDB = require('./config/dblocal');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//Connect database
connectDB();

app.get('/', (req, res) => res.send('Server'));
// Define Routes
app.use('/api/users', require('./routes/api/user.route'));
app.use('/api/auth', require('./routes/api/auth.route'));
app.use('/api/kindofrooms', require('./routes/api/kindofroom.route'));
app.use('/api/roomrented', require('./routes/api/roomrented.route'));
app.use('/api/rooms', require('./routes/api/room.route'));
app.use('/api/admin', require('./routes/api/admin.route'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express'),
    hbs = require('express-handlebars'),
    socket = require('socket.io'),
    mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/chat_app');    

const app = express();

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/', function(req, res) {
    res.render('home');
});

////////// REST ////////////
// API Provider
app.get('/api/showuser', function(req, res) {
    res.json({status: 200, users: [{name: "nuhil", age: "30"}, {name: "prottoy", age: "26"}]});
});

app.post('/api/adduser', function(req, res) {
    console.log('I am ready to add data');
    // To Do:
    // add those data into database
    res.json({status: 201, message: "Data added successfully!"});
});
///////////////

const server = app.listen(app.get('port'), function() {
    console.log('Server is listening...');
});

const io = socket(server);

io.on('connection', function(socket) {
    console.log('Some one is just connected..');
    // To Do:
    // Add users info into DB
    // console.log(socket);

    // var Schema = mongoose.Schema,
    // ObjectId = Schema.ObjectId;
 
    // var User = new Schema({
    //     user_id    : ObjectId,
    //     browser     : String,
    //     date      : Date
    // });



    socket.on('chat', function(data) {
        console.log(data);
        io.sockets.emit('sendchat', data);
    });

    socket.on('typing', function(data) {
        console.log(data);
        socket.broadcast.emit('typing', data);
    });

});
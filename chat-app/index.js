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

///////////////

const server = app.listen(app.get('port'), function() {
    console.log('Server is listening...');
});

const io = socket(server);

io.on('connection', function(socket) {
    console.log('Some one is just connected..');

    socket.on('chat', function(data) {
        console.log(data);
        io.sockets.emit('sendchat', data);
    });

    socket.on('typing', function(data) {
        console.log(data);
        socket.broadcast.emit('typing', data);
    });

});
const mongoose = require('mongoose');

const user = require('./user');
const chat = require('./chat');
const room = require('./room');
mongoose.connect(process.env.DBCONNECTION);
const connectionDatabase = mongoose.connection;

connectionDatabase.on('error', () => { console.log('connection error') });

connectionDatabase.once('open', function() {
    // we're connected! 
    console.log('database connected');
});
module.exports = {
    userModel: mongoose.model('user', user),
    chatModel: mongoose.model('chat', chat),
    roomModel: mongoose.model('room', room),
}
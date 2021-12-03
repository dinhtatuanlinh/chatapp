const mongoose = require("mongoose");

let schema = mongoose.Schema({
    roomName: {
        type: String,
    },
    createdBy: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    members: [{
        user: {
            type: String,
        },
        joiningTime: {
            type: Number,
        }
    }],
    creatingTime: {
        type: String,
        required: true
    }
})

module.exports = schema
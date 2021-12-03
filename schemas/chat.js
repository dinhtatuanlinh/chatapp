const mongoose = require("mongoose");

let schema = mongoose.Schema({
    roomName: {
        type: String,
    },
    user: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    content: [{
        words: {
            type: String,
        },
        time: {
            type: Number,
            required: true,
        },
        edit: [{
            editContent:{
                type: String,
            },
            editTime:{
                type: Number,
                required: true
            }
        }]
    }]
})

module.exports = schema
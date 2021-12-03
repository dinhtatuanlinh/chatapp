const mongoose = require("mongoose");

let schema = mongoose.Schema({
    user:{
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    avartar: {
        type: String,
        unique: true,
        dropDups: true
    },
    email: {
        type: String,
        unique: true,
        dropDups: true
    },
    birthday: {
        type: String,

    },
    phoneNumber: {
        type: String,
        unique: true,
        dropDups: true
    },
    googleid: {
        type: String,
        unique: true,
        dropDups: true
    },
    facebookid: {
        type: String,
        unique: true,
        dropDups: true
    },
    room: [{
        roomId: {
            type: String,
            required: true
        },
        roomName: {
            type: String,
        }
    }],
    friends: [{
        friendId: {
            type: String,
            required: true
        },
        friendName: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: true
        }
    }],
    friendReqTo: [{
        userId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: true
        }
    }],
    friendReqFrom: [{
        userId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: true
        }
    }]
})

module.exports = schema
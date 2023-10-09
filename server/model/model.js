const mongoose = require('mongoose');

// Kết nối với database
// mongoose.connect('mongodb://localhost:9999/member');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
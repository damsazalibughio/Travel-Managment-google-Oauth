const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema

const UserSchema = new Schema({
    googleID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String
    }

});

//  Create Collection and add Schema
module.exports = mongoose.model('travelUsers', UserSchema);
'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    fName: {
        type: String,
        required: 'First Name Required.'
    },
    lName: {
        type: String,
        required: 'Last Name Required.'
    },
    address: {
        type: String,
    },
    mobile: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        required: 'Email Required.'
    },
    password: {
        type: String,
    },

});

module.exports = mongoose.model('Users', UserSchema);
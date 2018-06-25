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
        required: 'Address Required.'
    },
    mobile: {
        type: String,
        required: 'Mobile Number Required.'
    },
    phone: {
        type: String,
        required: 'Phone Number Required.'
    },
    email: {
        type: String,
        required: 'Email Required.'
    },
    password: {
        type: String,
        required: 'Password Required.'
    },

});

module.exports = mongoose.model('Users', UserSchema);
const mongoose = require('mongoose');

const  userSchema = mongoose.Schema({
    id :{
        type: String,
        required: false
    },
    name :{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    
    clave :{
        type: String,
        required: false
    },
    tipo:{
        type: String,
        required: false
    },
    validado:{
        type: String,
        required: false
    }
    
});

module.exports = mongoose.model('User', userSchema);
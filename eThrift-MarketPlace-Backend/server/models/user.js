const { mongo } = require('mongoose');
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    role :{
        type:String,
        default: "Subscriber",
    },
    cart : {
        type: Array,
        default: []
    },
    address: String,

    // whishlist : [{
    //     type:String
    // }]

},{timestamps:true}
);


module.exports = mongoose.model('User',userSchema)
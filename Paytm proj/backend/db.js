const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://venkat1200556:1eJgHYc70ZDOuTha@cluster0.2ofs05a.mongodb.net/")
const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        default: 2000,
        required: true,
        min: 0
    },
});
const Account = mongoose.model('Account', accountSchema);
const User=mongoose.model('User', userSchema);
module.exports={
    User,
    Account,
};
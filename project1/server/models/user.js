const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = Schema({
    name:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model("user",userSchema);
const mongoose = require("mongoose");
const {Schema} = mongoose;

const branchSchema = Schema({
    branch:{
        type:String,
        required:true
    }, 
    warehouse : {
        type:String,
        required:true
    },
});
module.exports = mongoose.model("branch",branchSchema);
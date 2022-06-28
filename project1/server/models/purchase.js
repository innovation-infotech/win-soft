const mongoose = require("mongoose");
const {Schema} = mongoose;
const purchaseSchema = Schema({
    branch:{
        type:String,
        required:true
    },
    warehouse : {
        type:String,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    workorderno:{
        type:String,
        required:true
    },
    orderno:{
        type:String,
        required:true
    },
    gatepass:{
        type:String,
        required:true
    },
    dcno:{
        type:String,
        required:true
    },
    
});

module.exports = mongoose.model("purchase",purchaseSchema);
const mongoose = require("mongoose");
const {Schema} = mongoose;
const productSchema = Schema({
    branch:{
        type:String,
        required:true
    },
    warehouse : {
        type:String,
        required:true
    },
    supplierId:{
        type:String,
        required:true
    },
    supplierName:{
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

module.exports = mongoose.model("product",productSchema);
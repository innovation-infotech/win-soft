const product = require("../models/product");

exports.addproduct = async(req,res)=>{
const data = new product(req.body);
// console.log(data);
await data.save((err,data)=>{
if(err){
console.log(err);
}
res.status(200).send("Inserted successfully");
});  
}

exports.getproduct = async(req,res)=>{
const data =await product.find({});
res.json(data);
};
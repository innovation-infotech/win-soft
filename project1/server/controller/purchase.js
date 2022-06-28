const purchase = require("../models/purchase");

exports.purchase = async(req,res)=>{
    const data = new purchase(req.body);
    // console.log(data);
    await data.save((err,data)=>{
        if(err){
            console.log(err);
        }
        res.status(200).send("Inserted successfully");
    });
  
}

exports.purchaseData = async(req,res)=>{
    const data =await purchase.find({}).then((resp)=>{
      res.json(resp);
    })
  console.log(data);
  };
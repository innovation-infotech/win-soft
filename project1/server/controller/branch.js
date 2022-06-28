const branch = require("../models/branch");

exports.addbranch = async(req,res)=>{
  const brnachName = new branch(req.body);
  // console.log(brnachName);
  await brnachName.save((err,data)=>{
  if(err){
    console.log(err);
  }
  res.json("Inserted successfully");
  });
};

exports.getbranch = async(req,res)=>{
  const data =await branch.find({});
    res.json(data);
};
const branch = require("../models/branch");

exports.branch = async(req,res)=>{
    const brnachName = new branch(req.body);
    // console.log(brnachName);
    await brnachName.save((err,data)=>{
        if(err){
            console.log(err);
        }
        res.json("Inserted successfully");
    });
  
};

exports.branchData = async(req,res)=>{
  const data =await branch.find({}).then((resp)=>{
    res.json(resp);
  })
console.log(data);
};
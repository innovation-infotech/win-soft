const user = require("../models/user");

exports.user = async(req,res)=>{
    const userhName = new user(req.body);
    // console.log(brnachName);
    await userhName.save((err,data)=>{
        if(err){
            console.log(err);
        }
        res.json("Inserted successfully");
    });
  
};



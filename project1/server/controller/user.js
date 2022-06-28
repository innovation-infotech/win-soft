const user = require("../models/user");

exports.adduser = async(req,res)=>{
const userhName = new user(req.body);
    // console.log(userhName);
await userhName.save((err,data)=>{
if(err){
console.log(err);
}
res.json("Inserted successfully");
});  
};

//search name
// exports.getuser = async(req,res)=>{
//     const data = await user.find(
//         {
//         "$or":[
//             {"user_id":{$regex:req.params.key}},
//             {"name":{$regex:req.params.key}}
//         ]
//     })
//     res.json(data);
//   };

exports.getuser = async(req,res)=>{
    const data =await user.find({});
    res.json(data);
 
  };



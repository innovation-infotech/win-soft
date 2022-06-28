const express = require("express");
const router = express.Router();
const {addproduct,getproduct} = require("../controller/product");
const {addbranch,getbranch} = require("../controller/branch");
const { adduser,getuser } = require("../controller/user")

// POST METHOD
router.post("/product",addproduct);
router.post("/branch",addbranch);
router.post("/user",adduser);



//GET METHOD
router.get("/product",getproduct);
router.get("/branch",getbranch);
router.get("/user",getuser);
// router.get("/getuser",data);
// router.get("/user/:key",userData);



module.exports = router;







const express = require("express");
const router = express.Router();
const {purchase,purchaseData} = require("../controller/purchase");
const {branch,branchData} = require("../controller/branch");
const { user,userData } = require("../controller/user")


router.post("/insert",purchase)
router.post("/add",branch);
router.get("/getpurchase",purchaseData)
router.get("/getbranch",branchData)
router.post("/user",user);


module.exports = router;







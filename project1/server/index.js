// Third Party Module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Router
const user = require("./routes/purchase");
const purchase = require("./routes/purchase");
const purchaseData = require("./routes/purchase");
const branchData = require("./routes/purchase");
const userData = require("./routes/purchase");
const branch = require("./routes/purchase");
app.use("/api",user);
app.use("/api",purchase); 
app.use("/api",branch);
app.use("/api",purchaseData);
app.use("/api",branchData);
app.use("/api",userData);






// Database Connection
mongoose.connect("mongodb+srv://root:root@winssoft.n4xwb.mongodb.net/winssoftdb?retryWrites=true&w=majority",(err)=>{
    console.log("Database Connected Successfully");
});

// Listen Port Number
app.listen(5000,()=>{
    console.log("Server running port 5000...");
});









  












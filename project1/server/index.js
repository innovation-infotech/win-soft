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

// Call Routes 
//product
const addproduct = require("./routes/api_routes");
const getproduct = require("./routes/api_routes");

//branch
const addbranch =require('./routes/api_routes');
const getbranch =require("./routes/api_routes");
//user
const adduser = require("./routes/api_routes");
const getuser = require("./routes/api_routes");



//set Routes Path
//product
app.use("/api",addproduct); 
app.use("/api",getproduct);

//branch
app.use("/api",addbranch);
app.use("/api",getbranch);
//user
app.use("/api",adduser);
app.use("/api",getuser);




// app.use("/api",data);







// Database Connection
mongoose.connect("mongodb+srv://root:root@winssoft.n4xwb.mongodb.net/winssoftdb?retryWrites=true&w=majority",(err)=>{
    console.log("Database Connected Successfully");
});

// Listen Port Number
app.listen(5000,()=>{
    console.log("Server running port 5000...");
});









  












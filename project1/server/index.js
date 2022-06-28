// Third Party Module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
// env file
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE;
const PORT = process.env.PORT;


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





// Database Connection
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopalogy:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=> console.log("Database Connection Failed"));
 


// Listen Port Number
app.listen(PORT,()=>{
    console.log(`Server running port ${PORT}`);
});











  












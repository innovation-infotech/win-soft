import React,{useState,useEffect} from "react";
import Axios from 'axios';
import './SignIn.css';

function Form() {
    const [branch,setBranch] = useState("");  
    const [warehouse,setWarehouse] = useState("");
    const [supplierId,setSupplierId] = useState("");
    const [supplierName, setSupplierName] = useState('')
    const [address,setAddress] = useState("");
    const [workorderno,setWorkorderno] = useState("");
    const [orderno,setOrderno] = useState("");
    const [gatepass,setGatepass] = useState("");
    const [dcno,setDcno] = useState("");
  
    
    const [lists,setLists]=useState([]);
    const [userId,setUserId] = useState([]);
  

//POST DATA
const addProduct =()=>{
   
    Axios.post('http://localhost:5000/api/product',
    {
       branch: branch,
       warehouse: warehouse,
       supplierId:supplierId,
       supplierName:capital.name,
       address:address,
       workorderno:workorderno,
       orderno:orderno,
       gatepass:gatepass,
       dcno:dcno
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
 }

//GET DATA from Branch table
 useEffect(()=>{
    Axios.get("http://localhost:5000/api/branch").then((res)=>{
        setLists(res.data);
    })
},[]);

//GET DATA from User table
const onKeyDown = (e) => {
    if (e.key === "Tab") {
    Axios.get('http://localhost:5000/api/user')
    .then((res)=>{
    e.preventDefault();
    setUserId(res.data);
    console.log(res.data);
    })
 }
 };

 const capital = userId.find((obj) => {
    if (obj.user_id === supplierId) {
      return true;
    }
    return false;
  });





  return (
    <div>
         
        <form class="container" autoComplete="off" onSubmit={addProduct}>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label className="col-lg-2 col-md-4 col-sm-4" htmlFor="erpName">ERP Name</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <select className="form-control" required value={branch} onChange={(e)=>{setBranch(e.target.value)}} >
                <option value={0}>Select</option> 
                 {lists.map((list,index)=>{
                return(
                  <option key={index}>{list.branch}</option>
                 );
            })}
              </select>    
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label className="col-lg-2 col-md-4 col-sm-4" htmlFor="userName">User Name</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <input className="form-control" type="text" /> 
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="supplier" className="col-lg-2 col-md-4 col-sm-4">Password</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <input className="form-control" type="password"></input>
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="address" className="col-lg-2 col-md-4 col-sm-4">Company Name</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <input type="text" className="form-control" name="address" value={address} onChange={(e) =>{setAddress(e.target.value)}} required />
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="workorderno" className="col-lg-2 col-md-4 col-sm-4">Branch</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
            <input type="text" className="form-control" name="workorderno" value={workorderno} onChange={(e) =>{setWorkorderno(e.target.value)}} required />
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="orderno" className="col-lg-2 col-md-4 col-sm-4">Warehouse</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <input type="text" className="form-control" name="orderno" value={orderno} onChange={(e) =>{setOrderno(e.target.value)}} required  />
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="year" className="col-lg-2 col-md-4 col-sm-4">Year</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <input type="year" id="year" className="form-control mt-1 mt-sm-0"></input>
            </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <button1 className="noselect mt-2 mt-sm-0" ></button1>
        </div>
    </form>

    </div>
  );
}

export default Form;


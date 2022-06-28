import React,{useState,useEffect} from "react";
import Axios from 'axios';
import './Form.css';

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
         
        <form className="container" autoComplete="off">
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label className="col-lg-2 col-md-4 col-sm-4" htmlFor="branch">Branch</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                {/* <input type="text" className="form-control" name="branch" value={branch}  onChange={(e) =>{setBranch(e.target.value)}} required /> */}
                <select className="form-control" value={branch} onChange={(e)=>{setBranch(e.target.value)}} >
                <option>Select</option> 
                 {lists.map((list,index)=>{
                return(
                  <option key={index}>{list.branch}</option>
                 );
            })}
              </select>    
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label className="col-lg-2 col-md-4 col-sm-4" htmlFor="warehouse">Warehouse</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <select className="form-control" value={warehouse} onChange={(e)=>{setWarehouse(e.target.value)}} >
                <option>Select</option> 
                 {lists.map((list,index)=>{
                return(
                  <option key={index}>{list.warehouse}</option>
                 );
            })}
              </select>  
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="supplier" className="col-lg-2 col-md-4 col-sm-4">Supplier</label>
            <div className="col-lg-1 col-md-3 col-sm-3">
                <input className="form-control" onKeyDown={onKeyDown} value={supplierId} onChange={(e) => setSupplierId(e.target.value)}    />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5">
            <input type="text" className="form-control" value={capital && capital.name } name="supplierName" onChange={e =>setSupplierName(e.target.value)} />
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="address" className="col-lg-2 col-md-4 col-sm-4">Address</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <input type="text" className="form-control" name="address" value={address} onChange={(e) =>{setAddress(e.target.value)}} required />
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="workorderno" className="col-lg-2 col-md-4 col-sm-4">Work Order No.</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
            <input type="text" className="form-control" name="workorderno" value={workorderno} onChange={(e) =>{setWorkorderno(e.target.value)}} required />
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="orderno" className="col-lg-2 col-md-4 col-sm-4">Order No.</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <input type="text" className="form-control" name="orderno" value={orderno} onChange={(e) =>{setOrderno(e.target.value)}} required  />
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="gatepassno" className="col-lg-2 col-md-4 col-sm-4">GatePass No.</label>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <input type="text" className="form-control" name="gatepass" value={gatepass} onChange={(e) =>{setGatepass(e.target.value)}} required  />
            </div>
        </div>
        <div className="row col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="sup_dc_no" className="col-lg-2 col-md-4 col-sm-4">Sup.DC No.</label>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <input type="text" className="form-control" name="dcno" value={dcno}  onChange={(e) =>{setDcno(e.target.value)}} required />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <input type="date" id="date" className="form-control"></input>
            </div>
        </div>
        <button className="add" onClick={addProduct}>Add</button>
    </form>

    </div>
  );
}

export default Form;


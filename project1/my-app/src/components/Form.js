import React,{useState,useEffect} from "react";
import Axios from 'axios';
import './Form.css';

function Form() {
  const [branch,setBranch] = useState("");  
  const [warehouse,setWarehouse] = useState("");
  const [supplier,setSupplier] = useState("");
  const [address,setAddress] = useState("");
  const [workorderno,setWorkorderno] = useState("");
  const [orderno,setOrderno] = useState("");
  const [gatepass,setGatepass] = useState("");
  const [dcno,setDcno] = useState("");

  
  const [lists,setLists]=useState([]);


 const addProduct =()=>{
  
    Axios.post('http://localhost:5000/api/insert',
    {
       branch: branch,
       warehouse: warehouse,
       supplier:supplier,
       address:address,
       workorderno:workorderno,
       orderno:orderno,
       gatepass:gatepass,
       dcno:dcno
    })
 }

 useEffect(()=>{
    Axios.get("http://localhost:5000/api/getbranch").then((res)=>{
    //    console.log(res);
        
        setLists(res.data);
    })
},[]);



  return (
    <div>
         
        <form class="container" autoComplete="off">
        <div class="row col-lg-12 col-md-12 col-sm-12">
            <label class="col-lg-2 col-md-4 col-sm-4" htmlfor="branch">Branch</label>
            <div class="col-lg-4 col-md-8 col-sm-8">
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
        <div class="row col-lg-12 col-md-12 col-sm-12">
            <label class="col-lg-2 col-md-4 col-sm-4" htmlfor="warehouse">Warehouse</label>
            <div class="col-lg-4 col-md-8 col-sm-8">
                {/* <input type="text" className="form-control" name="warehouse" value={warehouse} onChange={(e) =>{setWarehouse(e.target.value)}} required  /> */}
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
        <div class="row col-lg-12 col-md-12 col-sm-12">
            <label htmlfor="supplier" class="col-lg-2 col-md-4 col-sm-4">Supplier</label>
            <div class="col-lg-1 col-md-3 col-sm-3">
                <input type="text" className="form-control" name="supplier"  value={supplier} onChange={(e) =>{setSupplier(e.target.value)}} required />
            </div>
            <div class="col-lg-3 col-md-5 col-sm-5">
                <input type="text" className="form-control" name="supplier" required />
            </div>
        </div>
        <div class="row col-lg-12 col-md-12 col-sm-12">
            <label htmlfor="address" class="col-lg-2 col-md-4 col-sm-4">Address</label>
            <div class="col-lg-4 col-md-8 col-sm-8">
                <input type="text" className="form-control" name="address" value={address} onChange={(e) =>{setAddress(e.target.value)}} required />
            </div>
        </div>
        <div class="row col-lg-12 col-md-12 col-sm-12">
            <label htmlfor="workorderno" class="col-lg-2 col-md-4 col-sm-4">Work Order No.</label>
            <div class="col-lg-4 col-md-8 col-sm-8">
            <input type="text" className="form-control" name="workorderno" value={workorderno} onChange={(e) =>{setWorkorderno(e.target.value)}} required />
            </div>
        </div>
        <div class="row col-lg-12 col-md-12 col-sm-12">
            <label htmlfor="orderno" class="col-lg-2 col-md-4 col-sm-4">Order No.</label>
            <div class="col-lg-4 col-md-8 col-sm-8">
                <input type="text" className="form-control" name="orderno" value={orderno} onChange={(e) =>{setOrderno(e.target.value)}} required  />
            </div>
        </div>
        <div class="row col-lg-12 col-md-12 col-sm-12">
            <label htmlfor="gatepassno" class="col-lg-2 col-md-4 col-sm-4">GatePass No.</label>
            <div class="col-lg-4 col-md-8 col-sm-8">
                <input type="text" className="form-control" name="gatepass" value={gatepass} onChange={(e) =>{setGatepass(e.target.value)}} required  />
            </div>
        </div>
        <div class="row col-lg-12 col-md-12 col-sm-12">
            <label htmlfor="sup_dc_no" class="col-lg-2 col-md-4 col-sm-4">Sup.DC No.</label>
            <div class="col-lg-2 col-md-4 col-sm-4">
                <input type="text" className="form-control" name="dcno" value={dcno}  onChange={(e) =>{setDcno(e.target.value)}} required />
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4">
                <input type="date" id="date" class="form-control"></input>
            </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <button className="noselect" onClick={addProduct}>Add</button>
        </div>
    </form>

    </div>
  );
}

export default Form;


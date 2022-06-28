import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './Table.css';
const Table = () => {
    const [lists,setLists]=useState([]);
   
    
    useEffect(()=>{
        Axios.get("http://localhost:5000/api/product").then((res)=>{
        //    console.log(res);
            setLists(res.data);
        })
    },[]);

  

    return (
        <div className='container'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
            <table className='table'> 
                <thead> 
                    <tr>
                        <th>Branch</th>
                        <th>Warehouse</th>
                        <th>SupplierId</th>
                        <th>SupplierName</th>
                        <th>Address</th>
                        <th>WorkOrderNo</th>
                        <th>OrderNo</th>
                        <th>Gatepass</th>
                        <th>DC.No</th>
                    </tr>
                </thead>
                <tbody>
                {lists.map((list,index)=>{
                        return(
                        <tr key={index}>
                            
                            <td>{list.branch}</td>
                            <td>{list.warehouse}</td>
                            <td>{list.supplierId}</td>
                            <td>{list.supplierName}</td>
                            <td>{list.address}</td>
                            <td>{list.workorderno}</td>
                            <td>{list.orderno}</td>
                            <td>{list.gatepass}</td>
                            <td>{list.dcno}</td>
                        </tr>
                        )
                       })}
                    
                      
                    
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Table;

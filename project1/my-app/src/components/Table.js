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
            <div className='table-responsive'>
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
                            
                            <td data-label="Branch">{list.branch}</td>
                            <td data-label="Warehouse">{list.warehouse}</td>
                            <td data-label="SupplierId">{list.supplierId}</td>
                            <td data-label="SupplierName">{list.supplierName}</td>
                            <td data-label="Address">{list.address}</td>
                            <td data-label="WorkOrderNo.">{list.workorderno}</td>
                            <td data-label="OrderNo.">{list.orderno}</td>
                            <td data-label="Gatepass">{list.gatepass}</td>
                            <td data-label="DC.No.">{list.dcno}</td>
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

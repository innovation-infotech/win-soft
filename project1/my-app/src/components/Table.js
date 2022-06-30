import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './Table.css';
const Table = () => {
    const [lists,setLists]=useState([]);
   
    
    useEffect(()=>{
        Axios.get("http://localhost:5000/api/product").then((res)=>{
        
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
                            
                            <td data-label="Branch" className='list'>{list.branch}</td>
                            <td data-label="Warehouse" className='list'>{list.warehouse}</td>
                            <td data-label="SupplierId" className='list'>{list.supplierId}</td>
                            <td data-label="SupplierName" className='list'>{list.supplierName}</td>
                            <td data-label="Address" className='list'>{list.address}</td>
                            <td data-label="WorkOrderNo." className='list'>{list.workorderno}</td>
                            <td data-label="OrderNo." className='list'>{list.orderno}</td>
                            <td data-label="Gatepass" className='list'>{list.gatepass}</td>
                            <td data-label="DC.No." className='list'>{list.dcno}</td>
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

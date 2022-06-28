// import React,{useState} from 'react';
// import Axios from 'axios';

// const Search = () => {
//     const [lists,setLists]=useState({});



//     const onKeyDown = (e) => {
        
//             if (e.key === "Tab") {
//                 // const key =e.target.value;
//                 Axios.get('http://localhost:5000/api/getuser')
               
//                 .then((data)=>{
               
//                 e.preventDefault();
//                 setLists(data);
//                 console.log(data);
//             })
                
//             }
//          };


       
//     return (
//         <div>
//             <p>{name}</p>
//       <input onKeyDown={onKeyDown}   />
//      <div>  
//       <input  readOnly/>
//       </div> 
//         </div>
//     );
// }
// export default Search;



import React, {useState,useEffect} from "react";
import Axios from 'axios';
import { v4 as uuidv4 } from "uuid";

const Search = () => {

const [list,setList] = useState([]);


  const [data, setData] = useState('');
 

  const [city, setCity] = useState('')


//   useEffect(()=>{
//     Axios.get("http://localhost:5000/api/getuser").then((res)=>{
  
//         setList(res.data);
//     })
// },[]);


            const onKeyDown = (e) => {
        
                if (e.key === "Tab") {
                 
                    Axios.get('http://localhost:5000/api/getuser')
                   
                    .then((res)=>{
                   
                    e.preventDefault();
                    setList(res.data);
                    console.log(res.data);
                })
                    
                }
             };
    
    
           
  
   

  const capital = list.find((obj) => {
    if (obj.user_id === data) {
      return true;
    }
    return false;
  });

 

  return (
   
      <>
       
       <input onKeyDown={onKeyDown} value={data} onChange={(e) => setData(e.target.value)}    />
          
        
              {/* <select value={searchCountry} onChange={(e) => setSearchCountry(e.target.value)}>
                <option value="" hidden>
                  --Select --
                </option>
                {
                list.map((item) => {
                  return (
                    <option key={uuidv4()} value={item.user_id}>
                      {item.user_id}
                    </option>
                  );
                })}
              </select> */}

              <input type="text"  value={ capital && capital.name || ""} onChange={e =>setCity(e.target.value)} />
          
        
       
      </>
  
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "../../assets/data/products.json";

import '@progress/kendo-theme-default/dist/all.css';
 
const Record = (props:any) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();

     //setting ids
     for(var i=0; i<records.length; i++){
      records[i].id = i+1
     }

     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id:any) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el:any) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record : any) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
//  return (
//    <div>
//      <h3>Record List</h3>
//      <table className="table table-striped" style={{ marginTop: 20 }}>
//        <thead>
//          <tr>
//            <th>Name</th>
//            <th>Position</th>
//            <th>Level</th>
//            <th>Action</th>
//          </tr>
//        </thead>
//        <tbody>{recordList()}</tbody>
//      </table>
//    </div>
//  );


return (
  <Grid
    style={{
        height: "400px",
    }}
    data={records}
  >
    <Column field="id" title="ID" width="40px" />
    <Column field="name" title="Name" width="250px" />
    <Column field="position" title="Position" />
    <Column field="level" title="Level" />    
    <Column field="_id" title="Hash ID" />    
  </Grid>
);


}


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";
import { 
  Grid, 
  GridColumn as Column,
  GridCellProps
} from "@progress/kendo-react-grid";

import EditForm from "./editform";
import { UserData } from "../interface/interfaces";
import '@progress/kendo-theme-default/dist/all.css'; 

interface EditCommandCellProps extends GridCellProps {
  enterEdit: (item: UserData) => void;
}

const EditCommandCell = (props: EditCommandCellProps) => {
  return (
    <td>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
        onClick={() => props.enterEdit(props.dataItem)}
      >
        Edit
      </button>
    </td>
  );
};

export default function RecordList() {
  //const navigate = useNavigate();
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<UserData>({ id: 1 });
  const [records, setRecords] = useState([]);
 
  
  // ------------------ DATABASE OPERATIONS -----------------------------
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

  useEffect(() => { 
    getRecords();  
    return;
  }, [records.length]);  

  
  async function updateEntry(event: UserData) {   
    await fetch(`http://localhost:5000/update/${event._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
    .catch(error => {
      window.alert(error);
      return;
    });  
    
    getRecords();
    //navigate("/projects_all/mernx"); 
    //window.location.reload();
  }


  //-------------  UI OPERATIONS ---------------------------
  const enterEdit = (item: UserData) => {
    setOpenForm(true);
    setEditItem(item);
  };  

  const handleSubmit = (event : UserData) => {     
    updateEntry(event);  
    setOpenForm(false);
  };

  const handleCancelEdit = () => {
    setOpenForm(false);
  };

  const MyEditCommandCell = (props: GridCellProps) => (
    <EditCommandCell {...props} enterEdit={enterEdit} />
  );  
 
  return (
    <>
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
        <Column cell={MyEditCommandCell} />   
      </Grid>

      {openForm && (
        <EditForm
          cancelEdit={handleCancelEdit}
          onSubmit={handleSubmit}
          user={editItem}
        />
      )}
    </>
    
  );


}


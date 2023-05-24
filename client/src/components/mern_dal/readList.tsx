import React, { useEffect, useState } from "react";
import { 
  Grid, 
  GridColumn as Column,
  GridCellProps
} from "@progress/kendo-react-grid";

import UserForm from "../templates/userForm";
import { UserData } from "../interface/interfaces";
import {getRecords, UpdateEntry} from "./MainCRUD"
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

export default function ReadList() { 
  const [openForm, setOpenForm] = useState<boolean>(false);  
  const [editItem, setEditItem] = useState<UserData>({ id: 1 });
  const [records, setRecords] = useState([]);

  useEffect(() => { 
    getRecords((records?: any) => {
      setRecords(records);
    });  
    return;
  }, [records.length]);    

  
  const enterEdit = (item: UserData) => {
    setOpenForm(true);
    setEditItem(item);
  };  

  const handleSubmit = (event : UserData) => {     
    UpdateEntry(event, (result?: any)=>{
      if(result.success){
        getRecords((records?: any) => {
          setRecords(records);
        });  
      }
    });  
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
        <UserForm
          cancelEdit={handleCancelEdit}
          onSubmit={handleSubmit}
          user={editItem}
        />
      )}
    </>
    
  );


}


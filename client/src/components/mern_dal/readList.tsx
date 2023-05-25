import React, { useEffect, useState } from "react";
import { 
  Grid, 
  GridColumn as Column,
  GridCellProps,
  GridToolbar,
  GridSortChangeEvent,
  GridPageChangeEvent 
} from "@progress/kendo-react-grid";

import { PagerTargetEvent } from "@progress/kendo-react-data-tools";
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";

import UserForm from "../templates/userForm";
import { UserData } from "../interface/interfaces";
import {getRecords, UpdateEntry, CreateEntry} from "./MainCRUD"
import '@progress/kendo-theme-default/dist/all.css'; 

interface PageState {
  skip: number;
  take: number;
}

interface EditCommandCellProps extends GridCellProps {
  enterEdit: (item: UserData) => void;
}

const initialSort: Array<SortDescriptor> = [
  { field: "id", dir: "desc" },
];

const initialDataState: PageState = { skip: 0, take: 10 };

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
  const [editItem, setEditItem] = useState<UserData>({});
  const [records, setRecords] = useState([]);
  const [sort, setSort] = React.useState(initialSort);

  //for paganation
  const [page, setPage] = React.useState<PageState>(initialDataState);
  const [pageSizeValue, setPageSizeValue] = React.useState<
    number | string | undefined
  >();

  const pageChange = (event: GridPageChangeEvent) => {
    const targetEvent = event.targetEvent as PagerTargetEvent;
    const take = targetEvent.value === "All" ? 77 : event.page.take;

    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    setPage({
      ...event.page,
      take,
    });
  };  

  const loadRecords = (e?: any) => {
    getRecords((records?: any) => {
      setRecords(orderBy(records, sort));
    });  
  }

  useEffect(() => { 
    loadRecords();
    return;
  }, [records.length]);  
  
  const enterEdit = (item: UserData) => {
    setOpenForm(true);
    setEditItem(item);
  };    

  const handleSubmit = (event : UserData) => {  
    
    if(event._id){ //for update
      UpdateEntry(event, (result?: any)=>{
        if(result.success){
          loadRecords(); 
        }
      });  
    }else{ // for new user
      CreateEntry(event, (result?: any)=>{
        if(result.success){
          loadRecords(); 
        }
      });  
    }
    
    setOpenForm(false);
  };

  const handleCancelEdit = () => {
    setOpenForm(false);
  };

  const MyEditCommandCell = (props: GridCellProps) => (
    <EditCommandCell {...props} enterEdit={enterEdit} />
  );  

  const addRecord = () => {
    setOpenForm(true);
  };
   
  return (
    <>
      <Grid
          style={{
              height: "600px",
          }}         
          data={records.slice(page.skip, page.take + page.skip)}
          skip={page.skip}
          take={page.take}
          total={records.length}
          pageable={{
            buttonCount: 4,
            pageSizes: [5, 10, 15, "All"],
            pageSizeValue: pageSizeValue,
          }}
          onPageChange={pageChange}
          sort={sort}
          onSortChange={(e: GridSortChangeEvent) => {
              setSort(e.sort);
          }}
        >
        <GridToolbar>
          <div>
            <button
              title="Add new"
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
              onClick={addRecord}
            >
              Add new
            </button>
          </div>
        </GridToolbar>
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


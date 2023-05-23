import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap";
import RecordList from "../mern_dal/recordList";

function Mern(){
    return (
        <div>
            <RecordList />
            <button>
                <NavLink className="nav-link" to="/create">
                    Create Record
                </NavLink>
            </button>
           
        </div>
      
    )
}

export default Mern;
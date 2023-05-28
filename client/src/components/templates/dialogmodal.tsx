import * as React from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { UserData } from "../interface/interfaces";

interface DialogProps {
    NoWindow: () => void;
    YesWindow: (event? : any) => void;
    user: UserData;
    isDelete: boolean;
}

const DialogWindow = (props: DialogProps) => {
    return (
        <>
            <Dialog title={"Please confirm"} onClose={props.NoWindow}>
                <p style={{ margin: "25px", textAlign: "center" }}>
                    Are you sure you want to continue?
                </p>
                <DialogActionsBar>
                    <button
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-secondary"
                    onClick={props.NoWindow}
                    >
                    No
                    </button>
                    <button
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                    onClick={props.YesWindow}                  
                    >
                    Yes
                    </button>
                </DialogActionsBar>
            </Dialog>        
        </>
    );
};

export default DialogWindow;


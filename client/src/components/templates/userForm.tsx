import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import {
  Form,
  Field,
  FormElement
} from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";
import level from "../../assets/data/level.json";
import { UserData } from "../interface/interfaces";

interface FormProps {
    cancelEdit: () => void;
    onSubmit: (event? : any) => void;
    user: UserData;
}

const UserForm = (props: FormProps) => {
    return (
      <Dialog title={`Edit ${props.user.name}`} onClose={props.cancelEdit}>
        <Form
          onSubmit={props.onSubmit}
          initialValues={props.user}
          render={(formRenderProps) => (
            <FormElement style={{ maxWidth: 650 }}>
              <fieldset className={"k-form-fieldset"}>
                <div className="mb-3">
                  <Field
                    name={"name"}
                    component={Input}
                    label={"Name"}
                  />
                </div>
                <div className="mb-3">
                  <Field
                    name={"position"}
                    component={Input}
                    label={"Position"}
                  />
                </div>
                <div className="mb-3">
                  <Field
                    name={"level"}
                    component={DropDownList}
                    data={level}
                    // textField={"levelName"}
                    label={"Level"}
                  />
                </div>                           
              </fieldset>
              <div className="k-form-buttons">
                <button
                  type={"submit"}
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                  disabled={!formRenderProps.allowSubmit}
                >
                  Update
                </button>
                <button
                  type={"submit"}
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                  onClick={props.cancelEdit}
                >
                  Cancel
                </button>
              </div>
            </FormElement>
          )}
        />
      </Dialog>
    );
  };

  export default UserForm;
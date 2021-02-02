import React from "react"
import { StoreContext } from "../../store/store.context";
import { DialogActions } from "../dialog/common/dialog-actions"
import { DialogProps } from "../dialog/type";
import { CustomDialogProps } from "./types";

export const CustomDialog = (props: CustomDialogProps & DialogProps) => {
    const store = React.useContext(StoreContext);
    const [showError, setShowError] = React.useState(true);

    const changeError = () => {
        setShowError(e => !e);
    }
    const saveData = () => {
        store!.setIsBusy!(true);
        store!.setError();
        setTimeout(() => {
            store!.setIsBusy!(false);
            if (showError) {
                store!.setError('Some error');
            } else {
                props.handleOkResult!();
            }
        }, 1000)

    };

    const customProps = { ...props, handleOkResult: saveData };
    return <>
        <div className="dialog-body">Custom DialogActions
        <div><input type="checkbox" checked={showError} onClick={changeError} /> Show error after save</div>
        </div>
        <DialogActions {...customProps} />
    </>
}
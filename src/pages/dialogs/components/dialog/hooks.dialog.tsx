import React from "react";
import { hooksDialogReducer, initialDialogState } from "../../store/hooks/store.service";
import { StoreContext } from "../../store/store.context";
import { Dialog } from "./common";

const HooksDialog = () => {
    const store = React.useContext(StoreContext);

    const [state, dispatch] = React.useReducer(hooksDialogReducer, initialDialogState);
    store?.init!(dispatch);

    const handleOkResult = () => {
        store?.closeDialog(true);
    }

    const handleCancelResult = () => {
        store?.closeDialog(false);
    }

    return (<Dialog {...state} closeDialog={store?.closeDialog} handleCancelResult={handleCancelResult} handleOkResult={handleOkResult}></Dialog>);
}

export default HooksDialog;

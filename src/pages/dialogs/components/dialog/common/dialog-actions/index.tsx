import React from "react";
import { Button } from "react-bootstrap";
import { DialogActionsProps } from "./types";
import './styles.css';

export const DialogActions = (props: DialogActionsProps) => {
    const { hideCancel, isBusy, error, handleCancelResult, cancelButtonVariant, cancelButtonText, handleOkResult, okButtonVariant, okButtonText } = props;
    return (<div className="dialog-actions">
        <div className="error">{error}</div>
        {isBusy ? (<div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>) : <></>}
        {!hideCancel && (<Button disabled={isBusy} variant={cancelButtonVariant} onClick={handleCancelResult} >{cancelButtonText}</Button>)}
        <Button disabled={isBusy} variant={okButtonVariant} onClick={handleOkResult}>{okButtonText}</Button>
    </div>);
}
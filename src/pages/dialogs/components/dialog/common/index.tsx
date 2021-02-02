import React from "react";
import { DialogProps } from "../type";
import { DialogActions } from "./dialog-actions";
import { DialogHeader } from "./dialog-header";
import "./styles.css";

export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
    const { open, title, description, children, isBusy, handleCancelResult } = props;

    const handleBackgroundClick = () => {
        // if (!keepMounted) {
        //     handleCancelResult!();
        // }
    };

    const customComponent = () => {
        if (children) {
            return React.cloneElement(children as any, { ...props });
        }
        return <></>;
    }

    return open ? (
        <div className="dialog-background" onClick={handleBackgroundClick}>
            <div className="dialog-content">
                <DialogHeader title={title} isBusy={isBusy} handleCancelResult={handleCancelResult} />
                <div>
                    <div className="dialog-body">{description}</div>
                    {customComponent()}
                </div>
                {!children && <DialogActions {...props} />}
            </div>
        </div>
    ) :
        (<></>);
}

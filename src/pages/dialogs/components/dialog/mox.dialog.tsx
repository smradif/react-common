import React from "react";
import { observer } from 'mobx-react';
import { StoreContext } from "../../store/store.context";
import { Dialog } from "./common";

@observer
export class MobxDialog extends React.Component<any> {
    handleOkResult = () => {
        this.context.closeDialog(true);
    }

    handleCancelResult = () => {
        this.context.closeDialog(false);
    }

    render() {
        return (<Dialog {...this.context.dialogProps} handleCancelResult={this.handleCancelResult} handleOkResult={this.handleOkResult}></Dialog>);
    }
}

MobxDialog.contextType = StoreContext;


import React from "react";
import { connect } from 'react-redux';
import { StoreContext } from "../../store/store.context";
import { Dialog } from "./common";

class ReduxDialog extends React.Component<any> {
    handleOkResult = () => {
        this.context.closeDialog(true);
    }

    handleCancelResult = () => {
        this.context.closeDialog(false);
    }

    render() {
        return (<Dialog {...this.props.dialogState} handleCancelResult={this.handleCancelResult} handleOkResult={this.handleOkResult}></Dialog>);
    }
}

const mapStateToProps = (state: any) => {
    return {
        dialogState: state
    }
}

ReduxDialog.contextType = StoreContext;

export default connect(mapStateToProps)(ReduxDialog);

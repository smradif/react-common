import React from "react";
import { withRouter } from "react-router";
import { Provider } from 'react-redux';
import { MobxDialog } from "./components/dialog/mox.dialog";
import ReduxDialog from "./components/dialog/redux.dialog";
import { DialogContainer } from "./components/dialog-container";
import { StoreContext } from "./store/store.context";
import { DialogPageProps, StoreService, StoreType } from "./types";
import MobxStoreService from "./store/mobx/store.service";
import ReduxStoreService, { store as ReduxStore } from "./store/redux/store.service";
import HooksStoreService from "./store/hooks/store.service";
import HooksDialog from "./components/dialog/hooks.dialog";

const DialogsPage = (props: DialogPageProps) => {
    const type = props.match?.params?.type as StoreType;
    const getStore = (): StoreService => {
        switch (type) {
            case 'mobx':
                return new MobxStoreService();
            case 'redux':
                return new ReduxStoreService();
            case 'hooks':
                return new HooksStoreService();
            default:
                throw new Error('Store type is not found');
        }
    };

    const getDialogComponent = () => {
        switch (type) {
            case 'mobx':
                return <MobxDialog />
            case 'redux':
                return <Provider store={ReduxStore}><ReduxDialog /></Provider>;
            case 'hooks':
                return <HooksDialog />;
            default:
                throw new Error('Dialog not found');
        }
    };

    return <StoreContext.Provider value={getStore()}>
        <DialogContainer type={type} />
        {getDialogComponent()}
    </StoreContext.Provider>
}

export default withRouter(DialogsPage);
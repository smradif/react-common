import React from "react";
import { Button } from "react-bootstrap";
import { StoreContext } from "../../store/store.context";
import { DialogContainerProps } from "../../types";
import { CustomDialog } from "../custom-dialog";
import './styles.css';

export const DialogContainer = (props: DialogContainerProps) => {
    const { type } = props;
    const isMobx = type === 'mobx';
    const isRedux = type === 'redux';
    const isHook = type === 'hooks';

    const store = React.useContext(StoreContext);

    const openAlertDialog = () => {
        store?.openAlertDialog({ title: 'Alert', description: 'Description in alert dialog' })
            .then((response: boolean) => console.log(response));
    };

    const openConfirmDialog = () => {
        store?.openConfirmDialog({ title: 'Confirm', description: 'Description in confirm dialog', okButtonText: 'Confirm', keepMounted: true })
            .then((response: boolean) => console.log(response))
    };

    const openCustomDialog = () => {
        store?.openCustomDialog({ title: 'Custom title', description: 'Description in custom dialog', okButtonText: 'Save', children: <CustomDialog /> })
            .then((response: boolean) => console.log(response))
    };

    return (
        <>
            <h3>Custom dialogs</h3>
            <h6>Multiple versions of dialogs that are controlled by a store. There is only one dialog component in the app root that is displayed and hidden by calling service functions</h6>

            <div className="buttons-container">
                <h3>Mobx store</h3>
                <Button disabled={!isMobx} onClick={openAlertDialog} variant="primary">Open Alert Dialog</Button>
                <Button disabled={!isMobx} onClick={openConfirmDialog} variant="warning">Open Confirm Dialog</Button>
                <Button disabled={!isMobx} onClick={openCustomDialog} variant="danger">Open Custom Dialog</Button>
            </div>

            <div className="buttons-container">
                <h3>Redux store</h3>
                <Button disabled={!isRedux} onClick={openAlertDialog} variant="primary">Open Alert Dialog</Button>
                <Button disabled={!isRedux} onClick={openConfirmDialog} variant="warning">Open Confirm Dialog</Button>
                <Button disabled={!isRedux} onClick={openCustomDialog} variant="danger">Open Custom Dialog</Button>
            </div>

            <div className="buttons-container">
                <h3>Hooks store</h3>
                <Button disabled={!isHook} onClick={openAlertDialog} variant="primary">Open Alert Dialog</Button>
                <Button disabled={!isHook} onClick={openConfirmDialog} variant="warning">Open Confirm Dialog</Button>
                <Button disabled={!isHook} onClick={openCustomDialog} variant="danger">Open Custom Dialog</Button>
            </div>
        </>
    );
}
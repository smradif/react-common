import { DialogProps } from "./components/dialog/type";

export type DialogType = 'custom' | 'alert' | 'confirm';
export type StoreType = 'mobx' | 'redux' | 'hooks';
export interface DialogPageProps {
    match?: RouterMatch;
}

export interface DialogContainerProps {
    type: StoreType;
}

export interface RouterMatch {
    params: RouterParams;
}

export interface RouterParams {
    type: DialogType;
}

export interface StoreResponse {
    resolve: (a: boolean) => void;
}

export interface StoreService {
    dialogProps?: DialogProps;
    init?: (dispatch: any) => void;
    openAlertDialog: (dialogProps: DialogProps) => Promise<boolean>;
    openConfirmDialog: (dialogProps: DialogProps) => Promise<boolean>;
    openCustomDialog: (dialogProps: DialogProps) => Promise<boolean>;
    closeDialog: (response: any) => void;
    setIsBusy: (isBusy: boolean) => void;
    setError: (error?: any) => void;
}

export const OPEN_ALERT_ACTION = 'OPEN_ALERT_ACTION';
export const OPEN_CONFIRM_ACTION = 'OPEN_CONFIRM_ACTION';
export const OPEN_CUSTOM_ACTION = 'OPEN_CUSTOM_ACTION';
export const CLOSE_DIALOG_ACTION = 'CLOSE_DIALOG_ACTION';
export const SET_IS_BUSY_ACTION = 'SET_IS_BUSY_ACTION';
export const SET_ERROR_ACTION = 'SET_ERROR_ACTION';
import { createStore } from 'redux';
import { DialogProps } from "../../components/dialog/type";
import {
  CLOSE_DIALOG_ACTION,
  OPEN_ALERT_ACTION,
  OPEN_CONFIRM_ACTION,
  OPEN_CUSTOM_ACTION,
  SET_IS_BUSY_ACTION,
  SET_ERROR_ACTION,
  StoreResponse,
  StoreService
} from "../../types";

const initialDialogState = { open: false, okButtonText: 'Ok', cancelButtonText: 'Cancel', okButtonVariant: 'primary', cancelButtonVariant: 'secondary' };

const dialogReducer = (state = initialDialogState, action: any) => {
  switch (action.type) {
    case OPEN_ALERT_ACTION:
      return { ...state, ...action.payload };
    case OPEN_CONFIRM_ACTION:
      return { ...state, ...action.payload };
    case OPEN_CUSTOM_ACTION:
      return { ...state, ...action.payload };
    case SET_IS_BUSY_ACTION:
      return { ...state, isBusy: action.payload };
    case SET_ERROR_ACTION:
      return { ...state, error: action.payload };
    case CLOSE_DIALOG_ACTION:
      return { ...initialDialogState };
    default:
      return state
  }
}

export const store = createStore(dialogReducer);

class ReduxStoreService implements StoreService {
  private promise: StoreResponse | undefined = undefined;

  openAlertDialog(dialogProps: DialogProps) {
    store.dispatch({ type: OPEN_ALERT_ACTION, payload: { ...dialogProps, open: true, hideCancel: true } });
    return this.getPromise();
  }

  openConfirmDialog(dialogProps: DialogProps) {
    store.dispatch({ type: OPEN_CONFIRM_ACTION, payload: { ...dialogProps, open: true } });
    return this.getPromise();
  }

  openCustomDialog(dialogProps: DialogProps) {
    store.dispatch({ type: OPEN_CUSTOM_ACTION, payload: { ...dialogProps, open: true } });
    return this.getPromise();
  }

  closeDialog(response: any) {
    store.dispatch({ type: CLOSE_DIALOG_ACTION });
    this.promise?.resolve(response);
  }

  setIsBusy(isBusy: boolean) {
    store.dispatch({ type: SET_IS_BUSY_ACTION, payload: isBusy });
  }

  setError(error: any) {
    store.dispatch({ type: SET_ERROR_ACTION, payload: error });
  }

  private getPromise() {
    return new Promise<boolean>((resolve) => { this.promise = { resolve } });
  }
}

export default ReduxStoreService;
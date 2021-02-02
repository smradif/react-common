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

export const initialDialogState = { open: false, okButtonText: 'Ok', cancelButtonText: 'Cancel', okButtonVariant: 'primary', cancelButtonVariant: 'secondary' };

export const hooksDialogReducer = (state = initialDialogState, action: any) => {
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

class HooksStoreService implements StoreService {
  private dispatch: any;
  private promise: StoreResponse | undefined = undefined;

  init(dispatch: any) {
    this.dispatch = dispatch;
  }

  openAlertDialog(dialogProps: DialogProps) {
    this.dispatch({ type: OPEN_ALERT_ACTION, payload: { ...dialogProps, open: true, hideCancel: true } });
    return this.getPromise();
  }

  openConfirmDialog(dialogProps: DialogProps) {
    this.dispatch({ type: OPEN_CONFIRM_ACTION, payload: { ...dialogProps, open: true } });
    return this.getPromise();
  }

  openCustomDialog(dialogProps: DialogProps) {
    this.dispatch({ type: OPEN_CUSTOM_ACTION, payload: { ...dialogProps, open: true } });
    return this.getPromise();
  }

  closeDialog(response: any) {
    this.dispatch({ type: CLOSE_DIALOG_ACTION });
    this.promise?.resolve(response);
  }

  setIsBusy(isBusy: boolean) {
    this.dispatch({ type: SET_IS_BUSY_ACTION, payload: isBusy });
  }

  setError(error: any) {
    this.dispatch({ type: SET_ERROR_ACTION, payload: error });
  }

  private getPromise() {
    return new Promise<boolean>(resolve => { this.promise = { resolve } });
  }
}

export default HooksStoreService;

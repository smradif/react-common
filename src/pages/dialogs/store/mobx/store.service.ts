import { action, makeObservable, observable } from "mobx";
import { DialogProps } from "../../components/dialog/type";
import { StoreResponse, StoreService } from "../../types";

class MobxStoreService implements StoreService {
  private initialDialogState: DialogProps = { open: false, okButtonText: 'Ok', cancelButtonText: 'Cancel', okButtonVariant: 'primary', cancelButtonVariant: 'secondary' };
  private promise: StoreResponse | undefined = undefined;

  @observable dialogProps: DialogProps = this.initialDialogState;

  constructor() {
    makeObservable(this)
  }

  @action
  openAlertDialog(dialogProps: DialogProps) {
    this.dialogProps = { ...this.dialogProps, ...dialogProps, open: true, hideCancel: true };
    return this.getPromise();
  }

  @action
  openConfirmDialog(dialogProps: DialogProps) {
    this.dialogProps = { ...this.dialogProps, ...dialogProps, open: true };
    return this.getPromise();
  }

  @action
  openCustomDialog(dialogProps: DialogProps) {
    this.dialogProps = { ...this.dialogProps, ...dialogProps, open: true };
    return this.getPromise();
  }

  @action
  closeDialog(response: any) {
    this.dialogProps = this.initialDialogState;
    this.promise?.resolve(response);
  }

  @action
  setIsBusy(isBusy: boolean) {
    this.dialogProps = { ...this.dialogProps, isBusy };
  }

  @action
  setError(error: any) {
    this.dialogProps = { ...this.dialogProps, error };
  }

  private getPromise() {
    return new Promise<boolean>((resolve) => { this.promise = { resolve } });
  }
}

export default MobxStoreService;
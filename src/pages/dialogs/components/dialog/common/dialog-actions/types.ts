export interface DialogActionsProps {
    hideCancel?: boolean;
    okButtonText?: string;
    cancelButtonText?: string;
    okButtonVariant?: string;
    cancelButtonVariant?: string;
    handleCancelResult?: () => void;
    handleOkResult?: () => void;
    isBusy?: boolean;
    error?: string;
}
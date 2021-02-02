export type VariantType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export interface DialogProps {
    title?: string;
    description?: string;
    open?: boolean;
    children?: JSX.Element;
    okButtonText?: string;
    cancelButtonText?: string;
    okButtonVariant?: string;
    cancelButtonVariant?: string;
    handleCancelResult?: () => void;
    handleOkResult?: () => void;
    closeDialog?: (response: boolean) => void;
    hideCancel?: boolean;
    keepMounted?: boolean;
    isBusy?: boolean;
    error?: any;
}
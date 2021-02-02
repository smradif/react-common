export interface WizardContextProps {
    step: number;
    noOfSteps: number;
    data?: any;
    handleNext: (data: any) => void;
    handlePrevious: () => void;
}
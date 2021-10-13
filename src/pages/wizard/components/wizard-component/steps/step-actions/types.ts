export interface WizardActionsProps {
    step: number;
    noOfSteps: number;
    error: string;
    handleNext: () => void;
    handlePrevious: () => void;
}
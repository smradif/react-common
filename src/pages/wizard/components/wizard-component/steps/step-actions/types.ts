export interface WizardActionsProps {
    step: number;
    noOfSteps: number;
    handleNext: () => void;
    handlePrevious: () => void;
}
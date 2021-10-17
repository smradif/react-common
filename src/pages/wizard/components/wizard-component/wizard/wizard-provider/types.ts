export type WizardContextProps = {
    state: WizardState;
    dispatch: WizardDispatch;
}

export type WizardState = {
    currentStep: number;
    noOfSteps: number;
    isCompleted: boolean;
    isSubmitted: boolean;
    error: string;
    wizardDataMap: Map<number, any>;
}

export type WizardAction =
    { type: 'update', payload: any } |
    { type: 'next' } |
    { type: 'previous' } |
    { type: 'reset' } |
    { type: 'steps', payload: number };

export type WizardDispatch = (action: WizardAction) => void;

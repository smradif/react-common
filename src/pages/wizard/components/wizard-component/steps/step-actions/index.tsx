import React from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';
import { WizardActionsProps } from "./types";

export const StepActions: React.FC<WizardActionsProps> = (props: WizardActionsProps) => {
    const { step, noOfSteps, error, handleNext, handlePrevious } = props;
    const isFirstStep = step === 1;
    const isFinalStep = step === noOfSteps;
    const nextText = isFinalStep ? 'Submit' : 'Next';
    return (
        <div className="buttons-container">
            <div className="error-container">{error}</div>
            <div>
                <Button disabled={isFirstStep} onClick={handlePrevious} variant='secondary'>Previous</Button>
                <Button onClick={handleNext}>{nextText}</Button>
            </div>
        </div>
    );
}
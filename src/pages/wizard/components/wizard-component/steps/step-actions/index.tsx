import React from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';
import { WizardActionsProps } from "./types";

export const StepActions: React.FC<WizardActionsProps> = (props: WizardActionsProps) => {
    const { step, noOfSteps, handleNext, handlePrevious } = props
    const isFinalStep = step === noOfSteps;
    const nextText = isFinalStep ? 'Submit' : 'Next';
    return (
        <div className="buttons-container">
            <Button disabled={step === 1} onClick={handlePrevious} variant='secondary'>Previous</Button>
            <Button onClick={handleNext}>{nextText}</Button>
        </div>
    );
}
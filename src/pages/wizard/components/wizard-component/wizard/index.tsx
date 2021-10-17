import React, { useEffect } from "react";
import { WizardProps } from "./types";
import { useWizardContext } from "./wizard-provider";
import { WizardSummary } from "./wizard-summary";
import "./styles.css";
import { WizardTitle } from "./wizard-title";
import { StepActions } from '../steps/step-actions';

export const Wizard: React.FC<WizardProps> = (props: WizardProps) => {
  const { title, noOfSteps } = props;
  const context = useWizardContext();
  const { state, dispatch } = context!;
  const { isCompleted, wizardDataMap, currentStep, error } = state;

  useEffect(() => {
    context?.dispatch({ type: 'steps', payload: noOfSteps })
  }, [])


  const handleNext = () => {
    dispatch({ type: 'next' });
  }

  const handlePrevious = () => {
    dispatch({ type: 'previous' });
  };

  const handleStartAgain = () => {
    dispatch({ type: 'reset' });
  };

  return isCompleted ? (
    <>
      <WizardSummary data={wizardDataMap}></WizardSummary>
      <div>
        <button onClick={handleStartAgain}>Start again</button>
      </div>
    </>
  ) : (
    <div className="container">
      <WizardTitle title={title}></WizardTitle>
      <div>
        {props.children}
      </div>
      <StepActions step={currentStep} noOfSteps={noOfSteps} error={error} handleNext={handleNext} handlePrevious={handlePrevious} />
    </div>
  );
};

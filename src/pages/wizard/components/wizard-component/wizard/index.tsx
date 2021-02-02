import React, { useState } from "react";
import { WizardProps } from "./types";
import WizardContext from "./wizard-provider";
import { WizardSummary } from "./wizard-summary";
import "./styles.css";
import { WizardTitle } from "./wizard-title";

export const Wizard: React.FC<WizardProps> = (props: WizardProps) => {
  const { title, noOfSteps } = props;
  const [step, setStep] = React.useState(1);
  const [wizardData, setWizardData] = useState<Map<number, any>>(
    new Map<number, any>()
  );
  const [isCompleted, setIsCompleted] = useState(false);

  const save = (data: any) => {
    wizardData.set(step, data);
    setWizardData(wizardData);
  };

  const handleNext = (data: any) => {
    save(data);
    if (step === noOfSteps) {
      setIsCompleted(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const handlePrevious = () => {
    setStep((s) => s - 1);
  };

  const handleStartAgain = () => {
    setStep(1);
    setWizardData(new Map());
    setIsCompleted(false);
  };

  const value = {
    step,
    noOfSteps,
    handleNext,
    handlePrevious,
    data: wizardData
  };

  return isCompleted ? (
    <>
      <WizardSummary data={wizardData}></WizardSummary>
      <div>
        <button onClick={handleStartAgain}>Start again</button>
      </div>
    </>
  ) : (
    <div className="container">
      <WizardTitle title={title}></WizardTitle>
      <WizardContext.Provider value={value}>
        {props.children}
      </WizardContext.Provider>
    </div>
  );
};

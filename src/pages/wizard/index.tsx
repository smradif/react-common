import React from "react";
import { Wizard } from "./components/wizard-component/wizard";
import { wizardFactory } from "./components/wizard-component/wizard/wizard-config";
import { QUESTIONS_WIZARD, WizardFactoryResult } from "./components/wizard-component/wizard/wizard-config/types";

// Example on how to get the steps from a config
const { title, wizard, noOfSteps } = wizardFactory(QUESTIONS_WIZARD) as WizardFactoryResult;

// Another example for a wizard with different title and the steps are re=ordered
//const { title, wizard, noOfSteps } = wizardFactory(RANDOM_QUESTIONS_WIZARD) as WizardFactoryResult;

const WizardPage = () => {
    return <div><Wizard title={title} noOfSteps={noOfSteps}>
    {wizard}
  </Wizard></div>
}

export default WizardPage;
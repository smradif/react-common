import React from "react";
import { Steps } from "../../steps";
import StepOne from "../../steps/step-one";
import StepThree from "../../steps/step-three";
import StepTwo from "../../steps/step-two";
import { WizardConfigItem, QUESTIONS_WIZARD, RANDOM_QUESTIONS_WIZARD } from "./types";


export const WizardConfig: { [key: string]: WizardConfigItem } = {
    [QUESTIONS_WIZARD]: {
        title: 'Wizard',
        component: Steps,
        key: 'StepsKey',
        children: [
            { component: StepOne, key: 'Step1Key', requireOrder: true },
            { component: StepTwo, key: 'Step2Key', requireOrder: true },
            { component: StepThree, key: 'Step3Key', requireOrder: true }
        ]
    },

    [RANDOM_QUESTIONS_WIZARD]: {
        title: 'Random Wizard',
        component: Steps,
        key: 'StepsKey',
        children: [
            { component: StepTwo, key: 'Step2Key', requireOrder: true },
            { component: StepOne, key: 'Step1Key', requireOrder: true },
            { component: StepThree, key: 'Step3Key', requireOrder: true }
        ]
    }
};

export const wizardFactory = (name: string) => {
    if (WizardConfig[name]) {
        let stepOrder = 1;
        const { title, component, key, children = [] } = WizardConfig[name];
        return {
            title,
            noOfSteps: children.length,
            wizard: React.createElement(component, { key }, children.map(ch => React.createElement(ch.component, { key: ch.key, order: ch.requireOrder ? stepOrder++ : -1 })))
        };
    }
    throw new Error('Wizrad not found')
};
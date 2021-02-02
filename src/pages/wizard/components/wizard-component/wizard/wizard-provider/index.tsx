import React from 'react';
import { WizardContextProps } from './types';

const WizardContext = React.createContext<WizardContextProps>({ step: 1, noOfSteps: 1, handleNext: () => {}, handlePrevious: () => {} });

export default WizardContext;
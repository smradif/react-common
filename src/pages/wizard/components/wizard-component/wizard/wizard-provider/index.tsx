import React, { useReducer } from 'react';
import { WizardAction, WizardContextProps, WizardState } from './types';

const WizardContext = React.createContext<WizardContextProps | undefined>(undefined);

const initialState: WizardState = { error: '', currentStep: 1, noOfSteps: 1, isCompleted: false, wizardDataMap: new Map<number, any>() };

const isDataCompleted = (noOfSteps: number, map: Map<number, any>) => {
    for (let i = 0; i < noOfSteps; i++) {
        if (!map.get(i + 1)) {
            return false;
        }
    }
    return true;
}
const wizardReducer = (state: WizardState, action: WizardAction): WizardState => {
    let wizardDataMap;
    switch (action.type) {
        case 'update':
            const { step, data } = action.payload;
            wizardDataMap = state.wizardDataMap;
            wizardDataMap.set(step, data);
            return { ...state, wizardDataMap }
        case 'next':
            if (state.currentStep < state.noOfSteps) {
                return { ...state, currentStep: state.currentStep + 1 };
            }
            if (isDataCompleted(state.noOfSteps, state.wizardDataMap)) {
                alert('Completed...');
                wizardDataMap = state.wizardDataMap;
                wizardDataMap.clear();
                return { ...state, currentStep: 1, error: '', isCompleted: false, wizardDataMap };
            }
            return { ...state, error: 'Data missing' };
        case 'previous':
            return { ...state, error: '', currentStep: state.currentStep - 1 };
        case 'reset':
            wizardDataMap = state.wizardDataMap;
            wizardDataMap.clear();
            return { ...state, currentStep: 1, error: '', isCompleted: false, wizardDataMap };
        case 'steps':
            return { ...state, noOfSteps: action.payload }
        default:
            return state;
    }
}

const WizardProvider = (props: any) => {
    const [state, dispatch] = useReducer(wizardReducer, initialState);
    const value = { state, dispatch };
    return <WizardContext.Provider value={value}>
        {props.children}
    </WizardContext.Provider>
}

export const useWizardContext = () => {
    const context = React.useContext(WizardContext);
    return context;
}

export default WizardProvider;
import React from 'react';
import { useWizardContext } from '../wizard/wizard-provider';
import { StepsProps } from "./types";

export const Steps: React.FC<StepsProps> = (props: StepsProps) => {
    const context = useWizardContext();
    const { dispatch } = context!;
    const onComnpletion = (step: number, data: any) => {
        dispatch({ type: 'update', payload: { step, data } })
    }
    return React.createElement('div',
        {},
        React.Children.map(props.children, ((child: any) => React.cloneElement(child, { onCompletion: onComnpletion })))
    )
}
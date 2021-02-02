import React from 'react';
import { WizardSummaryProps } from './types';

export const WizardSummary: React.FC<WizardSummaryProps> = (props: WizardSummaryProps) => {
    const { data } = props;
    //@ts-ignore
    const summary = [...data.keys()].map(key => {
        const itemData = data.get(key);
        return <div key={key}><h4>Step {key}</h4>
            <div>{itemData}</div>
        </div>
    })
    return <>
    <h2>Summary</h2>
        {summary}
    </>
}
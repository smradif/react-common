import React from 'react';
import { useWizardContext } from '../wizard/wizard-provider';
import { StepActions } from './step-actions';
import { StepTitle } from './steps-title';
import { StepProps } from './types';

const StepBase: React.FC<StepProps> = (props: StepProps) => {
    const { order, title, onCompletion, isValid } = props;
    const ref = React.useRef<HTMLTextAreaElement>(null);
    const context = useWizardContext();
    const { currentStep, wizardDataMap } = context?.state!;
    const isCurrent: boolean = order === currentStep;

    React.useEffect(() => {
        ref?.current?.focus();
    }, [context?.state.currentStep]);

    const handleTextChange = (e: any) => {
        const text = e.target.value;
        if (isValid(text)) {
            onCompletion(order, text);
        }
    }

    const stepData = wizardDataMap.get(currentStep);

    return isCurrent ? (<>
        <StepTitle title={title!}></StepTitle>
        <textarea ref={ref} rows={10} style={{ width: '100%' }} onChange={handleTextChange} value={stepData}></textarea>
    </>) : <></>;
}
export default StepBase;
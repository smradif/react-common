import React from 'react';
import WizardContext from '../wizard/wizard-provider';
import { StepActions } from './step-actions';
import { StepTitle } from './steps-title';
import { StepProps } from './types';

export const StepBase: React.FC<StepProps> = (props: StepProps) => {
    const { order, title } = props;
    const ref = React.useRef<HTMLTextAreaElement>(null);
    const [stepData, setStepData] = React.useState<string>();
    const context = React.useContext(WizardContext);
    const isCurrent: boolean = order === context.step;

    React.useEffect(() => {
        ref?.current?.focus();
    }, [context.step]);
    
    const handleNext = () => {
        context.handleNext(stepData);
    }

    const handleTextChange = (e: any) => {
        setStepData(e.target.value);
    }

    const data = context.data.get(context.step);

    return isCurrent ? (<>
        <StepTitle title={title!}></StepTitle>
        <textarea ref={ref} rows={10} style={{ width: '100%' }} onChange={handleTextChange} value={data}></textarea>
        <StepActions {...context} handleNext={handleNext} ></StepActions>
    </>) : <></>;
}
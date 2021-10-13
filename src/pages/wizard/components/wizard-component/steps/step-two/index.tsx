import React from 'react';
import StepBase from '../step.base';
import { StepProps } from "../types";

const StepTwo: React.FC<StepProps> = (props: StepProps) => {
    const isValid = (text: string) => {
        return true;
    }
    return <StepBase {...props} title="Question 2" isValid={isValid}></StepBase>
}

export default StepTwo;
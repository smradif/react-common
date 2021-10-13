import React from 'react';
import StepBase from '../step.base';
import { StepProps } from "../types";

const StepThree: React.FC<StepProps> = (props: StepProps) => {
    const isValid = (text: string) => {
        return true;
    }
    return <StepBase {...props} title="Question 3" isValid={isValid}></StepBase>
}

export default StepThree
import React from 'react';
import { StepBase } from '../step.base';
import { StepProps } from "../types";

export const StepTwo: React.FC<StepProps> = (props: StepProps) => {
    return <StepBase {...props} title="Question 2"></StepBase>
}
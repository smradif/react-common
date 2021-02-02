import React from 'react';
import { StepTitleProps } from './types'

export const StepTitle: React.FC<StepTitleProps> = (props: StepTitleProps) => {
    const { title } = props;
    return (
        <span>{title}</span>
    );
}
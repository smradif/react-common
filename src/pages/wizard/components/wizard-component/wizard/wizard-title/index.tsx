import React from 'react';
import { WizradTitleProps } from './types'

export const WizardTitle: React.FC<WizradTitleProps> = (props: WizradTitleProps) => {
    const { title } = props;
    return (
        <h2>{title}</h2>
    );
}
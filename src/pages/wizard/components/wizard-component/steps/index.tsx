import React from 'react';
import { StepsProps } from "./types";

export const Steps: React.FC<StepsProps> = (props: StepsProps) => {
    return (props.children as JSX.Element);
}
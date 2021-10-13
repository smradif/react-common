export interface StepsProps {
    children?: JSX.Element;
}

export interface StepProps {
    order: number;
    title?: string;
    onCompletion: (order: number, data: any) => void;
    isValid: (data: any) => boolean;
 }
export const QUESTIONS_WIZARD = 'QUESTIONS_WIZARD';
export const RANDOM_QUESTIONS_WIZARD = 'RANDOM_QUESTIONS_WIZARD';

export interface WizardConfigItem {
    title?: string;
    component: React.FC<any>;
    key: string;
    requireOrder?: boolean;
    children?: WizardConfigItem[];
}

export interface WizardFactoryResult {
    noOfSteps: number;
    wizard: any;
    title: string;
}
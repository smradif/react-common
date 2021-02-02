export type PerformanceType = 'intersection' | 'virtualized' | 'infinite';

export interface PerformanceItemProps {
    item: any;
    key: number;
}

export interface PerformancePageProps {
    match?: RouterMatch;
}


export interface RouterMatch {
    params: RouterParams;
}

export interface RouterParams {
    type: PerformanceType;
}
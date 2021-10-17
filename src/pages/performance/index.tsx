import React from 'react';
import { withRouter } from 'react-router';
import { IntersectionObserver } from './intersection-observer';
import { InfiniteLoaderComponent } from './infinite-loader';
import { PerformancePageProps, PerformanceType } from './types';
import { Virtualized } from './virtualized';
import './styles.css';


const PerformancePage = (props: PerformancePageProps) => {
    const type = props.match?.params?.type as PerformanceType;

    const getComponent = () => {
        switch (type) {
            case 'intersection':
                return <IntersectionObserver items={1000} />;
            case 'virtualized':
                return <Virtualized />;
            case 'infinite':
                return <InfiniteLoaderComponent />;
            default:
                throw new Error('Component not found')
        }
    }

    return <div>
        <h1>Performance</h1>
        <div className="performance-container">
            {getComponent()}
        </div>
    </div>
}

export default withRouter(PerformancePage);
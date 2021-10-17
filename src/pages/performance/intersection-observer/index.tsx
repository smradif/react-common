import { InView } from 'react-intersection-observer';
import 'intersection-observer';
import { PerformanceItemProps } from '../types';
import './styles.css';

export const IntersectionObserver = ({ items = 1000 }) => {
    const intersectionItems = [];
    for (let i = 0; i < items; i++) {
        intersectionItems.push(i);
    }

    return (<>
        <h3 style={{ textAlign: 'left' }}>Using intersection observer</h3>
        {intersectionItems.map(item =>
            <IntersectionObserverItem item={item + 1} key={item} />
        )}
    </>
    );
}


export const IntersectionObserverItem = (props: PerformanceItemProps) => (
    <div className="item-style">
        <InView>
            {({ inView, ref, entry }) => (
                <div ref={ref}>
                    <h2>{`Item ${props.item} inside viewport: ${inView}`}</h2>
                </div>
            )}
        </InView>
    </div>
);
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import './styles.css';
import { ListItem } from './types';

export const Virtualized = () => {
    const itemSize = 60;
    const itemCount = 10000;

    const virtualizedItems: ListItem[] = [];
    for (let i = 0; i < itemCount; i++) {
        virtualizedItems.push({ id: String(i), image: '', name: 'Name ' + i, text: 'Text ' + i });
    }

    const Row = (listRow: any) => {
        const { index, style } = listRow;
        const item = virtualizedItems[index];
        if (item) {
            const imageUrl = `https://picsum.photos/50/50?random=${index + 1}`
            return (
                <div key={index} style={style} className={index % 2 ? "ListItemOdd" : "ListItemEven"}>
                    <div className="image">
                        <img src={imageUrl} alt={`${index + 1}`} />
                    </div>
                    <div className="content">
                        <div>{item.name} ({item.text})</div>
                    </div>
                </div>
            );
        }
        return <></>
    }

    return (
        <>
            <h3 style={{ textAlign: 'left' }}>Using virtualized list to display {virtualizedItems.length} items</h3>
            <div className="virtualized-list">
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            className="List"
                            width={width}
                            height={height}
                            itemSize={itemSize}
                            itemCount={itemCount}
                        >
                            {Row}
                        </List>
                    )}
                </AutoSizer>
            </div>
        </>
    );
};
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import './styles.css';
import InfiniteLoader from "react-window-infinite-loader";

export const InfiniteLoaderComponent = () => {
    const itemSize = 60;
    const itemCount = 10000;

    const LOADING = 1;
    const LOADED = 2;
    let itemStatusMap: { [key: number]: number } = {};

    const isItemLoaded = (index: number) => !!itemStatusMap[index];
    const loadMoreItems = (startIndex: number, stopIndex: number) => {
        for (let index = startIndex; index <= stopIndex; index++) {
            itemStatusMap[index] = LOADING;
        }
        return new Promise((resolve: any) =>
            setTimeout(() => {
                for (let index = startIndex; index <= stopIndex; index++) {
                    itemStatusMap[index] = LOADED;
                }
                resolve();
            }, 2500)
        );
    };

    const Row = (props: any) => {
        const { index, style } = props;
        let label;
        if (itemStatusMap[index] === LOADED) {
            label = `Row ${index}`;
        } else {
            label = "Loading...";
        }
        return (
            <div className="ListItem" style={style}>
                {label}
            </div>
        );
    }

    // const virtualizedItems: ListItem[] = [];
    // for (let i = 0; i < itemCount; i++) {
    //     virtualizedItems.push({ id: String(i), image: '', name: 'Name ' + i, text: 'Text ' + i });
    // }

    // const Row2 = (listRow: any) => {
    //     const { index, style } = listRow;
    //     const item = virtualizedItems[index];
    //     if (item) {
    //         const imageUrl = `https://picsum.photos/50/50?random=${index + 1}`
    //         return (
    //             <div key={index} style={style} className={index % 2 ? "ListItemOdd" : "ListItemEven"}>
    //                 <div className="image">
    //                     <img src={imageUrl} alt={`${index + 1}`} />
    //                 </div>
    //                 <div className="content">
    //                     <div>{item.name} ({item.text})</div>
    //                 </div>
    //             </div>
    //         );
    //     }
    //     return <></>
    // }

    return (
        <>
            <h3 style={{ textAlign: 'left' }}>Using virtualized list with infinite scroll to display {itemCount} items</h3>
            <div className="virtualized-list">
                <AutoSizer>
                    {({ height, width }) => (
                        <InfiniteLoader
                            isItemLoaded={isItemLoaded}
                            itemCount={1000}
                            loadMoreItems={loadMoreItems}
                        >
                            {({ onItemsRendered, ref }) => (
                                <List
                                    className="List"
                                    width={width}
                                    height={height}
                                    itemSize={itemSize}
                                    itemCount={itemCount}
                                    onItemsRendered={onItemsRendered}
                                    ref={ref}
                                >
                                    {Row}
                                </List>
                            )}
                        </InfiniteLoader>
                    )}
                </AutoSizer>
            </div>
        </>
    );
};
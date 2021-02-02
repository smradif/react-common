
import { useMediaPredicates } from './useMediaPredicates';

export const MINIMUM_ITEMS_DESKTOP = 4;
export const MINIMUM_ITEMS_TABLET = 3;
export const MINIMUM_ITEMS_MOBILE = 2;

export const useInifiniteScrolling = (items: any) => {
    const { isMobile, isTablet } = useMediaPredicates();

    // perhaps not the most elegant solution,
    // this is a workaround to a bug present
    // in the latest version of react slick slider
    // https://github.com/akiran/react-slick/issues/1171
    const enableInfinitiveScrolling = () => {
        let minimumItems = MINIMUM_ITEMS_DESKTOP;

        if (isMobile) {
            minimumItems = MINIMUM_ITEMS_MOBILE;
        } else if (isTablet) {
            minimumItems = MINIMUM_ITEMS_TABLET;
        }

        return items.length > minimumItems;
    };
    return enableInfinitiveScrolling();
};

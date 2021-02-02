import * as React from 'react';

export type Media = {
    query?: string;
    value?: boolean;
  };
  
  export type MediaMatches = {
    isMobile?: boolean;
    isTablet?: boolean;
  };

const matches = (media: string) => {
  return matchMedia ? matchMedia(media)?.matches : false;
};

const media: { [key: string]: Media } = {
  isMobile: { query: `(max-width: 768px)` },
  isTablet: { query: `(max-width: 992px)` }
};

export const useMediaPredicates = () => {
  const getState = () => {
    return Object.keys(media).reduce(
      (acc, item: any) => ({
        ...acc,
        [item]: { value: matches(media[item].query!) }
      }),
      {}
    );
  };

  const [mediaMatches, setMediaMatches] = React.useState<{
    [key: string]: Media;
  }>(getState());

  const setMatches = () => {
    setMediaMatches(getState());
  };

  const addListeners = () => {
    Object.keys(media).forEach((key: string) => {
      const { query } = media[key];
      // Safari doesn't support addEventListener on matchMedia
      //@ts-ignore
      if (matchMedia(query).addEventListener) {
        matchMedia(query!).addEventListener('change', setMatches);
      } else {
        (matchMedia(query!) as any).addListener(setMatches);
      }
    });
  };

  const removeListeners = () => {
    Object.keys(media).forEach((key: string) => {
      const { query } = media[key];
      // Safari doesn't support addEventListener on matchMedia
       //@ts-ignore
      if (matchMedia(query).removeEventListener) {
        matchMedia(query!).removeEventListener('change', setMatches);
      } else {
        (matchMedia(query!) as any).removeListener(setMatches);
      }
    });
  };

  React.useEffect(() => {
    addListeners();
    return () => {
      removeListeners();
    };
  }, [addListeners, removeListeners]);

  const matchesItems: MediaMatches = Object.keys(mediaMatches).reduce(
    (acc: any, key: string) => ({ ...acc, [key]: mediaMatches[key].value }),
    {}
  );

  return matchesItems;
};

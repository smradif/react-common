import { useEffect } from 'react';

export const useScript = (
  url: string,
  attributes: Map<string, string>,
  shouldAddScript: boolean
) => {
  useEffect(() => {
    let script: HTMLScriptElement;
    if (shouldAddScript) {
      script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.charset = 'UTF-8';
      script.type = 'text/javascript';
      if (attributes) {
        for (const [key, value] of attributes.entries()) {
          script.setAttribute(key, value);
        }
      }
      document.head.appendChild(script);
    }
    return () => {
      if (shouldAddScript) {
        document.head.removeChild(script);
      }
    };
  }, [url, attributes, shouldAddScript]);
};

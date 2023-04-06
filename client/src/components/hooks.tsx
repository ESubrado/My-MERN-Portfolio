import { useEffect } from 'react';

const useScript = (url:any) => {
  useEffect(() => {
    const element = document.querySelector('body');
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.type = 'text/javascript';
    element && element.appendChild(script);
    return () => {
      element && element.removeChild(script);
    }
  }, [url])
};

export default useScript;
import { useEffect } from 'react';

const useScript = (url) => {
  useEffect(() => {
    const element = document.querySelector('body')
    const script = document.createElement('script')
    script.src = url
    script.async = true
    script.type = 'text/babel'
    element.appendChild(script)
    return () => {
      element.removeChild(script)
    }
  }, [url])
};

export default useScript;
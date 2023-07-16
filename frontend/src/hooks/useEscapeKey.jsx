import { useEffect } from 'react';

const useEscapeKey = (doSomething) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        doSomething();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [doSomething]);
};

export default useEscapeKey;
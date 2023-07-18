import { useEffect } from 'react';

export const useEscapeKey = (doSomething) => {
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




export function useClickOutside(ref, cb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb])
}
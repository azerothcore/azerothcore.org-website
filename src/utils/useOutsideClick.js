import { useEffect, useCallback } from 'react';

/**
 * @param ref
 * @param handler
 */
export function useOutsideClick(ref, handler) {
  const handleOutsideListClick = useCallback(e => handler(e), [handler]);
  useEffect(() => {
    const listener = e => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handleOutsideListClick(e);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handleOutsideListClick]);
}

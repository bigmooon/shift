import { useEffect } from 'react';

function UseOutsideClick(ref, callback) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // if ref does not exist or the clicked element is inside ref, ignore
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      // if the hamburger button is clicked, it is not considered an external click
      const hamburgerButton = document.querySelector(
        '.headerBtnContainer button'
      );
      if (hamburgerButton && hamburgerButton.contains(e.target)) {
        return;
      }

      // 외부 클릭으로 판단되면 콜백 실행
      callback?.();
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [ref, callback]);
}

export default UseOutsideClick;

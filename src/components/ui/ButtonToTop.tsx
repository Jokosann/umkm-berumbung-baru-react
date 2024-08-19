import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function ButtonToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      if (scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        'fixed z-50 bottom-6 right-6 w-14 aspect-square grid place-content-center bg-secondary-color shadow-xl rounded-full cursor-pointer',
        {
          visible: active,
        },
        {
          invisible: !active,
        }
      )}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <IoIosArrowUp className="text-2xl text-white" />
    </div>
  );
}

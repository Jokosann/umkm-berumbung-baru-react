import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { FaHome } from 'react-icons/fa';
import { AiFillShop } from 'react-icons/ai';
import LogoKabupatenSiak from '/images/logo-kab-siak.png';

const NavbarMenu = [
  {
    href: '/',
    title: 'home',
    icon: <FaHome />,
  },
  {
    href: '/umkm',
    title: 'umkm',
    icon: <AiFillShop />,
  },
];

export default function Navbar() {
  const { pathname } = useLocation();

  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    setIsActiveMenu(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      if (scrollY > 0) {
        setBgNav(true);
      } else {
        setBgNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-3 md:py-2 flex justify-between items-center bg-primary-color transition',
        {
          'bg-transparent': !bgNav && !isActiveMenu && pathname === '/',
        }
      )}
    >
      <div className="flex gap-3">
        <img src={LogoKabupatenSiak} alt="logo" width={50} height={50} className="w-8 sm:w-10" />
        <a href={'/'} className="flex flex-col justify-center items-start text-white">
          <p className="font-[800] text-sm sm:text-sm">LAYANAN UMKM</p>
          <p className="text-xs sm:text-sm font-medium">kampung Berumbung Baru</p>
        </a>
      </div>
      <div
        onClick={() => setIsActiveMenu(false)}
        className={clsx({
          'fixed top-[72px] sm:top-[79px] right-0 left-0 bottom-0 bg-transparent backdrop-blur-sm z-30':
            isActiveMenu,
        })}
      />

      <div
        className={clsx(
          'md:text-white font-bold md:shadow-none md:p-0 md:w-auto md:h-full md:flex-row md:bg-transparent md:flex md:justify-between md:items-center md:gap-6 text-base md:text-sm md:static fixed z-50 top-[72px] sm:top-[79px] -right-[80vw] bg-white h-full text-primary-color flex flex-col items-start gap-6 w-[80vw] sm:w-[50vw] py-5 px-4 shadow-md transition-all duration-300',
          {
            'right-0': isActiveMenu,
          }
        )}
      >
        <div className="text-primary-color w-full h-full flex justify-center items-center md:w-auto md:h-auto">
          <div className="flex flex-col items-start justify-center gap-7 -mt-[68px] sm:-mt-[79px] md:mt-0 md:text-white md:w-auto md:h-auto md:flex-row md:flex md:gap-6">
            {NavbarMenu.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={clsx(
                  'hover:underline hover:underline-offset-8 hover:decoration-1 flex gap-2 items-center',
                  {
                    'underline underline-offset-8 decoration-1': pathname === link.href,
                  }
                )}
              >
                <span>{link.icon}</span>
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <label
        className="btn btn-circle swap swap-rotate md:hidden"
        onClick={() => setIsActiveMenu(!isActiveMenu)}
      >
        {isActiveMenu ? (
          <svg
            className="fill-current text-primary-color"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        ) : (
          <svg
            className="fill-current text-primary-color"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        )}
      </label>
    </div>
  );
}

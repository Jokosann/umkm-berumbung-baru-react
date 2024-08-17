import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoFacebook } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa';

import LogoKKN from '/images/logo-kkn.jpg';

export default function Footer() {
  return (
    <footer className="footer footer-center bg-primary-color text-primary-content p-10 rounded-tr-3xl rounded-tl-3xl">
      <aside>
        <div className="rounded-full overflow-hidden">
          <img
            loading="lazy"
            src={LogoKKN}
            alt="Logo KKN"
            width={70}
            height={70}
            className="-mt-[2px] w-[65px] aspect-[1/1]"
          />
        </div>
        <p className="font-bold">
          Kukerta STAI SUSHA SIAK
          <br />
          Kampung Berumbung Baru Tahun 2024
        </p>
        <p>Copyright © {new Date().getFullYear()} - Powered by Kukerta STAI SUSHA SIAK 2024</p>
      </aside>
      <div className="grid grid-flow-col gap-4 -mt-4">
        <a href="https://web.facebook.com/profile.php?id=61560516696000" target="_blank">
          <IoLogoFacebook className="text-3xl" />
        </a>
        <a href="/" target="_blank">
          <FaYoutube className="text-3xl" />
        </a>
        <a href="https://www.instagram.com/kukerta_berumbungbaru2024" target="_blank">
          <RiInstagramFill className="text-3xl" />
        </a>
      </div>
    </footer>
  );
}

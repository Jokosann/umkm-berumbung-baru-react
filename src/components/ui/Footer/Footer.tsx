import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoFacebook, IoHomeSharp } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaClock } from 'react-icons/fa6';

import LogoKab from '/images/logo-kab-siak.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from '../../../libs/firebase/service';
import Loading from '../Loading';

export default function Footer() {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await getData('footer');
        setData(result[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Loading w="w-full" h="h-[300px]" />;
  }

  return (
    <footer>
      <div className="footer bg-primary-color/95 text-white p-10">
        <aside>
          <div className="flex gap-4 md:flex-col lg:flex-row">
            <img
              loading="lazy"
              src={LogoKab}
              alt="Logo KKN"
              width={70}
              height={70}
              className="w-[80px]"
            />
            <div>
              <p className="text-lg font-bold">Kampung Berumbung Baru</p>
              <p className="font-medium">Kecamatan dayun</p>
              <p className="font-medium">Kabupaten Siak</p>
              <p className="font-medium">Provinsi Riau</p>
            </div>
          </div>
        </aside>
        <div>
          <h6 className="footer-title">Company</h6>
          <div className="flex justify-center items-center gap-2">
            <FaPhone /> <span>{data?.company.phone}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <MdEmail /> <span>{data?.company.email}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaClock /> <span>{data?.company.clock}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <IoHomeSharp /> <span>{data?.company.place}</span>
          </div>
        </div>
        <div>
          <h6 className="footer-title">Contact</h6>
          <div className="md:h-40 md:overflow-y-scroll space-y-3 lg:pr-4">
            {data?.contact.map((item: any, i: number) => (
              <div key={i}>
                <p className="uppercase text-sm font-semibold">{item.name}</p>
                <p>{item.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h6 className="footer-title">Jelajahi Website</h6>
          <p onClick={() => navigate('/')} className="link link-hover">
            Home
          </p>
          <p onClick={() => navigate('/umkm')} className="link link-hover">
            Telusuri UMKM
          </p>
        </div>
      </div>
      <div className="footer bg-primary-color text-white items-center px-8 py-4 md:p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - KUKERTA STAI SUSHA SIAK 2024</p>
        </aside>
        <div className="grid-flow-col gap-3 md:place-self-center md:justify-self-end opacity-80 -mt-6  md:-mt-0">
          <a href="https://web.facebook.com/profile.php?id=61560516696000" target="_blank">
            <IoLogoFacebook className="text-3xl" />
          </a>
          <a href="https://youtube.com/@kukertaberumbungbaru2024?si=MV7d8qa8MBjedi_B" target="_blank">
            <FaYoutube className="text-3xl" />
          </a>
          <a href="https://www.instagram.com/kukerta_berumbungbaru2024" target="_blank">
            <RiInstagramFill className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../../libs/firebase/service';
import Loading from '../../ui/Loading';

export default function InfoUmkm() {
  const navigate = useNavigate();
  const [dataTotalUmkm, setDataTotalUmkm] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getData('total-umkm');
        setDataTotalUmkm(data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="my-8">
      <div className="mb-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-[900] text-primary-color mb-1">
          UMKM Di Kampung Berumbung Baru
        </h1>
      </div>
      <p className="mb-4 text-[#1f2937]">
        Webite ini hadir sebagai jembatan antara Anda dan keberagaman Usaha Mikro, Kecil, dan Menengah
        (UMKM) yang ada di Kampung Berumbung Baru. Temukan produk unik, dan layanan berkualitas yang
        dihadirkan oleh para pengusaha lokal kami. Bergabunglah dalam perjalanan mendukung pertumbuhan
        san keberhasilan UMKM Kampung Berumbung Baru.
      </p>
      {dataTotalUmkm ? (
        <div className="mb-10 space-y-8">
          <h2 className="text-lg font-bold mb-4 text-primary-color pr-20">
            Jumlah UMKM Di Kampung Berumbung Baru:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 md:gap-x-4">
            {dataTotalUmkm?.total.map((item: any, i: number) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <span className="text-4xl">{item.jumlah}</span>
                <span className="text-center">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading w="w-full" h="h-[200px]" />
      )}
      <button onClick={() => navigate('/umkm')} className="btn btn-outline w-full">
        Telusuri Selengkapnya <FaArrowRight />
      </button>
    </section>
  );
}

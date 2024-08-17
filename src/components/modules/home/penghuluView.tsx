import { useEffect, useRef, useState } from 'react';
import { getData } from '../../../libs/firebase/service';
import Loading from '../../ui/Loading';

export default function PenghuluView() {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [dataSambutanPenghulu, setDataSambutanPenghulu] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getData('penghulu');
        setDataSambutanPenghulu(data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMoreClick = () => {
    if (textRef.current) {
      if (isExpanded) {
        textRef.current.style.height = '305px';
      } else {
        textRef.current.style.height = 'auto';
      }
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <section className="hero mb-16">
      {dataSambutanPenghulu ? (
        <div className="hero-content flex-col md:flex-row items-start">
          <main className="w-full h-full md:w-2/5 lg:w-1/3 flex justify-center items-start">
            <img
              loading="lazy"
              src={dataSambutanPenghulu?.image}
              className="w-56 md:w-64 lg:w-80 aspect-square rounded-full shadow-2xl object-cover"
              alt="Penghulu"
              width={56}
              height={56}
            />
          </main>
          <main className="w-full md:w-3/5 lg:w-2/3">
            <div ref={textRef} className="w-full h-[305px] overflow-hidden">
              <div className="my-2">
                <h1 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl font-[900] text-primary-color mb-1">
                  Sambutan Kepala Kampung
                </h1>
                <p className="text-center md:text-start text-2xl font-[800] uppercase">
                  {dataSambutanPenghulu?.name}
                </p>
                <p className="text-center md:text-start text-base font-[700] uppercase">
                  penghulu kampung
                </p>
              </div>
              <div className="py-2">
                <p className="italic mb-4">
                  Assalamualaikum warohmatullahi wabarokatuh, dan Salam Sejahtra bagi kita semua,
                </p>
                <div className="space-y-4">
                  {dataSambutanPenghulu?.sambutan.map((item: string, i: number) => (
                    <p key={i} className="text-pretty">
                      {item}
                    </p>
                  ))}
                </div>
                <p className="italic mt-4">Wassalamu&apos;alaikum warohmatullai wabarokatuh.</p>
              </div>
            </div>
            <p
              onClick={handleMoreClick}
              className="cursor-pointer underline text-primary-color w-fit font-medium italic"
            >
              {isExpanded ? 'Lihat Lebih Sedikit' : 'Selengkapnya'}
            </p>
          </main>
        </div>
      ) : (
        <Loading w="w-full" h="h-[400px]" />
      )}
    </section>
  );
}

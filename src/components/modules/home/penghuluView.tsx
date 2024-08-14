import { useRef, useState } from 'react';

export default function PenghuluView() {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

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
    <div className="hero my-16">
      <div className="hero-content flex-col md:flex-row items-start">
        <div className="w-full h-full md:w-2/5 lg:w-1/3 flex justify-center items-start">
          <img
            src="https://utfs.io/f/dc9026f5-f1e0-4a09-8795-90c5d7ceb07b-4tf1zj.jpg"
            className="w-56 md:w-64 lg:w-80 aspect-square rounded-full shadow-2xl object-cover"
            alt="Penghulu"
          />
        </div>
        <div className="w-full md:w-3/5 lg:w-2/3">
          <div ref={textRef} className="w-full h-[305px] overflow-hidden">
            <div className="my-2">
              <h1 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl font-[900] text-primary-color mb-1">
                Sambutan Kepala Kampung
              </h1>
              <p className="text-center md:text-start text-2xl font-[800] uppercase">jokowi</p>
              <p className="text-center md:text-start text-base font-[700] uppercase">
                penghulu kampung
              </p>
            </div>
            <div className="py-2">
              <p className="italic mb-4">
                Assalamualaikum warohmatullahi wabarokatuh, dan Salam Sejahtra bagi kita semua,
              </p>
              <q className="text-pretty">
                Saya selaku Penghulu Kampung Berumbung Baru mengucapkan Selamat Datang di Website Resmi
                Kampung Berumbung Baru, melalui kesempatan ini saya ingin menyampaikan dan memberikan
                informasi mengenai sebaran UMKM yang ada di Kampung Berumbung Baru. Dengan semangat untuk
                menciptakan Pemerintahan yang baik,yang didasarkan pada prinsip Good Govermance dengan
                pola Pemerintahan yang partisipatif, transparan, dan akuntabel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Facere, harum ipsam nihil ea praesentium officiis
                accusamus dignissimos veritatis officia dolore. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nihil non consectetur laudantium hic incidunt facilis ad distinctio
                officia fugit voluptate.
              </q>
              <p className="italic mt-4">Wassalamu&apos;alaikum warohmatullai wabarokatuh.</p>
            </div>
          </div>
          <p
            onClick={handleMoreClick}
            className="cursor-pointer underline text-primary-color w-fit font-medium italic"
          >
            {isExpanded ? 'Lihat Lebih Sedikit' : 'Selengkapnya'}
          </p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getData } from '../../../libs/firebase/service';
import { useNavigate } from 'react-router-dom';
import Loading from '../../ui/Loading';

export default function GaleriUmkm() {
  const navigate = useNavigate();

  const [dataGalleryUmkm, setDataGalleryUmkm] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result: any = await getData('gallery-umkm');
        setDataGalleryUmkm(result[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mb-20">
      <header className="mb-6">
        <h1 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl font-[900] text-primary-color mb-1">
          Galeri UMKM Kampung
        </h1>
        <p className="text-center md:text-left px-2 md:px-0 text-base sm:text-lg font-medium">
          Menampilkan gambar-gambar UMKM yang ada di Kampung Berumbung baru
        </p>
      </header>
      <div className="w-full overflow-x-auto">
        {!loading ? (
          <div className="w-fit flex gap-4 pb-4">
            <div className="w-[300px] overflow-hidden rounded-md">
              <img
                src={dataGalleryUmkm?.data[0]}
                alt="Image"
                className="w-full aspect-[4/3] object-cover transition-transform transform scale-100 hover:scale-105"
              />
            </div>
            <div className="w-[300px] overflow-hidden rounded-md">
              <img
                src={dataGalleryUmkm?.data[1]}
                alt="Image"
                className="w-full aspect-[4/3] object-cover transition-transform transform scale-100 hover:scale-105"
              />
            </div>
            <div className="w-[300px] overflow-hidden rounded-md">
              <img
                src={dataGalleryUmkm?.data[2]}
                alt="Image"
                className="w-full aspect-[4/3] object-cover transition-transform transform scale-100 hover:scale-105"
              />
            </div>
            <div className="w-[300px] overflow-hidden rounded-md">
              <img
                src={dataGalleryUmkm?.data[3]}
                alt="Image"
                className="w-full aspect-[4/3] object-cover transition-transform transform scale-100 hover:scale-105"
              />
            </div>
          </div>
        ) : (
          <Loading w="w-full" h="h-[200px]" />
        )}
      </div>
      <button
        onClick={() => navigate('/gallery')}
        className="btn btn-outline w-full mt-4 border-secondary-color text-secondary-color"
      >
        Lihat Semua
      </button>
    </section>
  );
}

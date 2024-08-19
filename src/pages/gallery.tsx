import { useEffect, useState } from 'react';
import ContentWrapper from '../components/layout/ContentWrapper';
import { getData } from '../libs/firebase/service';
import { Helmet } from 'react-helmet-async';
import LoadingGalleryPage from '../components/ui/LoadingGalleryPage';
import Back from '../components/ui/Back';

export default function GalleryPage() {
  const [dataGalleryUmkm, setDataGalleryUmkm] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
    <ContentWrapper>
      <Helmet>
        <meta
          name="description"
          content="Temukan Berbagai UMKM yang ada di Kampung Berumbung Baru Kecamatan Dayun Kabupaten Siak"
        />
        <link rel="canonical" href="/umkm" />
        <title>Gallery | Website Informasi UMKM Di Kampung Berumbung Baru</title>
      </Helmet>
      <section className="py-[5rem]">
        <Back />
        <header className="mb-6">
          <h1 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl font-[900] text-secondary-color mb-1">
            Galeri UMKM Kampung
          </h1>
          <p className="text-center md:text-left px-2 md:px-0 text-base sm:text-lg font-medium">
            Menampilkan gambar-gambar UMKM yang ada di Kampung Berumbung baru
          </p>
        </header>
        {!loading ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {dataGalleryUmkm?.data?.map((item: string, index: number) => (
              <div key={index} className="w-full overflow-hidden">
                <img
                  src={item}
                  alt="Image"
                  className="w-full aspect-[4/3] object-cover transition-transform transform scale-100 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <LoadingGalleryPage />
        )}
      </section>
    </ContentWrapper>
  );
}

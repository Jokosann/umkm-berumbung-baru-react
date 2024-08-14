import { FaArrowRight } from 'react-icons/fa6';
import ContentWrapper from '../components/layout/ContentWrapper';
import PenghuluView from '../components/modules/home/PenghuluView';
import MapView from '../components/modules/home/MapView';
import ListBusines from '../components/modules/umkm/ListBusines';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(https://utfs.io/f/c89bf14b-0aed-43d9-be6e-fe3ccbc42f7b-3q6qop.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <div className="mb-3">
              <p className="text-4xl md:text-5xl md:text-center font-[800]">Selamat Datang</p>
              <p className="text-4xl md:text-5xl md:text-center font-[800]">Di Kampung Berumbung Baru</p>
            </div>
            <p className="text-sm sm:text-sm md:text-lg md:text-center w-3/4 mx-auto md:w-3/4 md:mx-auto font-medium md:font-semibold mb-5">
              Sumber informasi terbaru tentang UMKM (Usaha Mikro Kecil dan Menengah) di Kampung Berumbung
              Baru
            </p>
            <button
              onClick={() => navigate('/umkm')}
              className="btn bg-primary-color text-white hover:bg-primary-color/90 hover:text-white hover:scale-105"
            >
              Lihat selengkapnya <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <ContentWrapper>
        <div className="mb-20 mt-8">
          <div className="mb-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-[800] text-primary-color mb-1">
              UMKM Di Kampung Berumbung Baru
            </h1>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline">All</button>
            <button className="btn btn-outline">Kuliner</button>
            <button className="btn btn-outline">Pakaian</button>
            <button className="btn btn-outline">Lainya</button>
          </div>
          <div>
            <ListBusines />
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <PenghuluView />
      </ContentWrapper>
      <ContentWrapper>
        <MapView />
      </ContentWrapper>
    </>
  );
}

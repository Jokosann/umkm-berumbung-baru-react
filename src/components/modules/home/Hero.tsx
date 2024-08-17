import { IoDocumentTextOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(https://utfs.io/f/c89bf14b-0aed-43d9-be6e-fe3ccbc42f7b-3q6qop.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <main className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl">
          <div className="mb-3">
            <p className="text-4xl md:text-5xl md:text-center font-[900]">Selamat Datang</p>
            <p className="text-4xl md:text-5xl md:text-center font-[900]">Di Kampung Berumbung Baru</p>
          </div>
          <p className="text-sm sm:text-sm md:text-lg md:text-center w-3/4 mx-auto md:w-3/4 md:mx-auto font-medium md:font-semibold mb-5">
            Sumber informasi terbaru tentang UMKM (Usaha Mikro Kecil dan Menengah) di Kampung Berumbung
            Baru
          </p>
          <button
            onClick={() => navigate('/umkm')}
            className="btn bg-primary-color text-white hover:bg-primary-color/90 hover:text-white hover:scale-105"
          >
            <IoDocumentTextOutline className="text-xl" /> Lihat UMKM
          </button>
        </div>
      </main>
    </section>
  );
}

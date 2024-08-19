export default function MapView() {
  return (
    <section className="mb-20">
      <header className="mb-6">
        <h1 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl font-[900] text-primary-color mb-1">
          Lokasi Kampung
        </h1>
        <p className="text-center md:text-left px-2 md:px-0 text-base sm:text-lg font-medium">
          Menampilkan peta dengan interest point Kampung Berumbung Baru
        </p>
      </header>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31916.245201299163!2d101.93471927248123!3d0.6880359055351296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d42ee9ad02eab1%3A0xa64c14d6c3bf8853!2sBerumbung%20Baru%2C%20Dayun%2C%20Siak%20Regency%2C%20Riau!5e0!3m2!1sen!2sid!4v1723617554163!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full aspect-[1/1.2] xs:aspect-[4/3] sm:h-[480px]"
        />
      </div>
    </section>
  );
}

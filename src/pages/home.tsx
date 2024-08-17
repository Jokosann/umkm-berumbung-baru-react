import { Helmet } from 'react-helmet-async';

import Hero from '../components/modules/home/Hero';
import InfoUmkm from '../components/modules/umkm/InfoUmkm';
import PenghuluView from '../components/modules/home/PenghuluView';
import MapView from '../components/modules/home/MapView';

import ContentWrapper from '../components/layout/ContentWrapper';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Pusat informasi mengenai UMKM yang ada di Kampung Berumbung Baru Kecamatan Dayun Kabupaten Siak"
        />
        <link rel="canonical" href="/" />
        <title>Website Informasi UMKM Di Kampung Berumbung Baru</title>
      </Helmet>
      <Hero />
      <ContentWrapper>
        <InfoUmkm />
        <PenghuluView />
        <MapView />
      </ContentWrapper>
    </>
  );
}

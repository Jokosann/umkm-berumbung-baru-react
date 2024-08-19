import { lazy, Suspense, useState } from 'react';

import SearchView from '/search-logo-umkm.svg';
import Search from '../components/ui/Search';
import { useSearchParams } from 'react-router-dom';
import Fillter from '../components/ui/Fillter';
import { Helmet } from 'react-helmet-async';
import ListBusinesSkeleton from '../components/modules/umkm/ListBusinesSekeleton';

const ListBusines = lazy(() => import('../components/modules/umkm/ListBusines'));

export default function UmkmPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type') || '';

  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Temukan Berbagai UMKM yang ada di Kampung Berumbung Baru Kecamatan Dayun Kabupaten Siak"
        />
        <link rel="canonical" href="/umkm" />
        <title>UMKM | Website Informasi UMKM Di Kampung Berumbung Baru</title>
      </Helmet>

      <div className="mx-auto max-w-2xl min-h-screen px-4 py-20 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <div className="w-40 aspect-[1/1] mx-auto overflow-hidden">
          <img src={SearchView} alt="Search View" className="w-full h-full" width={40} height={40} />
        </div>
        <p className="max-w-lg text-center mx-auto text-xl md:text-2xl font-bold tracking-tight text-primary-color mb-4 -mt-2">
          Temukan berbagai Usaha Micro Kecil Menengah (UMKM) di Kampung Berumbung Baru
        </p>
        <div className="max-w-3xl mx-auto mb-6">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        {query && <p className="italic text-slate-500 text-sm mb-4">Hasil pencarian '{query}'</p>}
        <Fillter />
        <Suspense key={`${query}-${type}`} fallback={<ListBusinesSkeleton />}>
          <ListBusines query={query} type={type} />
        </Suspense>
      </div>
    </>
  );
}

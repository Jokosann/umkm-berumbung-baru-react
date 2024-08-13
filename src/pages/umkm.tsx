import SearchView from '/search-logo-umkm.svg';
import ListBusines from '../components/modules/umkm/ListBusines';
import Search from '../components/ui/Search';
import { useSearchParams } from 'react-router-dom';

export default function UmkmPage() {
  const [searchParams] = useSearchParams();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <div className="w-40 aspect-[1/1] mx-auto overflow-hidden">
          <img src={SearchView} alt="Search View" className="w-full h-full" />
        </div>
        <h2 className="max-w-lg text-center mx-auto text-2xl font-bold tracking-tight text-primary-color mb-4 -mt-2">
          Temukan berbagai Usaha micro kecil menengah (UMKM) di Kampung Berumbung Baru
        </h2>
        <div className="max-w-3xl mx-auto mb-6">
          <Search />
        </div>
        <ListBusines query={searchParams.get('q')?.toString() || ''} />
      </div>
    </div>
  );
}

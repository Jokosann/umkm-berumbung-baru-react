import { IoDocumentTextOutline } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';
import ListBusinesSkeleton from './ListBusinesSekeleton';
import { useEffect, useState } from 'react';
import { Busines } from '../../../types/busines';
import {
  getData,
  getDataByFields,
  getFilteredDataByNameIncludes,
  getFilteredDataByTypeLainya,
} from '../../../libs/firebase/service';

export default function ListBusines({ query, type }: { query: string; type: string }) {
  const navigate = useNavigate();
  const [data, setData] = useState<Busines[] | null>(null);

  useEffect(() => {
    if (query && !type) {
      const fetchData = async () => {
        try {
          const result: any = await getFilteredDataByNameIncludes('business', query!);
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
          setData([]);
        }
      };

      fetchData();
    }

    if (type && !query) {
      const fetchData = async () => {
        try {
          if (type === 'lainya') {
            const result: any = await getFilteredDataByTypeLainya('business');
            setData(result);
          } else {
            const result: any = await getDataByFields('business', 'type', type);
            setData(result);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setData([]);
        }
      };
      fetchData();
    }

    if (!query && !type) {
      const fetchData = async () => {
        try {
          const result: any = await getData('business');
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
          setData([]);
        }
      };

      fetchData();
    }
  }, [query, type]);

  if (!data) {
    return <ListBusinesSkeleton />;
  }

  if (data.length === 0) {
    return (
      <div className="py-6">
        <p className="text-slate-500">No business data available.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-4 xs:grid-cols-2 lg:grid-cols-4">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="group relative bg-[#fbfbfb] rounded-lg shadow-sm border-b-4 border-secondary-color hover:border-primary-color"
        >
          <div className="aspect-[4/2.7] w-full overflow-hidden rounded-xl group-hover:opacity-75">
            <img
              alt={item.nameBusines}
              src={item.profileBusines}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              width={200}
              height={100}
            />
          </div>
          <div className="flex flex-col items-start gap-3 p-2">
            <div>
              <p className="text-gray-700 font-bold mb-1 capitalize line-clamp-2">{item.nameBusines}</p>
              <div className="flex items-center gap-2 mt-1">
                <img
                  alt={item.username}
                  src={item.profileUser as string}
                  className="w-4 aspect-[1/1] object-cover object-center rounded-full"
                  width={16}
                  height={16}
                />
                <p className="text-sm font-medium text-gray-700">{item.username}</p>
              </div>
            </div>
            <div
              className="btn bg-secondary-color text-[#fbfbfb] rounded-md font-normal hover:bg-primary-color group-hover:bg-primary-color"
              onClick={() => navigate(`/umkm/detail/${item.id}`)}
            >
              <IoDocumentTextOutline className="text-lg" />
              Lihat Detail
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

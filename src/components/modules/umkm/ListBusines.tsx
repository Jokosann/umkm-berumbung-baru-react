import { BiDetail } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import ListBusinesSkeleton from './ListBusinesSekeleton';
import { getData } from '../../../libs/firebase/service';
import { Busines } from '../../../types/busines';
import { useNavigate } from 'react-router-dom';

export default function ListBusines({ query }: { query?: string }) {
  const navigate = useNavigate();

  const [data, setData] = useState<Busines[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result: any = await getData('business');
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (query) {
      const filteredData = data.filter((busines) =>
        busines.nameBusines.toLowerCase().includes(query.toLowerCase())
      );
      setData(filteredData);
    }
  }, [query, data]);

  return (
    <>
      {loading ? (
        <ListBusinesSkeleton />
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-4 xs:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <div key={item.id} className="group relative bg-gray-100 rounded-lg shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-md group-hover:opacity-75">
                <img
                  alt={item.nameBusines}
                  src={item.profileBusines}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="flex flex-col items-start gap-3 p-2">
                <div>
                  <h3 className="text-gray-700 font-bold mb-1 capitalize line-clamp-2">
                    {item.nameBusines}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <img
                      alt={item.username}
                      src={item.profileUser as string}
                      className="w-4 aspect-[1/1] object-cover object-center rounded-full"
                    />
                    <p className="text-xs font-medium text-gray-700">{item.username}</p>
                  </div>
                </div>
                <p
                  className="btn btn-sm rounded-md bg-primary-color text-white font-normal hover:bg-primary-color/90"
                  onClick={() => navigate(`/umkm/detail/${item.id}`)}
                >
                  <BiDetail />
                  Lihat Detail
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

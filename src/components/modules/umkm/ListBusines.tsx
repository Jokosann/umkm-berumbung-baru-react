import { IoDocumentTextOutline } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';

export default function ListBusines({ data }: { data: any }) {
  const navigate = useNavigate();

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
        <div key={item.id} className="group relative bg-gray-100 rounded-lg shadow-sm">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-md group-hover:opacity-75">
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
            <p
              className="btn rounded-md bg-primary-color text-white font-normal hover:bg-primary-color/90"
              onClick={() => navigate(`/umkm/detail/${item.id}`)}
            >
              <IoDocumentTextOutline className="text-lg" />
              Lihat Detail
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

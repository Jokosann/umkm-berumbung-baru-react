import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

const listFillter = [
  {
    value: 'all',
  },
  {
    value: 'kuliner',
  },
  {
    value: 'fashion',
  },
  {
    value: 'lainya',
  },
];

export default function Fillter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [active, setActive] = useState('');

  const handleFillter = (e: any, value: string) => {
    e.preventDefault();

    if (value === 'all') {
      searchParams.delete('type');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ ...searchParams, type: value });

      navigate(`${pathname}?type=${encodeURIComponent(value)}`, { replace: true });
    }
  };

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setActive(type);
    } else {
      setActive('all');
    }
  }, [searchParams]);

  return (
    <div className="flex flex-wrap gap-2">
      {listFillter.map((item, i: number) => (
        <button
          key={i}
          className={`btn btn-outline capitalize ${
            active === item.value && 'bg-primary-color text-white'
          }`}
          onClick={(e) => handleFillter(e, item.value)}
        >
          {item.value}
        </button>
      ))}
    </div>
  );
}

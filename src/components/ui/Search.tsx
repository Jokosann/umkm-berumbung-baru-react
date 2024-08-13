import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('q')?.toString() || '');

  const handleSearch = (e: any) => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return alert('Masuukan kalimat yang benar.');
    }
    setSearchParams({ q: searchQuery });
    navigate(`/umkm?q=${encodeURIComponent(searchQuery)}`, { replace: true });

    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="search"
          className="grow"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          required
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <button
        type="submit"
        className="btn w-full sm:w-[20%] lg:w-[10%] bg-primary-color text-white hover:bg-primary-color/70"
      >
        Search
      </button>
    </form>
  );
}

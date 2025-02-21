// ClientSearch.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export const ClientSearch = ({ initialSearch = '' }) => {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);

  const handleSearch = (value: string) => {
    setSearch(value);
    const searchParams = new URLSearchParams();
    if (value) {
      searchParams.set('search', value);
    }
    router.push(`/manager/menu?${searchParams.toString()}`);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Search menu..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};
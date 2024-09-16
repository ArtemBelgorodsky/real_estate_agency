'use client';
import { TableOffers } from '@/components';
import { useSearchParams } from 'next/navigation';

export default async function Search() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const searchOffers = await fetch(
    `https://b580138023681732.mokky.dev/items?${searchParams}`
  );
  const items = await searchOffers.json();

  return (
    <div className="bg-gray-100 font-sans">
      <main className="p-8">
        <TableOffers items={items} />
      </main>
    </div>
  );
}

'use client';
import { TableOffers } from '@/components';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default async function SearchingOffers() {
  const searchParams = useSearchParams();

  const searchOffers = await fetch(
    `https://b580138023681732.mokky.dev/items?${searchParams}`
  );
  const items = await searchOffers.json();

  return (
    <Suspense>
      <div className="bg-gray-100 font-sans">
        <main className="p-8">
          <TableOffers items={items} />
        </main>
      </div>
    </Suspense>
  );
}

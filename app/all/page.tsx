import { TableOffers } from '@/components';
import { Suspense } from 'react';

export default async function All() {
  function SearchFallback() {
    return <>Идет загрузка...</>;
  }
  return (
    <div className="bg-gray-100 font-sans">
      <main className="p-8">
        <Suspense fallback={<SearchFallback />}>
          <TableOffers />
        </Suspense>
      </main>
    </div>
  );
}

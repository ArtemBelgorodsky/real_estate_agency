import { TableOffers } from '@/components';
import { Suspense } from 'react';

export default async function SearchingOffers() {
  function SearchSuspence() {
    return <>Идет загрузка...</>;
  }

  return (
    <div className="bg-gray-100 font-sans">
      <main className="p-8">
        <Suspense fallback={<SearchSuspence />}>
          <TableOffers />
        </Suspense>
      </main>
    </div>
  );
}

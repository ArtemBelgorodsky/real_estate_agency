import { TableOffers } from '@/components';

export default async function All() {
  const allOffers = await fetch('https://b580138023681732.mokky.dev/items');
  const items = await allOffers.json();
  return (
    <div className="bg-gray-100 font-sans">
      <main className="p-8">
        <TableOffers items={items} />
      </main>
    </div>
  );
}

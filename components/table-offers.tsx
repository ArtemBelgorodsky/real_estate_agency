'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export interface Item {
  id: number;
  name: string;
  address: string;
  price: number;
  image: string;
  description?: string;
}

export const TableOffers = async () => {
  const searchParams = useSearchParams();

  const searchOffers = await fetch(
    `https://b580138023681732.mokky.dev/items?${searchParams}`
  );
  const items = await searchOffers.json();
  return (
    <section className="table-offers mb-12">
      <h2 className="text-2xl font-semibold mb-4">Предложения</h2>
      {items.length === 0 && <p>Ничего не найдено</p>}
      <div className="object-cards flex justify-around flex-wrap">
        {items.map((item: any) => (
          <Link href={`/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="object-card bg-white border border-gray-200 p-4 m-2 w-64 text-center"
            >
              <img src={item.image} alt="Объект 1" className="w-full h-auto" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p>{item.address}</p>
              <p>Цена: {item.price} руб.</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

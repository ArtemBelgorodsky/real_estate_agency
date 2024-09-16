import Link from 'next/link';

export const PreviewObjects = async () => {
  let data = await fetch('https://b580138023681732.mokky.dev/popular');
  let popularItems = await data.json();
  return (
    <section className="preview-objects mb-12">
      <h2 className="text-2xl font-semibold mb-4">Популярные предложения</h2>
      <div className="object-cards flex justify-around flex-wrap">
        {popularItems.map((item: any) => (
          <Link href={`/${item.id}`} key={item.id}>
            <div className="object-card bg-white border border-gray-200 p-4 m-2 w-64 text-center">
              <img src={item.image} alt="Объект 1" className="w-full h-auto" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p>{item.address}</p>
              <p>Цена: {item.price} руб.</p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/all"
        className="all-offers-btn block w-64 mx-auto mt-4 p-2 text-center bg-green-600 text-white rounded hover:bg-green-700"
      >
        Смотреть все предложения
      </Link>
    </section>
  );
};

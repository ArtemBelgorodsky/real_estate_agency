import { Item } from './table-offers';

export const OfferInformation = ({ item }: { item: Item }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{item.address}</h1>
        <img
          src={item.image}
          alt={item.address}
          className="w-full h-auto mb-4"
        />
        <p className="text-lg mb-4">{item.description}</p>
        <p className="text-xl font-semibold mb-4">Цена: {item.price}</p>
        <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Связаться с нами
        </button>
      </div>
    </div>
  );
};

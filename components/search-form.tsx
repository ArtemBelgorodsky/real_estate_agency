'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const SearchForm = () => {
  const router = useRouter();
  const [searchCity, setSearchCity] = useState('');
  const [searchType, setSearchType] = useState('flat');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  function handleSubmit(e: any) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchCity) {
      params.append('city', searchCity);
    }
    if (searchType) {
      params.append('type', searchType);
    }
    if (minPrice) {
      params.append('price[from]', minPrice.toString());
    }
    if (maxPrice) {
      params.append('price[to]', maxPrice.toString());
    }
    router.push(`/search?${params.toString()}`);
  }

  return (
    <section className="search-form mb-12">
      <h2 className="text-2xl font-semibold mb-4">Поиск недвижимости</h2>
      <form className="flex justify-center gap-4">
        <select
          name="city"
          className="p-2 border rounded"
          onChange={(e) => setSearchCity(e.target.value)}
        >
          <option value="">Все</option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Краснодар">Краснодар</option>
          {/* Добавьте другие города */}
        </select>
        <select
          name="type"
          className="p-2 border rounded"
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="flat">Квартира</option>
          <option value="house">Дом</option>
        </select>
        <input
          type="number"
          name="min-price"
          placeholder="Минимальная цена"
          className="p-2 border rounded"
          onChange={(e) => setMinPrice(+e.target.value)}
        />
        <input
          type="number"
          name="max-price"
          placeholder="Максимальная цена"
          className="p-2 border rounded"
          onChange={(e) => setMaxPrice(+e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Найти
        </button>
      </form>
    </section>
  );
};

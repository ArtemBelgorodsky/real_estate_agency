import React from 'react';

export const Services = () => {
  return (
    <section className="services mb-12">
      <h2 className="text-2xl font-semibold mb-4">Услуги</h2>
      <ul className="list-none pl-0">
        <li className="mb-2">
          <a href="#" className="text-green-600 hover:underline">
            Покупка/продажа недвижимости
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-green-600 hover:underline">
            Аренда недвижимости
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-green-600 hover:underline">
            Оценка недвижимости
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-green-600 hover:underline">
            Юридическое сопровождение сделок
          </a>
        </li>
      </ul>
    </section>
  );
};

import React from 'react';

export const AboutUs = () => {
  return (
    <section className="about-us mb-12">
      <h2 className="text-2xl font-semibold mb-4">О нас</h2>
      <p className="mb-4">
        Мы - команда профессионалов с многолетним опытом работы на рынке
        недвижимости. Наша цель - помочь вам найти идеальное жилье, которое
        будет радовать вас долгие годы.
      </p>
      <ul className="list-none pl-0">
        <li className="bg-gray-200 p-2 mb-2">Большая база объектов</li>
        <li className="bg-gray-200 p-2 mb-2">Профессиональные консультации</li>
        <li className="bg-gray-200 p-2 mb-2">
          Индивидуальный подход к каждому клиенту
        </li>
        <li className="bg-gray-200 p-2 mb-2">Бесплатные консультации</li>
      </ul>
    </section>
  );
};

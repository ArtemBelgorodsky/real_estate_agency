import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-green-600 text-white text-center py-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="text-2xl font-bold hover:text-gray-200 transition duration-300"
          href="/"
        >
          Главная
        </Link>
        <h1 className="text-4xl font-bold">
          Найдите свой идеальный дом с "Мечтой"!
        </h1>
        <div></div> {/* Пустой div для выравнивания */}
      </div>
      <p className="mt-2">
        Более 10 лет на рынке недвижимости. Большая база объектов.
        Профессиональные консультации.
      </p>
    </header>
  );
};

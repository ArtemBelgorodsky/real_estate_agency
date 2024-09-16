import React from 'react';

export const Contacts = () => {
  return (
    <section className="contacts mb-12">
      <h2 className="text-2xl font-semibold mb-4">Контакты</h2>
      <p className="mb-2">Адрес: г. Примерный, ул. Примерная, 1</p>
      <p className="mb-2">Телефон: +7 (123) 456-78-90</p>
      <p className="mb-4">Email: info@example.com</p>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          className="p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Ваш телефон"
          className="p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          className="p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="social-links mb-4">
        <a href="#" className="text-white mx-2 hover:underline">
          Facebook
        </a>
        <a href="#" className="text-white mx-2 hover:underline">
          Twitter
        </a>
        <a href="#" className="text-white mx-2 hover:underline">
          Instagram
        </a>
      </div>
      <div className="privacy-policy mb-4">
        <a href="#" className="text-white hover:underline">
          Политика конфиденциальности
        </a>
      </div>
      <div className="copyright">&copy; 2024 "Мечта". Все права защищены.</div>
    </footer>
  );
};

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#774936] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">г. Воронеж, ул. Ф. Энгельса, 48</p>
            <p className="mb-2">Телефон: <a href="tel:+79081328866" className="underline">+7 (908) 132-88-66</a></p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://wa.me/79081328866"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#c68b59]"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/+79081328866"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#c68b59]"
                aria-label="Telegram"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Главная</Link></li>
              <li><Link href="/about" className="hover:underline">Обо мне</Link></li>
              <li><Link href="/services" className="hover:underline">Услуги</Link></li>
              <li><Link href="/contact" className="hover:underline">Контакты</Link></li>
            </ul>
          </div>

          {/* Карта */}
          <div>
            <h3 className="text-xl font-bold mb-4">Как добраться</h3>
            <div className="w-full h-48">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aripinskiys_215_auto_jpg_5_100&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта проезда"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-400 text-center text-sm">
          &copy; {new Date().getFullYear()} Рипинский Анатолий Анатольевич. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#774936] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Контакты */}
          <div>
            <h3 className="font-bold mb-3 text-[#e9b872]">Контакты</h3>
            <p className="text-sm mb-2">г. Воронеж, ул. Ф. Энгельса, 48</p>
            <p className="text-sm mb-2">
              Телефон: <a href="tel:+79081328866" className="underline hover:text-[#e9b872]">+7 (908) 132-88-66</a>
            </p>
            <p className="text-sm">
              <a href="https://wa.me/79081328866" className="underline hover:text-[#e9b872] mr-3">WhatsApp</a>
              <a href="https://t.me/+79081328866" className="underline hover:text-[#e9b872]">Telegram</a>
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-bold mb-3 text-[#e9b872]">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline hover:text-[#e9b872]">Главная</a></li>
              <li><a href="/about" className="hover:underline hover:text-[#e9b872]">Обо мне</a></li>
              <li><a href="/services" className="hover:underline hover:text-[#e9b872]">Услуги</a></li>
              <li><a href="/prices" className="hover:underline hover:text-[#e9b872]">Цены</a></li>
              <li><a href="/useful" className="hover:underline hover:text-[#e9b872]">Полезное</a></li>
              <li><a href="/contact" className="hover:underline hover:text-[#e9b872]">Контакты</a></li>
            </ul>
          </div>

          {/* Карта (Исправленная, надежная ссылка) */}
          <div>
            <h3 className="font-bold mb-3 text-[#e9b872]">Как добраться</h3>
            <div className="w-full h-40 bg-gray-200 rounded overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?text=Воронеж,+улица+Фридриха+Энгельса,+48&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Карта проезда к офису адвоката"
              />
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-xs md:text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Рипинский Анатолий Анатольевич. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

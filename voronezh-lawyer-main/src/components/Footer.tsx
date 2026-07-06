export default function Footer() {
  return (
    <footer className="bg-[#774936] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contacts */}
          <div>
            <h3 className="font-bold mb-2">Контакты</h3>
            <p className="text-sm">г. Воронеж, ул. Ф. Энгельса, 48</p>
            <p className="text-sm">Телефон: <a href="tel:+79081328866" className="underline">+7 (908) 132-88-66</a></p>
            <p className="text-sm">
              <a href="https://wa.me/79081328866" className="underline">WhatsApp</a>
              {' '}
              <a href="https://t.me/+79081328866" className="underline">Telegram</a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-2">Навигация</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Главная</a></li>
              <li><a href="/about" className="hover:underline">Обо мне</a></li>
              <li><a href="/services" className="hover:underline">Услуги</a></li>
              <li><a href="/prices" className="hover:underline">Цены</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/contact" className="hover:underline">Контакты</a></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-bold mb-2">Как добраться</h3>
            <iframe
              src="https://yandex.ru/map-widget/v2/-/CDU~3kZ~"
              width="100%"
              height="150"
              className="rounded"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Рипинский Анатолий Анатольевич. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

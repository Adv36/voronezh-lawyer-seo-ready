import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Контакты адвоката по уголовным делам в Воронеже — воронежадвокат',
  description: 'Свяжитесь с адвокатом по уголовным делам в Воронеже: телефон, WhatsApp, Telegram, email, адрес офиса. Звоните 📞: +7 (908) 132-88-66',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Контактная информация */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Как со мной связаться</h2>
            <p className="mb-2">📍 <strong>Адрес:</strong> г. Воронеж, ул. Фридриха Энгельса, д. 48</p>
            <p className="mb-2">📞 <strong>Телефон:</strong> <a href="tel:+79081328866" className="text-blue-600 hover:underline">+7 (908) 132-88-66</a></p>
            <p className="mb-4">✉️ <strong>Email:</strong> <a href="mailto:ripinsky@list.ru" className="text-blue-600 hover:underline">ripinsky@list.ru</a></p>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://wa.me/79081328866"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/79081328866"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Карта */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Как нас найти</h2>
            <div id="ymap" className="w-full h-64 rounded-lg bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Карта загружается на сайте</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Карта отображается после публикации на сайте (не работает локально).
            </p>
          </div>
        </div>

        {/* Форма обратной связи */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Форма обратной связи</h2>
          <form className="space-y-4 max-w-lg">
            <div>
              <label htmlFor="name" className="block mb-1">Ваше имя</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">Телефон</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border rounded"
                placeholder="+7 (900) 123-45-67"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Сообщение</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border rounded"
                placeholder="Опишите вашу ситуацию кратко..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Отправить
            </button>
          </form>
          <p className="mt-2 text-sm text-gray-500">
            Я отвечаю в течение 30 минут. Либо напишите сразу в WhatsApp или Telegram.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

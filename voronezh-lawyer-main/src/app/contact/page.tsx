import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h1 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">Контакты</h1>
          </div>

          <p className="mb-8 text-gray-700">
            Свяжитесь со мной любым удобным способом. Я отвечаю на все обращения максимально оперативно.
          </p>

          {/* Форма обратной связи */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6 bg-white p-6 rounded-lg shadow-md"
          >
            {/* Honeypot — защита от ботов */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            {/* Имя */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c68b59]"
              />
            </div>

            {/* Телефон */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+7 (900) 123-45-67"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c68b59]"
              />
            </div>

            {/* Email (опционально) */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c68b59]"
              />
            </div>

            {/* Сообщение */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Сообщение *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c68b59]"
              ></textarea>
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="bg-[#774936] hover:bg-[#c68b59] text-white font-bold py-3 px-6 rounded transition"
            >
              Отправить сообщение
            </button>
          </form>

          {/* Альтернативные контакты */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Или свяжитесь напрямую:</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://wa.me/79081328866"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline font-medium"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/+79081328866"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Telegram
              </a>
              <a
                href="tel:+79081328866"
                className="text-gray-700 hover:underline font-medium"
              >
                +7 (908) 132-88-66
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

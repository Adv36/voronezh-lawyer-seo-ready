import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-6 h-0.5 bg-[#774936] mr-3 md:w-8 md:mr-4"></div>
            <h1 className="text-xl md:text-2xl font-bold uppercase text-[#774936]">Контакты</h1>
          </div>

          <p className="mb-6 md:mb-8 text-gray-700 text-sm md:text-base">
            Свяжитесь со мной любым удобным способом. Я отвечаю на все обращения максимально оперативно.
          </p>

          {/* Форма обратной связи */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-5 md:space-y-6 bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c68b59] text-sm md:text-base"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+7 (900) 123-45-67"
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c68b59] text-sm md:text-base"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c68b59] text-sm md:text-base"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Сообщение *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c68b59] text-sm md:text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#774936] hover:bg-[#c68b59] text-white font-bold py-2.5 px-6 rounded transition text-sm md:text-base"
            >
              Отправить сообщение
            </button>
          </form>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">Или свяжитесь напрямую:</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <a
                href="https://wa.me/79081328866"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline font-medium text-sm md:text-base"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/+79081328866"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium text-sm md:text-base"
              >
                Telegram
              </a>
              <a
                href="tel:+79081328866"
                className="text-gray-700 hover:underline font-medium text-sm md:text-base"
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

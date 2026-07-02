import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Контакты | Адвокат Рипинский А.А. — Воронеж",
  description: "Связаться с адвокатом: WhatsApp, Telegram, телефон +7 (908) 132-88-66. Офис в Воронеже, ул. Ф. Энгельса, 48.",
};

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
            Свяжитесь со мной любым удобным способом. Я отвечаю на все обращения в течение 24 часов.
          </p>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md space-y-4">
            <div>
              <h3 className="font-bold text-[#774936] mb-2">Адрес офиса:</h3>
              <p className="text-gray-700">г. Воронеж, ул. Ф. Энгельса, 48</p>
            </div>

            <div>
              <h3 className="font-bold text-[#774936] mb-2">Телефон:</h3>
              <a href="tel:+79081328866" className="text-[#774936] hover:underline text-lg font-medium">
                +7 (908) 132-88-66
              </a>
            </div>

            <div>
              <h3 className="font-bold text-[#774936] mb-2">Мессенджеры:</h3>
              <div className="flex gap-4">
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
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#774936] mb-2">Email:</h3>
              <a href="mailto:ripinsky@list.ru" className="text-[#774936] hover:underline">
                ripinsky@list.ru
              </a>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-[#774936] mb-2">Режим работы:</h3>
              <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-700">Сб-Вс: по предварительной записи</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-3">Или свяжитесь напрямую:</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
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

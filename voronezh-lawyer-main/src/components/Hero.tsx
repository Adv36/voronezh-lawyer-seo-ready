"use client";

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[550px] md:h-[600px] text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#774936]">
        <div className="absolute inset-0 bg-[#774936]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Воронеж<br />
          адвокат по<br />
          уголовным делам
        </h1>
        <h2 className="text-xl md:text-3xl mb-6 md:mb-8">
          — Рипинский Анатолий Анатольевич
        </h2>

        <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
          <span className="py-1 px-4 bg-[#c68b59] rounded-full text-white text-sm">
            Защита граждан
          </span>
          <span className="py-1 px-4 bg-[#c68b59] rounded-full text-white text-sm">
            Защита бизнеса
          </span>
        </div>

        {/* Features — с inline SVG */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* 1. Ответ за 30 мин */}
          <div className="flex flex-col items-center bg-black/30 p-4 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <h3 className="mt-2 text-center text-sm font-medium">Отвечу в течение</h3>
            <p className="text-center text-sm">30 минут — пишите в WhatsApp</p>
          </div>

          {/* 2. На связи 24/7 */}
          <div className="flex flex-col items-center bg-black/30 p-4 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <h3 className="mt-2 text-center text-sm font-medium">На связи 24 часа</h3>
            <p className="text-center text-sm">без выходных</p>
          </div>

          {/* 3. Бесплатная консультация */}
          <div className="flex flex-col items-center bg-black/30 p-4 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4z"/>
              <path d="M18 9h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-2"/>
            </svg>
            <h3 className="mt-2 text-center text-sm font-medium">Первая консультация</h3>
            <p className="text-center text-sm">— бесплатно</p>
          </div>
        </div>

        {/* Кнопка → на контакты */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#c68b59] hover:bg-[#c68b59]/90 text-white font-medium py-3 px-6 rounded-full w-full sm:w-auto"
        >
          Получить консультацию
        </Link>
      </div>
    </section>
  );
};

export default Hero;

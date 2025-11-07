"use client";

import React from 'react';
import Link from 'next/link';

const UsefulLinks = () => {
  // Links categorized by federal and local
  const links = [
    {
      title: 'Федеральные министерства и ведомства',
      items: [
        { name: 'Президент Российской Федерации', url: 'http://kremlin.ru/' },
        { name: 'Правительство Российской Федерации', url: 'http://government.ru/' },
        { name: 'Государственная Дума Федерального Собрания РФ', url: 'http://duma.gov.ru/' },
        { name: 'Совет Федерации Федерального Собрания РФ', url: 'http://council.gov.ru/' },
        { name: 'Министерство юстиции Российской Федерации', url: 'https://minjust.gov.ru/' },
        { name: 'Министерство внутренних дел Российской Федерации', url: 'https://мвд.рф/' },
        { name: 'Федеральная служба безопасности Российской Федерации', url: 'http://www.fsb.ru/' },
        { name: 'Генеральная прокуратура Российской Федерации', url: 'https://epp.genproc.gov.ru/' },
        { name: 'Следственный комитет Российской Федерации', url: 'https://sledcom.ru/' },
        { name: 'Верховный Суд Российской Федерации', url: 'https://vsrf.ru/' },
        { name: 'Федеральная служба судебных приставов', url: 'https://fssp.gov.ru/' },
        { name: 'Федеральная служба исполнения наказаний', url: 'https://fsin.gov.ru/' },
        { name: 'Федеральная таможенная служба', url: 'https://customs.gov.ru/' },
        { name: 'Федеральная налоговая служба', url: 'https://www.nalog.gov.ru/' },
      ]
    },
    {
      title: 'Судебные и правоохранительные органы Воронежской области',
      items: [
        { name: 'Адвокатская палата Воронежской области', url: 'https://advpalata.vrn.ru/' },
        { name: 'Воронежский областной суд', url: 'https://oblsud.vrn.sudrf.ru/' },
        { name: 'Арбитражный суд Воронежской области', url: 'https://voronej.arbitr.ru/' },
        { name: 'Прокуратура Воронежской области', url: 'https://epp.genproc.gov.ru/web/proc_36' },
        { name: 'Главное управление МВД России по Воронежской области', url: 'https://36.мвд.рф/' },
        { name: 'УФСИН России по Воронежской области', url: 'https://36.fsin.gov.ru/' },
        { name: 'Управление Судебного департамента в Воронежской области', url: 'http://usd.vrn.sudrf.ru/' },
        { name: 'Управление Федеральной службы судебных приставов по Воронежской области', url: 'https://r36.fssp.gov.ru/' },
        { name: 'Следственное управление Следственного комитета РФ по Воронежской области', url: 'https://voronezh.sledcom.ru/' },
        { name: 'Центральный районный суд г. Воронежа', url: 'https://centralny.vrn.sudrf.ru/' },
        { name: 'Ленинский районный суд г. Воронежа', url: 'https://leninsky.vrn.sudrf.ru/' },
        { name: 'Коминтерновский районный суд г. Воронежа', url: 'https://kominternovsky.vrn.sudrf.ru/' },
        { name: 'Левобережный районный суд г. Воронежа', url: 'https://levoberezhny.vrn.sudrf.ru/' },
        { name: 'Советский районный суд г. Воронежа', url: 'https://sovetsky.vrn.sudrf.ru/' },
        { name: 'Железнодорожный районный суд г. Воронежа', url: 'https://zheleznodorozhny.vrn.sudrf.ru/' },
      ]
    }
  ];

  return (
    <section id="useful-links" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section header */}
        <div className="flex items-center mb-8 md:mb-10">
          <div className="w-6 md:w-8 h-0.5 bg-[#774936] mr-3 md:mr-4"></div>
          <h2 className="text-xl md:text-3xl font-bold uppercase text-[#774936]">ПОЛЕЗНЫЕ ССЫЛКИ НА САЙТЫ В СЕТИ ИНТЕРНЕТ</h2>
        </div>

        {/* Links categories */}
        <div className="space-y-8">
          {links.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#774936] mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex">
                    <span className="text-[#c68b59] mr-2">•</span>
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#c68b59] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>Внимание: Вся информация на официальных сайтах государственных органов предоставляется в соответствии с законодательством РФ.</p>
          <p className="mt-2">При переходе на сторонние ресурсы вы соглашаетесь с политикой их конфиденциальности и условиями использования.</p>
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;

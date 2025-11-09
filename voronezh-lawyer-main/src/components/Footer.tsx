import React from 'react';
import Script from 'next/script';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p>г. Воронеж, ул. Фридриха Энгельса, д. 48</p>
            <p>Тел.: <a href="tel:+79081328866" className="underline hover:text-blue-300">+7 (908) 132-88-66</a></p>
            <p>
              <a href="https://wa.me/79081328866" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300 mr-4">WhatsApp</a>
              <a href="https://t.me/+79081328866" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Telegram</a>
            </p>
            <p>
              Email: <a href="mailto:advokat@xn--80aaebjeh9avjags2b.xn--p1ai" className="underline hover:text-blue-300">advokat@xn--80aaebjeh9avjags2b.xn--p1ai</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Как нас найти</h3>
            <div id="ymap" style={{ width: '100%', height: '300px', borderRadius: '8px' }}></div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} — Адвокат по уголовным делам в Воронеже
        </div>
      </div>

      <Script id="ymap-init" strategy="afterInteractive">
        {`
          function initYmap() {
            if (typeof ymaps === 'undefined') return;
            var myMap = new ymaps.Map('ymap', {
              center: [51.6725, 39.1880],
              zoom: 16,
              controls: []
            });
            var myPlacemark = new ymaps.Placemark([51.6725, 39.1880], {
              balloonContent: '<strong>Офис адвоката</strong><br>г. Воронеж, ул. Фридриха Энгельса, д. 48'
            }, {
              preset: 'islands#icon',
              iconColor: '#1ca493'
            });
            myMap.geoObjects.add(myPlacemark);
          }
          if (typeof ymaps !== 'undefined') {
            ymaps.ready(initYmap);
          }
        `}
      </Script>

      <Script
        src="https://api-maps.yandex.ru/2.1/?apikey=ab304b71-d999-46f9-a347-f44190c36f0b&amp;lang=ru_RU"
        strategy="afterInteractive"
      />
    </footer>
  );
}

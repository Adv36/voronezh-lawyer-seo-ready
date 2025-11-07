import Script from 'next/script';

export const metadata = {
  title: 'Контакты — воронежадвокат',
  description: 'Контактная информация адвоката по уголовным делам в Воронеже. Офис, телефон, WhatsApp, Telegram.',
};

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      
      <div className="space-y-4 mb-8 max-w-lg">
        <p><strong>Адрес:</strong> г. Воронеж, ул. Фридриха Энгельса, дом 48</p>
        <p><strong>Телефон:</strong> <a href="tel:+79081328866" className="text-blue-600 underline">+7 (908) 132-88-66</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/79081328866" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Написать</a></p>
        <p><strong>Telegram:</strong> <a href="https://t.me/+79081328866" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Написать</a></p>
        <p><strong>Email:</strong> <a href="mailto:advokat@xn--80aaebjeh9avjags2b.xn--p1ai" className="text-blue-600 underline">advokat@xn--80aaebjeh9avjags2b.xn--p1ai</a></p>
      </div>

      <div id="ymap" style={{ width: '100%', height: '400px', borderRadius: '8px' }}></div>

      <Script id="ymap-script" strategy="afterInteractive">
        {`
          function init() {
            var myMap = new ymaps.Map('ymap', {
              center: [51.6725, 39.1880],
              zoom: 16
            });
            var myPlacemark = new ymaps.Placemark([51.6725, 39.1880], {
              balloonContent: '<strong>Офис адвоката</strong><br>г. Воронеж, ул. Фридриха Энгельса, д. 48'
            }, {
              preset: 'islands#icon',
              iconColor: '#1ca493'
            });
            myMap.geoObjects.add(myPlacemark);
          }
          ymaps.ready(init);
        `}
      </Script>
      <Script
        src="https://api-maps.yandex.ru/2.1/?apikey=ab304b71-d999-46f9-a347-f44190c36f0b&lang=ru_RU"
        strategy="afterInteractive"
      />
    </div>
  );
}

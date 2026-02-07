import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Адвокат в Воронеже | Уголовные дела | Рипинский А.А.',
  description: 'Адвокат Рипинский Анатолий Анатольевич — защита по уголовным делам в Воронеже и области. Более 29 лет опыта. Звоните: +7 (908) 132-88-66.',
  keywords: 'адвокат Воронеж, уголовные дела, защита по УК РФ, адвокат по экономическим преступлениям, Рипинский',
  authors: [{ name: 'Рипинский А.А.' }],
  openGraph: {
    title: 'Адвокат в Воронеже | Уголовные дела',
    description: 'Защита по уголовным делам. Опыт с 1997 года. Воронеж и область.',
    url: 'https://xn--80aaebjeh9avjags2b.xn--p1ai',
    siteName: 'Адвокат Воронеж — Рипинский А.А.',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://xn--80aaebjeh9avjags2b.xn--p1ai',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Яндекс.Метрика */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(99245850, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
            `,
          }}
        />
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="be2d8761443ffd45.html" />
        {/* Schema.org для Google и Яндекса */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Attorney",
              "name": "Рипинский Анатолий Анатольевич",
              "url": "https://xn--80aaebjeh9avjags2b.xn--p1ai",
              "telephone": "+79081328866",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Ф. Энгельса, 48",
                "addressLocality": "Воронеж",
                "postalCode": "394000",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.6755,
                "longitude": 39.2089
              },
              "areaServed": ["Воронеж", "Воронежская область", "Россия"],
              "description": "Адвокат по уголовным делам с опытом работы с 1997 года. Защита обвиняемых и потерпевших.",
              "sameAs": [
                "https://wa.me/79081328866",
                "https://t.me/+79081328866"
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* Яндекс.Метрика noscript */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99245850"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}

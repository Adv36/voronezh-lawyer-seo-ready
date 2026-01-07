import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Адвокат по уголовным делам в Воронеже для физических и юридических лиц: участие в процессах судопроизводства - воронежадвокат',
  description: 'Официальный сайт адвоката по уголовным делам в Воронеже: широкий перечень услуг по участию в процессе уголовного судопроизводства - воронежадвокат. Звоните 📞: +7 (908) 132-88-66',
  keywords: '',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Обо мне */}
        <section className="container py-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image
              src="/uploads/ripinskiys_215_auto_jpg_5_100.jpg"
              alt="Адвокат Рипинский А.А."
              width={250}
              height={250}
              className="rounded-lg border"
            />
            <div>
              <h1 className="text-3xl font-bold mb-4">Адвокат по уголовным делам в Воронеже</h1>
              <p className="max-w-2xl">
                Профессиональная защита по статьям УК РФ. Участие на всех стадиях: досудебное производство, следственные действия, суды первой, апелляционной и кассационной инстанций.
              </p>
            </div>
          </div>
        </section>

        {/* Схема работы — кликабельная */}
        <section className="container pb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {[
              'Консультация', 'Анализ дела', 'Стратегия',
              'Досудебка', 'Суд', 'Апелляция', 'Поддержка'
            ].map((t, i) => (
              <a
                key={i}
                href="/contact"
                className="p-3 text-center border rounded hover:bg-blue-50 transition-colors"
              >
                <div className="font-bold text-lg">{i + 1}</div>
                <div className="text-sm">{t}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Услуги */}
        <section className="container pb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Услуги адвоката</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Защита по УК РФ', desc: 'Комплексная защита по уголовным делам любой сложности.' },
              { title: 'Представительство в суде', desc: 'Участие на всех стадиях процесса.' },
              { title: 'Обжалование решений', desc: 'Апелляция, кассация, надзор.' }
            ].map((s, i) => (
              <div key={i} className="p-4 border rounded hover:shadow-md">
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

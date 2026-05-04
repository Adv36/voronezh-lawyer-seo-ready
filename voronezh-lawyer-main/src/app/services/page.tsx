import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | Адвокат по уголовным делам — Воронеж',
  description: 'Защита по уголовным делам: консультации, представительство в суде, обжалование приговоров. Воронеж и область.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h1 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">Услуги</h1>
          </div>

          <div className="space-y-6 text-gray-700">
            <p>
              Я предоставляю полный спектр юридических услуг по уголовным делам:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Консультации по уголовному праву</li>
              <li>Защита подозреваемых и обвиняемых на всех стадиях процесса</li>
              <li>Представительство интересов потерпевших и свидетелей</li>
              <li>Обжалование решений суда и следствия</li>
              <li>Подача жалоб в Европейский суд по правам человека</li>
            </ul>
            <p>
              Работаю в Воронеже, Воронежской области и других регионах РФ.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

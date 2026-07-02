import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from '../../components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Обо мне | Адвокат Рипинский А.А. — Воронеж",
  description: "Адвокат Рипинский Анатолий Анатольевич — опыт работы с 1997 года. Специализация: уголовные дела, защита обвиняемых и потерпевших.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-6 h-0.5 bg-[#774936] mr-3 md:w-8 md:mr-4"></div>
            <h1 className="text-xl md:text-2xl font-bold uppercase text-[#774936]">Обо мне</h1>
          </div>
          
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}

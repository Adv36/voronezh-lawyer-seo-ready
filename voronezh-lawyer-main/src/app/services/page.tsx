import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Services from '../../components/Services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Услуги адвоката | Уголовные дела — Воронеж",
  description: "Защита по уголовным делам: консультация, защита подозреваемого, представительство потерпевшего, обжалование приговора.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6 md:mb-8">
            <div className="w-6 h-0.5 bg-[#774936] mr-3 md:w-8 md:mr-4"></div>
            <h1 className="text-xl md:text-2xl font-bold uppercase text-[#774936]">Услуги</h1>
          </div>
          
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
}

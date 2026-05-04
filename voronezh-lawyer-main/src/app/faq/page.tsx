import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Faq from '../../components/Faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы | Адвокат Рипинский А.А.",
  description: "Ответы на самые популярные вопросы о работе адвоката: стоимость, сроки, консультации, запись на приём.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

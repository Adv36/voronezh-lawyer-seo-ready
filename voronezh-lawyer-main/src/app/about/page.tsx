import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutContent from '@/components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обо мне | Адвокат Рипинский А.А. — Воронеж',
  description: 'Биография адвоката Рипинского А.А.: опыт, награды, специализация по уголовным делам с 1997 года.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}

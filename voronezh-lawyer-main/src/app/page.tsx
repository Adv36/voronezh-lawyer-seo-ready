import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Адвокат по уголовным делам в Воронеже | Рипинский А.А.",
  description: "Профессиональная защита по уголовным делам. Опыт работы с 1997 года. Участие на всех стадиях процесса. Звоните: +7 (908) 132-88-66",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}

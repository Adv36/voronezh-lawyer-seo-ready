import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UsefulLinks from '../../components/UsefulLinks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Полезные ссылки | Адвокат Рипинский А.А. — Воронеж",
  description: "Официальные сайты федеральных и воронежских судебных, правоохранительных органов и министерств.",
};

export default function UsefulPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <UsefulLinks />
      </main>
      <Footer />
    </div>
  );
}

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с адвокатом",
};

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main>Контакты</main>
      <Footer />
    </div>
  );
}

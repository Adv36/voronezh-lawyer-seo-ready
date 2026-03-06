import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutContent from '../components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Обо мне",
  description: "Биография адвоката Рипинского А.А.",
};

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main>Обо мне</main>
      <Footer />
    </div>
  );
}

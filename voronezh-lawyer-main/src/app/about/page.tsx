import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Обо мне</h1>
        <p className="text-lg text-gray-700">
          Здесь будет информация об адвокате: опыт, образование, ключевые дела.
        </p>
      </main>
      <Footer />
    </div>
  );
}

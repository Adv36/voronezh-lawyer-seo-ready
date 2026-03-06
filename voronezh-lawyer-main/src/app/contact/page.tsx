import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Контакты | Адвокат Рипинский А.А. — Воронеж",
  description: "Связаться с адвокатом: WhatsApp, Telegram, телефон +7 (908) 132-88-66. Офис в Воронеже, ул. Ф. Энгельса, 48.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-[#774936] mb-4">Контакты</h1>
        <p className="mb-6">Свяжитесь со мной — отвечу в течение 24 часов.</p>
        <div className="space-y-3">
          <div>📱 +7 (908) 132-88-66</div>
          <>💬 WhatsApp / Telegram</div>
          <div>📍 Воронеж, ул. Ф. Энгельса, 48</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

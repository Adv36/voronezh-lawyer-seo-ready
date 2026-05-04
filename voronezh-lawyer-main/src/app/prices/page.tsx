import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Цены на услуги адвоката | Рипинский А.А. — Воронеж",
  description: "Стоимость юридических услуг по уголовным делам: консультация, защита подозреваемого, представительство потерпевшего, обжалование приговора.",
};

const PriceSection = ({ title, items }: { title: string; items: { service: string; price: string }[] }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4 text-[#774936]">{title}</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 text-left border-b">Услуга</th>
            <th className="px-4 py-2 text-right border-b">Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{item.service}</td>
              <td className="px-4 py-2 border-b text-right font-medium">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function PricesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h1 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">Цены</h1>
          </div>

          <PriceSection
            title="Консультация"
            items={[
              { service: "Устная консультация (до 30 мин)", price: "Бесплатно" },
              { service: "Письменная консультация с анализом дела", price: "от 3 000 ₽" },
            ]}
          />

          <PriceSection
            title="Для подозреваемого / обвиняемого"
            items={[
              { service: "Защита на стадии доследственной проверки", price: "от 15 000 ₽" },
              { service: "Участие в следственных действиях (допрос, обыск и др.)", price: "от 10 000 ₽ за действие" },
              { service: "Полное ведение дела до окончания следствия", price: "от 50 000 ₽" },
              { service: "Представительство в суде первой инстанции", price: "от 30 000 ₽" },
              { service: "Комплексное сопровождение (следствие + суд)", price: "от 100 000 ₽" },
            ]}
          />

          <PriceSection
            title="Для потерпевшего"
            items={[
              { service: "Подача заявления о преступлении", price: "от 10 000 ₽" },
              { service: "Участие в следственных действиях", price: "от 10 000 ₽ за действие" },
              { service: "Представительство интересов в суде", price: "от 20 000 ₽" },
              { service: "Подготовка гражданского иска", price: "от 10 000 ₽" },
            ]}
          />

          <PriceSection
            title="Обжалование"
            items={[
              { service: "Анализ приговора", price: "Бесплатно" },
              { service: "Подача апелляционной жалобы", price: "от 20 000 ₽" },
              { service: "Представительство в апелляции", price: "от 20 000 ₽" },
              { service: "Кассационная и надзорная жалобы", price: "от 20 000 ₽" },
            ]}
          />

          <div className="bg-blue-50 p-4 rounded-lg mt-8">
            <p className="text-gray-800">
              <strong>Важно:</strong> Точная стоимость определяется индивидуально после изучения материалов дела. 
              Возможна оплата поэтапно.
            </p>
            <p className="mt-2">
              Звоните: <a href="tel:+79081328866" className="text-[#774936] underline">+7 (908) 132-88-66</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

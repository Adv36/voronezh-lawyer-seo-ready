import type { Metadata } from 'next';
import Link from 'next/link';

export const meta Metadata = {
  title: 'Сколько стоят услуги адвоката по уголовным делам в Воронеже: узнать стоимость на сайте воронежадвокат',
  description: 'Узнайте, сколько стоят услуги адвоката по уголовным делам в Воронеже: стоимость указана на официальном сайте воронежадвокат. Звоните 📞: +7 (908) 132-88-66',
  keywords: '',
};

export default function PricePage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Цены</h1>
      
      <div className="bg-blue-50 p-6 rounded mb-8">
        <h2 className="text-xl font-bold mb-3">Индивидуальный подход к каждому клиенту</h2>
        <p className="mb-4">
          Стоимость услуг определяется индивидуально после изучения материалов дела.
        </p>
        <a
          href="https://t.me/+79081328866"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition"
        >
          Получить консультацию
        </a>
      </div>

      {/* Таблица цен */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Услуга</th>
              <th className="border p-3">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Консультация</td>
              <td className="border p-3">Бесплатно</td>
            </tr>
            <tr>
              <td className="border p-3">Защита по УК РФ (полный цикл)</td>
              <td className="border p-3">от 50 000 ₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Сколько стоит услуга адвоката?",
      answer: "Стоимость зависит от сложности дела, стадии процесса и объёма работы. Точные расценки вы найдёте на странице «Цены».",
    },
    {
      question: "В какое время вы работаете в том числе на выезде?",
      answer: "24/7 Работаю в Воронеже, Воронежской области,выезжаю в другие регионы РФ  — в любое время.",
    },
    {
      question: "Как быстро вы отвечаете на обращения?",
      answer: "Обычно отвечаю сразу или в течение 30 минут по WhatsApp или Telegram. Последнее время в приоритете СМС-сообщения .",
    },
    {
      question: "Могу ли получить консультацию онлайн?",
      answer: "Да, можно получить консультацию по телефону, в мессенджерах или в формате видеосвязи — по согласованию.",
    },
    {
      question: "Как записаться на встречу?",
      answer: "Позвоните или напишите СМС-сообщение, в Telegram — я свяжусь с вами в течение 30 минут.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-[#774936]">Часто задаваемые вопросы</h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-5 bg-gray-50 text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

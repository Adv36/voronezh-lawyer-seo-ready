"use client";

import Image from 'next/image';
import Link from 'next/link';

const CooperationFormats = () => {
  return (
    <section id="formats" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section header */}
        <div className="flex items-center mb-10">
          <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">ФОРМАТЫ СОТРУДНИЧЕСТВА</h2>
        </div>

        <div className="mb-10">
          <p className="text-gray-700 mb-4">В зависимости от необходимости вы можете обратиться за разовой консультацией или заключить договор на абонентское обслуживание</p>
          <p className="text-gray-700 mb-4">ОТ ЧЕГО ЗАВИСИТ СТОИМОСТЬ УСЛУГ АДВОКАТА?</p>
          <p className="text-gray-700 mb-4">Итоговую стоимость услуг адвоката мы обсудим на личной встрече или по телефону после выяснения обстоятельств дела. Для различных категорий дел предусмотрены индивидуальные условия оплаты.</p>
        </div>

        {/* Format cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Format 1 */}
          <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="mr-6 mb-4 mt-6 ml-6">
              <Image
                src="https://ext.same-assets.com/615341754/694023424.svg"
                alt="Консультация 24/7"
                width={60}
                height={60}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div className="p-6 pt-0">
              <h3 className="font-bold text-lg mb-2">Консультация 24/7</h3>
              <p className="text-gray-600 text-sm mb-4">
                Полная или детальная консультация, включая письменную, по возникшим правовым вопросам в течение 15 минут
              </p>
            </div>
          </div>

          {/* Format 2 */}
          <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="mr-6 mb-4 mt-6 ml-6">
              <Image
                src="https://ext.same-assets.com/615341754/977775884.svg"
                alt="Онлайн консультация"
                width={60}
                height={60}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div className="p-6 pt-0">
              <h3 className="font-bold text-lg mb-2">Онлайн консультация</h3>
              <p className="text-gray-600 text-sm mb-4">
                Подробная видео консультация по всем правовым вопросам. Консультирую онлайн и удаленно, если вы находитесь в другом городе
              </p>
            </div>
          </div>

          {/* Format 3 */}
          <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="mr-6 mb-4 mt-6 ml-6">
              <Image
                src="https://ext.same-assets.com/615341754/1015446836.svg"
                alt="Срочный выезд"
                width={60}
                height={60}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div className="p-6 pt-0">
              <h3 className="font-bold text-lg mb-2">Срочный выезд</h3>
              <p className="text-gray-600 text-sm mb-4">
                Выезд в отделения полиции, следственные изоляторы, суд. Представление интересов в органах власти, организациях и учреждениях
              </p>
            </div>
          </div>

          {/* Format 4 */}
          <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="mr-6 mb-4 mt-6 ml-6">
              <Image
                src="https://ext.same-assets.com/615341754/1689421687.svg"
                alt="Личный адвокат"
                width={60}
                height={60}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div className="p-6 pt-0">
              <h3 className="font-bold text-lg mb-2">Личный адвокат</h3>
              <p className="text-gray-600 text-sm mb-4">
                Абонентское обслуживание физических лиц, сопровождение бизнеса. Представляю интересы на всех стадиях уголовного дела
              </p>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="text-center">
          <Link href="#consult" className="inline-block bg-[#774936] hover:bg-[#774936]/90 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Получить консультацию
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CooperationFormats;

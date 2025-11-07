"use client";

import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section header */}
        <div className="flex items-center mb-8 md:mb-10">
          <div className="w-6 md:w-8 h-0.5 bg-[#774936] mr-3 md:mr-4"></div>
          <h2 className="text-xl md:text-3xl font-bold uppercase text-[#774936]">УСЛУГИ АДВОКАТА</h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Service 1 */}
          <div className="bg-[#774936] rounded-xl p-4 md:p-6 text-white flex flex-col h-full">
            <div className="mb-3 md:mb-4">
              <Image
                src="https://ext.same-assets.com/615341754/409506952.svg"
                alt="Для физических лиц"
                width={40}
                height={40}
                priority
              />
            </div>
            <h3 className="text-[#e9b872] font-bold text-base md:text-lg mb-2">Для физических лиц (граждан)</h3>
            <ul className="text-xs md:text-sm space-y-1 md:space-y-2 mb-4 md:mb-6 flex-grow">
              <li>Защита по административным делам, делам о ДТП и угоне</li>
              <li>Защита бизнеса и его сотрудников</li>
              <li>Защита прав потерпевшего</li>
              <li>Обжалование приговора</li>
              <li>Помощь при проверке</li>
            </ul>
            <Link href="/services-individuals" className="mt-auto py-2 px-4 md:px-6 bg-white/20 hover:bg-white/30 rounded-full text-center text-xs md:text-sm font-medium">
              Подробнее
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-[#774936] rounded-xl p-4 md:p-6 text-white flex flex-col h-full">
            <div className="mb-3 md:mb-4">
              <Image
                src="https://ext.same-assets.com/615341754/3532288941.svg"
                alt="Для юридических лиц"
                width={40}
                height={40}
                priority
              />
            </div>
            <h3 className="text-[#e9b872] font-bold text-base md:text-lg mb-2">Для юридических лиц (защита бизнеса)</h3>
            <ul className="text-xs md:text-sm space-y-1 md:space-y-2 mb-4 md:mb-6 flex-grow">
              <li>Помощь юридическим лицам при столкновении с правоохранительными органами</li>
              <li>Защита интересов при возбуждении уголовных дел по экономическим статьям</li>
            </ul>
            <Link href="/services-business" className="mt-auto py-2 px-4 md:px-6 bg-white/20 hover:bg-white/30 rounded-full text-center text-xs md:text-sm font-medium">
              Подробнее
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-[#774936] rounded-xl p-4 md:p-6 text-white flex flex-col h-full">
            <div className="mb-3 md:mb-4">
              <Image
                src="https://ext.same-assets.com/615341754/2328365934.svg"
                alt="Абонентское обслуживание"
                width={40}
                height={40}
                priority
              />
            </div>
            <h3 className="text-[#e9b872] font-bold text-base md:text-lg mb-2">Абонентское обслуживание</h3>
            <ul className="text-xs md:text-sm space-y-1 md:space-y-2 mb-4 md:mb-6 flex-grow">
              <li>Личный, семейный адвокат</li>
              <li>Оперативная квалифицированная помощь при возникновении проблем юридического характера</li>
              <li>Постоянная связь по любому вопросу, 24 часа в сутки для граждан и юридических лиц</li>
            </ul>
            <Link href="/services-subscription" className="mt-auto py-2 px-4 md:px-6 bg-white/20 hover:bg-white/30 rounded-full text-center text-xs md:text-sm font-medium">
              Подробнее
            </Link>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="mt-10 md:mt-16 bg-[#e8e3e0] rounded-xl p-5 md:p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#774936]">ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ<br />АДВОКАТА ПРЯМО СЕЙЧАС!</h3>
            <p className="text-xl md:text-2xl font-bold text-[#c68b59] mb-4 md:mb-6">+7 (908) 132-88-66</p>
            <div className="flex justify-center space-x-3 md:space-x-4">
              <Link href="tel:+79081328866">
                <Image
                  src="https://ext.same-assets.com/615341754/136602673.svg"
                  alt="Phone"
                  width={36}
                  height={36}
                  className="bg-white p-2 rounded-full hover:bg-gray-100"
                  priority
                />
              </Link>
              <Link href="mailto:ripinsky@list.ru">
                <Image
                  src="https://ext.same-assets.com/615341754/3844288638.svg"
                  alt="Email"
                  width={36}
                  height={36}
                  className="bg-white p-2 rounded-full hover:bg-gray-100"
                  priority
                />
              </Link>
              <Link href="https://wa.me/79081328866">
                <Image
                  src="https://ext.same-assets.com/615341754/10197464.svg"
                  alt="WhatsApp"
                  width={36}
                  height={36}
                  className="bg-white p-2 rounded-full hover:bg-gray-100"
                  priority
                />
              </Link>
              <Link href="https://t.me/+79081328866">
                <Image
                  src="https://ext.same-assets.com/615341754/1653797195.svg"
                  alt="Telegram"
                  width={36}
                  height={36}
                  className="bg-white p-2 rounded-full hover:bg-gray-100"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

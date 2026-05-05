"use client";

import Image from 'next/image';

const WhyTrustMe = () => {
  return (
    <section id="why-trust" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section header */}
        <div className="flex items-center mb-10">
          <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">ПОЧЕМУ СТОИТ ДОВЕРИТЬ ВАШУ ПРОБЛЕМУ МНЕ</h2>
        </div>

        {/* Trust factors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Factor 1 */}
          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/615341754/2856148254.svg"
                alt="Профессионализм"
                width={48}
                height={48}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Профессионализм</h3>
              <p className="text-gray-600">Более 28 лет практической деятельности</p>
            </div>
          </div>

          {/* Factor 2 */}
          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/615341754/4001863246.svg"
                alt="Конфиденциальность"
                width={48}
                height={48}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Конфиденциальность</h3>
              <p className="text-gray-600">Гарантирую сохранение в тайне обращения к адвокату и полученной сведений</p>
            </div>
          </div>

          {/* Factor 3 */}
          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/615341754/2928425559.svg"
                alt="Квалифицированность"
                width={48}
                height={48}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Квалифицированность</h3>
              <p className="text-gray-600">Обширный опыт в государственном и частном правовом секторе</p>
            </div>
          </div>

          {/* Factor 4 */}
          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/615341754/977775884.svg"
                alt="Оперативность"
                width={48}
                height={48}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Оперативность</h3>
              <p className="text-gray-600">Быстрое реагирование для оказания правовой помощи</p>
            </div>
          </div>

          {/* Factor 5 */}
          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/615341754/1689421687.svg"
                alt="Надежность"
                width={48}
                height={48}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Надежность</h3>
              <p className="text-gray-600">Ответственный подход к делу, честность и порядочность</p>
            </div>
          </div>

          {/* Factor 6 */}
          <div className="flex space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/615341754/2480798524.svg"
                alt="Прозрачность"
                width={48}
                height={48}
                className="bg-[#774936]/10 p-3 rounded-full"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Прозрачность</h3>
              <p className="text-gray-600">Согласование совместных действий и этапов в процессуальной работе</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustMe;

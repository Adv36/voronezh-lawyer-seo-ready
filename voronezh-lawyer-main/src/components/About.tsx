"use client";

import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center mb-8 md:mb-10">
          <div className="w-6 h-0.5 bg-[#774936] mr-3 md:w-8 md:mr-4"></div>
          <h2 className="text-xl md:text-2xl font-bold uppercase text-[#774936]">ОБО МНЕ</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left column - text */}
          <div className="md:col-span-2">
            <h3 className="font-medium text-lg md:text-xl mb-4">Рипинский Анатолий Анатольевич</h3>

            <p className="text-gray-700 mb-4">
              Адвокат Адвокатской палаты Воронежской области. Регистрационный номер в реестре адвокатов 36/988, имею действующий статус.
            </p>

            <p className="text-gray-700 mb-4">
              Специализируюсь на уголовных делах. В 1996 году окончил Воронежский государственный университет по специальности "Юриспруденция". В этом же году стал стажером адвоката. С 1997 года работаю адвокатом.
            </p>

            <p className="text-gray-700 mb-4">
              Я занимаюсь защитой интересов доверителей по уголовным делам различной сложности, представляю интересы как обвиняемых, так и потерпевших.
            </p>

            <p className="text-gray-700 mb-4">
              Мой офис находится по адресу: г. Воронеж, ул. Ф. Энгельса, 48. Работаю в Воронеже, Воронежской области и других субъектах РФ.
            </p>

            <p className="text-gray-700 mb-4 font-medium">
              Деловой подход, профессионализм, оперативность, надежность и честность!
            </p>

            <p className="text-gray-700 mb-3 font-medium">Награды:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Почетная грамота Федеральной палаты адвокатов России, 05.07.2007</li>
              <li>Почетная грамота Адвокатской палаты Воронежской области, 13.09.2012</li>
              <li>Благодарность Федеральной палаты адвокатов России, 20.06.2016</li>
              <li>Медаль II степени "За заслуги в защите прав и свобод граждан" (ФПА), 15.05.2018</li>
              <li>Медаль 1 степени "За заслуги в защите прав и свобод граждан", 27.05.2020</li>
              <li>Благодарственное письмо АПВО, 14.10.2021</li>
              <li>Медаль "За профессионализм", 23.10.2025</li>
            </ul>

            <p className="text-lg md:text-xl font-bold text-[#c68b59] mt-4">
              Звоните! Я гарантирую, что сделаю всё, чтобы помочь Вам!!!
            </p>
          </div>

          {/* Right column - image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-full max-w-xs h-80 md:h-[400px]">
              <Image
                src="/uploads/ripinskiys_215_auto_jpg_5_100.jpg"
                alt="Рипинский Анатолий Анатольевич"
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";

import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section header */}
        <div className="flex items-center mb-10">
          <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">ОБО МНЕ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - text */}
          <div className="md:col-span-2">
            <h3 className="font-medium text-xl mb-4">Рипинский Анатолий Анатольевич</h3>

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

            <p className="text-gray-700 mb-4 font-medium">
              Награды:
            </p>
             <p className="text-gray-700 mb-4 font-medium">
              Почетная грамота Федеральной палаты адвокатов России, 05.07.2007
            </p>
             <p className="text-gray-700 mb-4 font-medium">
              Почетная грамота Адвокатской палаты Воронежской области, 13.09.2012
            </p>
            <p className="text-gray-700 mb-4 font-medium">
              Благодарность Федеральной палаты адвокатов России, 20.06.2016
            </p>
            <p className="text-gray-700 mb-4 font-medium">
             Медаль II степени "За заслуги в защите прав и свобод граждан" (ФПА), 15.05.2018
            </p>
            <p className="text-gray-700 mb-4 font-medium">
             Медаль 1 степени "За заслуги в защите прав и свобод граждан", 27.05.2020
            </p>
            <p className="text-gray-700 mb-4 font-medium">
            Благодарственное письмо АПВО, 14.10.2021
            </p>
             <p className="text-gray-700 mb-4 font-medium">
            Почетная грамота ФПА РФ, 18.04.2022
            </p>
            <p className="text-xl font-bold text-[#c68b59]">
              Звоните! Я гарантирую, что сделаю всё, чтобы помочь Вам!!!
            </p>
          </div>

          {/* Right column - image */}
          <div className="md:col-span-1">
            <div className="relative w-full h-[400px] md:h-full">
              <Image
                src="https://github.com/Adv36/voronezh-lawyer/blob/main/public/uploads/ripinskiys_215_auto_jpg_5_100.jpg?raw=true"
                alt="Рипинский Анатолий Анатольевич"
                fill
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

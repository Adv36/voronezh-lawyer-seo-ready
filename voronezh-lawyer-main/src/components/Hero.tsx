"use client";

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[550px] md:h-[600px] text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 bg-[#774936]">
        {/* We'll create a subtle pattern or texture for the background */}
        <div className="absolute inset-0 opacity-20 bg-repeat"
             style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c4zIgsAAAAIXRSTlP9zMXO5oMKbHRNQOPbsKxAPi0tJR0U5eHVrI+IVks7MRHwGnpnAAAA3klEQVRIx+3W2a6DIBSG0X8QkEmgw7H7f9AGLcdWUBM3bZP90Am5WHvk4hSQs1TtThTzKWRQXZJyiL7XcX/Bdbxel/RcCJ/IDhw0P6jDl9Z8KFHIIS2PgRJB6JPSBkhzBEIXxMQQrBEIfRAXjSBFIPRDgkYQzsVfhRgELYIwDKGD5QIIwzLFOcRJCMNyasCGCYRhLb/W4/k8hiFs6FNyH5swrIu2PBsjDHvCGgx1guHIbIIwRPhcMoUwBDiLnQnCsK91Jgij9GcUwvBYuGWdJYIwzDsNETncgd9piqwQRWT/AZRGHQUwQQGJAAAAAElFTkSuQmCC")' }}></div>
        <div className="absolute inset-0 bg-[#774936]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Воронеж<br /> адвокат по<br /> уголовным делам</h1>
        <h2 className="text-xl md:text-3xl mb-6 md:mb-8">— Рипинский Анатолий Анатольевич</h2>

        <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
          <div className="py-1 px-4 bg-[#c68b59] rounded-full text-white text-sm inline-flex items-center justify-center">
            <span>Защита граждан</span>
          </div>
          <div className="py-1 px-4 bg-[#c68b59] rounded-full text-white text-sm inline-flex items-center justify-center">
            <span>Защита бизнеса</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
          <div className="flex flex-col items-center bg-black/30 p-3 md:p-4 rounded-lg">
            <Image
              src="https://ext.same-assets.com/615341754/413682764.svg"
          alt="Ответ в течение 30 минут, пишите в ВатсАпп"
          width={30}
          height={30}
          className="mb-2"
          priority
        />
        <h3 className="text-center text-xs md:text-sm font-medium">Отвечу в течение</h3>
            <p className="text-center text-xs md:text-sm">30 минут пишите в ВатсАпп</p>
          </div>

          <div className="flex flex-col items-center bg-black/30 p-3 md:p-4 rounded-lg">
            <Image
              src="https://ext.same-assets.com/615341754/685039987.svg"
              alt="На связи 24 часа"
              width={30}
              height={30}
              className="mb-2"
              priority
            />
            <h3 className="text-center text-xs md:text-sm font-medium">На связи 24 часа</h3>
            <p className="text-center text-xs md:text-sm">без выходных</p>
          </div>

          <div className="flex flex-col items-center bg-black/30 p-3 md:p-4 rounded-lg">
            <Image
              src="https://ext.same-assets.com/615341754/2480798524.svg"
              alt="Первая консультация"
              width={30}
              height={30}
              className="mb-2"
              priority
            />
            <h3 className="text-center text-xs md:text-sm font-medium">Первая консультация</h3>
            <p className="text-center text-xs md:text-sm">- бесплатно</p>
          </div>
        </div>

        <Link href="#consult" className="inline-flex items-center justify-center bg-[#c68b59] hover:bg-[#c68b59]/90 text-white font-medium py-3 px-6 rounded-full w-full sm:w-auto">
          Получить консультацию
        </Link>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="#formats" className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L12 18L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 6L12 11L17 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

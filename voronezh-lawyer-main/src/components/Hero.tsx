import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#774936] to-[#c68b59] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Адвокат в Воронеже
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Защита по уголовным делам. Профессионально, надёжно, конфиденциально.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="https://wa.me/79081328866"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            WhatsApp
          </Link>
          <Link
            href="https://t.me/+79081328866"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Telegram
          </Link>
          <Link
            href="/contact"
            className="bg-white text-[#774936] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition"
          >
            Написать
          </Link>
        </div>
      </div>
    </section>
  );
}

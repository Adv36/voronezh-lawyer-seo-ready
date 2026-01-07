import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            Адвокат в Воронеже
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/about" className="hover:text-blue-600">О нас</Link></li>
              <li><Link href="/services" className="hover:text-blue-600">Услуги</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Контакты</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'УСЛУГИ', href: '/services' },
    { name: 'ЦЕНЫ', href: '/prices' },
    { name: 'ПРАКТИКА', href: '/practice' },
    { name: 'ПОЛЕЗНОЕ', href: '/helpful' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип / Название */}
        <Link href="/" className="text-xl font-bold text-[#774936] hover:text-[#c68b59]">
          Адвокат Воронеж
        </Link>

        {/* Навигация */}
        <nav>
          <ul className="flex space-x-6 md:space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`font-medium ${
                    pathname === item.href
                      ? 'text-[#c68b59]'
                      : 'text-gray-700 hover:text-[#774936]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

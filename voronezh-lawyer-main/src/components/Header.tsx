"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white py-3 shadow-sm relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/1334220929/2523300167.png"
              alt="Адвокат Рипинский"
              width={40}
              height={40}
              className="mr-2"
              priority
            />
            <div>
              <h1 className="text-xs uppercase font-bold text-[#774936]">
                ВОРОНЕЖ АДВОКАТ ПО УГОЛОВНЫМ ДЕЛАМ
              </h1>
              <p className="text-xs text-gray-600">
                Рипинский Анатолий Анатольевич
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/services" className="text-sm uppercase font-medium text-[#774936] hover:text-[#c68b59] transition-colors">
            УСЛУГИ
          </Link>
          <Link href="/price" className="text-sm uppercase font-medium text-[#774936] hover:text-[#c68b59] transition-colors">
            ЦЕНЫ
          </Link>
          <Link href="/practice" className="text-sm uppercase font-medium text-[#774936] hover:text-[#c68b59] transition-colors">
            ПРАКТИКА
          </Link>
          <Link href="/helpful" className="text-sm uppercase font-medium text-[#774936] hover:text-[#c68b59] transition-colors">
            ПОЛЕЗНОЕ
          </Link>
        </nav>

        <button
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Меню"
        >
          <svg
            className="w-6 h-6 text-[#774936]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="flex flex-col items-end md:block">
          <div className="flex items-center space-x-2">
            <a href="mailto:advokat@xn--80aaebjeh9avjags2b.xn--p1ai" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://ext.same-assets.com/615341754/3844288638.svg"
                alt="Email"
                width={20}
                height={20}
                priority
              />
            </a>
            <a href="tel:+79081328866">
              <Image
                src="https://ext.same-assets.com/615341754/136602673.svg"
                alt="Phone"
                width={20}
                height={20}
                priority
              />
            </a>
            <a href="https://wa.me/79081328866" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://ext.same-assets.com/615341754/10197464.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                priority
              />
            </a>
            <a href="https://t.me/+79081328866" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://ext.same-assets.com/615341754/1653797195.svg"
                alt="Telegram"
                width={20}
                height={20}
                priority
              />
            </a>
          </div>
          <a href="tel:+79081328866" className="font-bold text-sm mt-1">
            +7 (908) 132-88-66 <span className="text-xs font-normal">(24 часа)</span>
          </a>
          <span className="text-xs text-gray-600">
            г. Воронеж, ул. Ф. Энгельса, 48
          </span>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 py-4 px-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="text-sm uppercase font-medium text-[#774936] hover:text-[#c68b59] transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              УСЛУГИ
            </Link>
            <Link
              href="/price"
              className="text-sm uppercase font-medium text-[#774936] hover:text-[#c68b59] transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              ЦЕНЫ
            </Link>
            <Link
              href="/practice"
              className="text-sm uppercase font-medium text-[#774936] hover:text-[#c68b59] transition-colors py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              ПРАКТИКА
            </Link>
            <Link
              href="/helpful"
              className="text-sm uppercase font-medium text-[#774936] hover:text-[#c68b59] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              ПОЛЕЗНОЕ
            </Link>
          </nav>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <a href="tel:+79081328866" className="flex items-center space-x-2 text-[#774936] hover:text-[#c68b59] transition-colors py-2">
              <Image
                src="https://ext.same-assets.com/615341754/136602673.svg"
                alt="Phone"
                width={20}
                height={20}
                priority
              />
              <span className="font-medium text-sm">+7 (908) 132-88-66</span>
            </a>
            <a href="https://wa.me/79081328866" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#774936] hover:text-[#c68b59] transition-colors py-2">
              <Image
                src="https://ext.same-assets.com/615341754/10197464.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                priority
              />
              <span className="font-medium text-sm">WhatsApp</span>
            </a>
            <a href="https://t.me/+79081328866" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#774936] hover:text-[#c68b59] transition-colors py-2">
              <Image
                src="https://ext.same-assets.com/615341754/1653797195.svg"
                alt="Telegram"
                width={20}
                height={20}
                priority
              />
              <span className="font-medium text-sm">Telegram</span>
            </a>
            <a href="mailto:advokat@xn--80aaebjeh9avjags2b.xn--p1ai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#774936] hover:text-[#c68b59] transition-colors py-2">
              <Image
                src="https://ext.same-assets.com/615341754/3844288638.svg"
                alt="Email"
                width={20}
                height={20}
                priority
              />
              <span className="font-medium text-sm">advokat@xn--80aaebjeh9avjags2b.xn--p1ai</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

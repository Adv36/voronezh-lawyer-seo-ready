'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [showButton, setShowButton] = useState(false);

  // Show the button after scroll and only on mobile devices
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Check if it's a mobile device (rough estimate based on width)
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <body className="relative">
      {children}

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/79081328866"
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] rounded-full p-3 shadow-lg whatsapp-pulse
                   transition-all duration-300 flex items-center ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 md:hidden'}`}
        aria-label="Связаться в WhatsApp"
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Image
            src="https://ext.same-assets.com/615341754/10197464.svg"
            alt="WhatsApp"
            width={30}
            height={30}
            className="invert"
            priority
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
        </div>
        <span className="ml-2 text-white font-medium hidden sm:inline">Написать в WhatsApp</span>
      </a>
    </body>
  );
}

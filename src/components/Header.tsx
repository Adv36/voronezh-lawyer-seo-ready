export default function Header() {
  return (
    <header className="bg-white py-4 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#774936]">Адвокат в Воронеже</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-[#774936] hover:text-gray-700">О нас</a></li>
            <li><a href="/services" className="text-[#774936] hover:text-gray-700">Услуги</a></li>
            <li><a href="/contact" className="text-[#774936] hover:text-gray-700">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
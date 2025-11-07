import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function HostingInfoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <div className="bg-[#774936] py-16 text-white">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ЗАГРУЗКА И ХОСТИНГ САЙТА</h1>
          <p className="text-lg">Инструкции по загрузке кода сайта и рекомендации по хостингу</p>
        </div>
      </div>

      {/* Code Download Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#774936] mb-8">ЗАГРУЗКА КОДА САЙТА</h2>

          <div className="bg-gray-50 p-6 md:p-8 rounded-lg mb-12">
            <h3 className="text-xl font-bold text-[#774936] mb-4">Шаги для загрузки исходного кода:</h3>

            <ol className="list-decimal list-inside space-y-6 text-gray-700">
              <li className="pl-2">
                <p className="font-bold inline-block mb-2">Создайте новый репозиторий GitHub</p>
                <div className="pl-6 mt-2">
                  <p className="mb-2">Создайте новый пустой репозиторий на GitHub, который будет использоваться для хранения кода сайта.</p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-2">
                    <p className="text-sm font-mono">1. Перейдите на <a href="https://github.com/new" className="text-[#c68b59]" target="_blank" rel="noopener noreferrer">github.com/new</a></p>
                    <p className="text-sm font-mono">2. Введите название репозитория (например, "voronezh-lawyer")</p>
                    <p className="text-sm font-mono">3. Выберите "Public" или "Private" в зависимости от ваших предпочтений</p>
                    <p className="text-sm font-mono">4. Нажмите "Create repository"</p>
                  </div>
                </div>
              </li>

              <li className="pl-2">
                <p className="font-bold inline-block mb-2">Скачайте код проекта</p>
                <div className="pl-6 mt-2">
                  <p className="mb-2">Используйте один из следующих методов, чтобы получить код сайта:</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">Вариант 1: Через интерфейс Same.new</p>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm font-mono">1. Нажмите на опцию "Download Code" в интерфейсе Same.new</p>
                        <p className="text-sm font-mono">2. Выберите формат (ZIP) и скачайте архив с кодом</p>
                        <p className="text-sm font-mono">3. Распакуйте архив на вашем компьютере</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium mb-1">Вариант 2: Через Git Clone (если доступно)</p>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm font-mono">git clone https://github.com/your-username/voronezh-lawyer.git</p>
                        <p className="text-sm font-mono">cd voronezh-lawyer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="pl-2">
                <p className="font-bold inline-block mb-2">Отправьте код в ваш репозиторий</p>
                <div className="pl-6 mt-2">
                  <p className="mb-2">После того как вы получили код, отправьте его в ваш GitHub репозиторий:</p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm font-mono">cd path/to/downloaded/code</p>
                    <p className="text-sm font-mono">git init</p>
                    <p className="text-sm font-mono">git add .</p>
                    <p className="text-sm font-mono">git commit -m "Initial commit"</p>
                    <p className="text-sm font-mono">git branch -M main</p>
                    <p className="text-sm font-mono">git remote add origin https://github.com/your-username/voronezh-lawyer.git</p>
                    <p className="text-sm font-mono">git push -u origin main</p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Hosting Options */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex items-center mb-8">
            <div className="w-8 h-0.5 bg-[#774936] mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#774936]">ВАРИАНТЫ ХОСТИНГА</h2>
          </div>

          <div className="space-y-8">
            {/* Netlify */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src="https://ext.same-assets.com/1334220929/3347127158?"
                    alt="Netlify"
                    width={60}
                    height={60}
                    className="rounded"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#774936] mb-2">Netlify</h3>
                  <p className="text-gray-700 mb-4">
                    Netlify — идеальное решение для хостинга Next.js приложений с простым процессом развертывания.
                    Предлагает бесплатный тариф с SSL-сертификатом и интеграцией с Git.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-[#774936]">Преимущества:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Простая интеграция с GitHub</li>
                      <li>Автоматическое развертывание при изменении кода</li>
                      <li>Бесплатный SSL-сертификат</li>
                      <li>Поддержка пользовательских доменов</li>
                      <li>Встроенная поддержка Next.js</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium text-[#774936] mb-2">Инструкции по развертыванию:</p>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Создайте аккаунт на <a href="https://netlify.com" className="text-[#c68b59]" target="_blank" rel="noopener noreferrer">netlify.com</a></li>
                      <li>Нажмите "New site from Git"</li>
                      <li>Выберите GitHub и авторизуйтесь</li>
                      <li>Выберите ваш репозиторий</li>
                      <li>Сохраните настройки по умолчанию для Next.js (сборка уже настроена в файле netlify.toml)</li>
                      <li>Нажмите "Deploy site"</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Vercel */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src="https://ext.same-assets.com/1334220929/107608747??"
                    alt="Vercel"
                    width={60}
                    height={60}
                    className="rounded"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#774936] mb-2">Vercel</h3>
                  <p className="text-gray-700 mb-4">
                    Vercel — платформа от создателей Next.js, обеспечивающая наилучшую поддержку и интеграцию с этим фреймворком.
                    Предлагает бесплатный тариф с широкими возможностями.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-[#774936]">Преимущества:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Официальная платформа для Next.js</li>
                      <li>Оптимизированное развертывание и производительность</li>
                      <li>Интегрированная аналитика и мониторинг</li>
                      <li>Предварительный просмотр для каждой ветки</li>
                      <li>Глобальная CDN с автоматическим масштабированием</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium text-[#774936] mb-2">Инструкции по развертыванию:</p>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Создайте аккаунт на <a href="https://vercel.com" className="text-[#c68b59]" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
                      <li>Нажмите "New Project"</li>
                      <li>Импортируйте ваш репозиторий из GitHub</li>
                      <li>Vercel автоматически определит настройки Next.js</li>
                      <li>Нажмите "Deploy"</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Российский хостинг */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src="https://ext.same-assets.com/1334220929/3289923909?"
                    alt="Российский хостинг"
                    width={60}
                    height={60}
                    className="rounded"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#774936] mb-2">Российский хостинг (для кириллического домена)</h3>
                  <p className="text-gray-700 mb-4">
                    Для кириллического домена "воронежадвокат.рф" рекомендуется использовать российский хостинг-провайдер,
                    который обеспечит лучшую поддержку кириллических доменов и соответствие требованиям российского законодательства.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-[#774936]">Рекомендуемые провайдеры:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li><a href="https://timeweb.com/ru/" className="text-[#c68b59]" target="_blank" rel="noopener noreferrer">TimeWeb</a> - поддержка Node.js и кириллических доменов</li>
                      <li><a href="https://beget.com/ru" className="text-[#c68b59]" target="_blank" rel="noopener noreferrer">Beget</a> - удобный интерфейс и хорошая техническая поддержка</li>
                      <li><a href="https://reg.ru" className="text-[#c68b59]" target="_blank" rel="noopener noreferrer">Reg.ru</a> - регистрация доменов и хостинг в одном месте</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium text-[#774936] mb-2">Важные моменты:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Требуется поддержка Node.js версии 18+ или возможность запуска Docker</li>
                      <li>Проверьте наличие SSL-сертификата для безопасного соединения</li>
                      <li>Убедитесь в поддержке пуникодовых доменов (.рф)</li>
                      <li>Рекомендуется выделенный IP для лучшей производительности</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#774936] mb-6">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h2>
            <p className="text-lg text-gray-700 mb-6">
              Если у вас возникли вопросы по установке, настройке или управлению вашим сайтом, вы можете обратиться
              за технической поддержкой к разработчикам через систему Same.new или к вашему хостинг-провайдеру.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Сайт разработан на современном стеке технологий (Next.js, React, Tailwind CSS), что обеспечивает
              высокую производительность, безопасность и удобство обслуживания.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

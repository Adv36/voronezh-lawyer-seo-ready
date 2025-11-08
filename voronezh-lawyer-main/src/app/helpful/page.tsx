export const metadata = {
  title: 'Полезные ссылки на юридические источники на сайте воронежадвокат',
  description: 'Перечень полезных юридических источников на сайте воронежадвокат. Звоните 📞: +7 (908) 132-88-66',
  keywords: '',
};

const links = [
  { title: 'Конституция РФ', url: 'https://www.consultant.ru/document/cons_doc_LAW_28399/' },
  { title: 'Уголовный кодекс РФ', url: 'https://www.consultant.ru/document/cons_doc_LAW_10699/' },
  { title: 'УПК РФ', url: 'https://www.consultant.ru/document/cons_doc_LAW_34481/' },
  { title: 'Постановления Пленума ВС РФ', url: 'https://www.supcourt.ru/documents/plenum/' },
];

export default function HelpfulPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Полезное</h1>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              target="_blank"
              rel="nofollow noopener"
              className="text-blue-600 hover:underline"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

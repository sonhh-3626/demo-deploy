'use client';

import { extractTocFromMarkdown, TocItem } from '@/utils/extractTocFromMarkdown';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  markdown: string;
}

export default function TableOfContents({
  markdown
}: TableOfContentsProps) {
  const t = useTranslations("TableOfContents");
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    setToc(extractTocFromMarkdown(markdown));
  }, [markdown]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-bold text-gray-900 mb-4">{t("title")}</h3>

      {toc.length === 0 ? (
        <p className="text-gray-500 text-sm">{t("empty")}</p>
      ) : (
        <nav className="space-y-2">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              className={`block transition hover:text-blue-600 ${
                item.level === 1
                  ? "text-gray-900 font-semibold"
                  : item.level === 2
                  ? "pl-4 text-gray-700"
                  : "pl-8 text-gray-600"
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

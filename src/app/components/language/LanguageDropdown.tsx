'use client';

import { IoIosArrowDown } from 'react-icons/io';

interface LanguageDropdownProps {
  isOpen: boolean;
  locale: string;
  languages: { code: string; name: string }[];
  toggleOpen: () => void;
  changeLocale: (code: string) => void;
}

export default function LanguageDropdown({
  isOpen,
  locale,
  languages,
  toggleOpen,
  changeLocale,
}: LanguageDropdownProps) {
  const currentLang = languages.find((lang) => lang.code === locale);

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="font-bold rounded-md text-sm cursor-pointer flex items-center gap-2"
      >
        <span>{currentLang?.name}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <IoIosArrowDown />
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg z-10 overflow-hidden">
          <ul>
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => changeLocale(lang.code)}
                className={`p-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  locale === lang.code ? "font-bold bg-gray-200" : ""
                }`}
              >
                {lang.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

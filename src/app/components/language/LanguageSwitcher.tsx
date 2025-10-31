'use client';

import { useRef, useState, useEffect } from 'react';
import { useLanguage } from './useLanguage';
import LanguageDropdown from './LanguageDropdown';

export default function LanguageSwitcher() {
  const { locale, changeLocale, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <LanguageDropdown
        isOpen={isOpen}
        locale={locale}
        languages={languages}
        toggleOpen={toggleOpen}
        changeLocale={changeLocale}
      />
    </div>
  );
}

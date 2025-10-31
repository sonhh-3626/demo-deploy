'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LANGUAGE_I18N } from '@/app/constants';

export function useLanguage() {
  const router = useRouter();
  const [locale, setLocale] = useState<string>('');

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('APP_LOCALE='))
      ?.split('=')[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      const defaultLocale = LANGUAGE_I18N.some((lang) => lang.code === browserLocale)
        ? browserLocale
        : 'en';
      setLocale(defaultLocale);
      document.cookie = `APP_LOCALE=${defaultLocale}; path=/`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `APP_LOCALE=${newLocale}; path=/`;
    router.refresh();
  };

  return { locale, changeLocale, languages: LANGUAGE_I18N };
}

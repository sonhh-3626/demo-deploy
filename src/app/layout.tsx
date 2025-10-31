import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';

import './globals.css';
import { DEFAULT_TITLE } from './constants';
import Providers from './components/auth/Provider';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const title = (messages.TabTitle?.home as string) ?? DEFAULT_TITLE;

  return {
    title,
  };
}

interface RootLayoutProp {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProp) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-gray-50">
        <NextIntlClientProvider messages={messages}>
            <Providers>
              {children}
            </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

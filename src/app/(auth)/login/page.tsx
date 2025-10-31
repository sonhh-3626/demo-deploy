'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations("Login");
  const params = useSearchParams();
  const callbackUrl = params.get('callbackUrl') || '/';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">{t("loginToContinue")}</h1>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {t("loginWithGoogle")}
      </button>
    </div>
  );
}

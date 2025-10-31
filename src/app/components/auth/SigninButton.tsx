'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function SignInButton() {
  const t = useTranslations("Login");
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <button
        onClick={() => signOut()}
      className="ml-5 flex items-center gap-2 bg-red-300 text-white px-4 py-2 rounded-lg hover:bg-red-400"
      >
        {t("logoutBtn")}
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="ml-5 flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
    >
      <FaGoogle />
      <span>{t("loginBtn")}</span>
    </button>
  );
}

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../language/LanguageSwitcher';
import SignInButton from '../auth/SigninButton';

export default function Header() {
  const t = useTranslations('Header');
  return (
    <header className="fixed flex justify-between items-center top-0 left-0 right-0 h-16 px-10 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-gray-800">{t("title")}</h1>
      </div>
      <div className="flex items-center">
        <LanguageSwitcher />
        <SignInButton />
      </div>
    </header>
  );
}

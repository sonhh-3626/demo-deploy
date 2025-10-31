import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Greeting');

  return (
    <div>
      {t('text')}
    </div>
  )
}

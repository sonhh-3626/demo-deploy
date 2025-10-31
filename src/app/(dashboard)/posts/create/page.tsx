import PostCreateForm from '@/app/components/form/PostForm';
import { useTranslations } from 'next-intl';

export default function PostCreatePage() {
  const t = useTranslations('Form');
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{t('Actions.submit')}</h1>
      <PostCreateForm />
    </div>
  );
}

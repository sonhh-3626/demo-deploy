import { useTranslations } from 'next-intl';

interface CategoryBadgeProps {
  title: string;
}

export default function CategoryBadge({
  title
}: CategoryBadgeProps) {
  const t = useTranslations('CategoryBadge');
  return (
    <div className="mb-4">
      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
        {title}
      </span>
    </div>
  )
}

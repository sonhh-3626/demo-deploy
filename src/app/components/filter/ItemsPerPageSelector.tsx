import { useTranslations } from 'next-intl';
import { ITEMS_PER_PAGE_OPTIONS } from '@/constants/pagination';

interface ItemsPerPageSelectorProps {
  postsPerPage: number;
  setPostsPerPage: (num: number) => void;
}

export default function ItemsPerPageSelector({
  postsPerPage,
  setPostsPerPage = () => { },
}: ItemsPerPageSelectorProps) {
  const t = useTranslations("ItemsPerPageSelector");
  const itemsPerPage = ITEMS_PER_PAGE_OPTIONS;

  return (
    <div className="w-full sm:w-auto flex items-center gap-2">
      <span className="text-sm text-gray-600">{t("postsPerPage")}:</span>
      <select
        value={postsPerPage}
        onChange={(e) => setPostsPerPage(Number(e.target.value))}
        className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
      >
        {itemsPerPage.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>

  )
}

import { useTranslations } from 'next-intl';

interface SortSelectorProps {
  sortBy: string;
  setSortBy: (key: string) => void;
}

export default function SortSelector({
  sortBy,
  setSortBy = () => {},
}: SortSelectorProps) {
  const t = useTranslations("SortSelector");
  return (
    <div className="w-full sm:w-auto">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
      >
        <option value="newest">{t("newest")}</option>
        <option value="views">{t("mostViews")}</option>
        <option value="likes">{t("mostPopular")}</option>
      </select>
    </div>

  )
}

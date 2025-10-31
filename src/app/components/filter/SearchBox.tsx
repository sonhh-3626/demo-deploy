import { useTranslations } from 'next-intl';

interface SearchBoxProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBox({
  searchQuery,
  setSearchQuery = () => {},
}: SearchBoxProps) {
  const t = useTranslations("SearchBox");
  return (
    <div className="sm:w-auto">
      <input
        type="text"
        placeholder={t("searchPlaceholder")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
      />
    </div>

  )
}

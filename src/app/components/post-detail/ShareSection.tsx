import { useTranslations } from 'next-intl';
import { FaShareAlt } from "react-icons/fa";

export default function ShareSection() {
  const t = useTranslations("ShareSection");
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("title")}</h3>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <FaShareAlt className="w-4 h-4" />
          <span>Facebook</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
          <FaShareAlt className="w-4 h-4" />
          <span>Whatsapp</span>
        </button>
      </div>
    </div>

  )
}

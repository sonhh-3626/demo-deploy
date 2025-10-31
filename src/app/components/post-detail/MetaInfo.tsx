import { useTranslations } from 'next-intl';
import { formatDate } from "@/utils/formatDate";
import { FaCalendarAlt, FaClock, FaEye, FaHeart } from "react-icons/fa";

interface MetaInfoProps {
  publishedAt: string;
  readTime: number;
  views: number;
  likes: number;
}

export default function MetaInfo({
  publishedAt,
  readTime,
  views,
  likes,
}: MetaInfoProps) {
  const t = useTranslations("MetaInfo");
  return (
    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
      <div className="flex items-center space-x-2">
        <FaCalendarAlt className="w-5 h-5" />
        <span>{formatDate(publishedAt)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaClock className="w-5 h-5" />
        <span>{readTime} {t("minutesRead")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaEye className="w-5 h-5" />
        <span>{views.toLocaleString()} {t("views")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaHeart className="w-5 h-5" />
        <span>{likes} {t("likes")}</span>
      </div>
    </div>

  )
}

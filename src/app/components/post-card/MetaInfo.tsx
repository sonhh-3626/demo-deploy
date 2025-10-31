import { formatDate } from "@/utils/formatDate";
import { useTranslations } from "next-intl";
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
  const t = useTranslations('PostCard');
  return (
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
      <div className="flex items-center space-x-4">
        <span className="flex items-center space-x-1">
          <FaCalendarAlt className="w-4 h-4" />
          <span>{formatDate(publishedAt)}</span>
        </span>
        <span className="flex items-center space-x-1">
          <FaClock className="w-4 h-4" />
          <span>{readTime} {t("minutes")}</span>
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <span className="flex items-center space-x-1">
          <FaEye className="w-4 h-4" />
          <span>{views}</span>
        </span>
        <span className="flex items-center space-x-1">
          <FaHeart className="w-4 h-4" />
          <span>{likes}</span>
        </span>
      </div>
    </div>
  )
}

import { convertMarkdownToHtml } from "@/utils/convertMarkdownToHtml";

interface ContentSectionProps {
  content: string;
}

export default function ContentSection({
  content
}: ContentSectionProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(content) }} />
    </div>

  )
}

export interface TocItem {
  id: string;
  level: number;
  text: string;
}

export const extractTocFromMarkdown = (markdown: string): TocItem[] => {
  const lines = markdown.split("\n");
  const toc: TocItem[] = [];

  for (const line of lines) {
    const match = /^(#{1,6})\s+(.*)/.exec(line);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = slugify(text);
      toc.push({ id, level, text });
    }
  }

  return toc;
}

export default function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // tách dấu tiếng Việt
    .replace(/[\u0300-\u036f]/g, "") // xóa dấu
    .replace(/[^a-z0-9\s-]/g, "") // bỏ ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "-");
}

export function convertMarkdownToHtml(markdown: string): string {
  let html = markdown;

  // Code block: ```lang\ncode\n```
  html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
    return `
<pre class="bg-gray-100 text-gray-800 p-3 rounded overflow-x-auto text-sm my-3">
  <code>${escapeHtml(code.trim())}</code>
</pre>`;
  });

  // Inline code: `code`
  html = html.replace(/`([^`]+)`/g, "<code class='bg-gray-100 px-1 rounded text-red-600'>$1</code>");

  // Headers: #, ##, ###
  html = html.replace(/^###### (.*$)/gim, (_, text) => `<h6 id="${slugify(text)}" class="text-sm font-semibold mt-3 mb-2">${text}</h6>`);
  html = html.replace(/^##### (.*$)/gim, (_, text) => `<h5 id="${slugify(text)}" class="text-base font-semibold mt-3 mb-2">${text}</h5>`);
  html = html.replace(/^#### (.*$)/gim, (_, text) => `<h4 id="${slugify(text)}" class="text-lg font-semibold mt-4 mb-2">${text}</h4>`);
  html = html.replace(/^### (.*$)/gim, (_, text) => `<h3 id="${slugify(text)}" class="text-lg font-semibold mt-4 mb-2">${text}</h3>`);
  html = html.replace(/^## (.*$)/gim, (_, text) => `<h2 id="${slugify(text)}" class="text-xl font-bold mt-6 mb-3">${text}</h2>`);
  html = html.replace(/^# (.*$)/gim, (_, text) => `<h1 id="${slugify(text)}" class="text-2xl font-bold mt-8 mb-4">${text}</h1>`);

  // Bold & italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold'>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>");

  // List items
  html = html.replace(/^- (.*)$/gim, "<li class='ml-5 list-disc'>$1</li>");
  html = html.replace(/(<li[\s\S]*<\/li>)/gim, "<ul class='my-3'>$1</ul>");

  // Paragraphs
  html = html.replace(/\n{2,}/g, "</p><p class='my-2 leading-relaxed'>");
  html = `<p class='my-2 leading-relaxed text-gray-800'>${html}</p>`;

  // Cleanup: remove <p> around block elements
  html = html
    .replace(/<p><h(.*?)<\/h(.*?)><\/p>/g, "<h$1</h$1>")
    .replace(/<p><pre/g, "<pre")
    .replace(/<\/pre><\/p>/g, "</pre>");

  return html.trim();
}


function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

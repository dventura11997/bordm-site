// Loads articles from src/content/articles/*.md at build time via import.meta.glob.
// Adding a new .md file to that folder is the only publish action required.

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function formatDate(iso: string): string {
  const parts = iso.split('-');
  if (parts.length !== 3) return iso;
  return `${MONTHS[parseInt(parts[1], 10) - 1]} ${parseInt(parts[2], 10)}, ${parts[0]}`;
}

// Deterministic gradient seeded off slug — used when heroImage is empty.
export function slugGradient(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) & 0xffffff;
  const hue = h % 360;
  return `linear-gradient(135deg, hsl(${hue},70%,25%) 0%, hsl(${(hue + 40) % 360},60%,15%) 100%)`;
}

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  for (const line of match[1].split('\n')) {
    const ci = line.indexOf(':');
    if (ci < 1) continue;
    const key = line.slice(0, ci).trim();
    let val = line.slice(ci + 1).trim();
    if (val === 'true') { data[key] = true; continue; }
    if (val === 'false') { data[key] = false; continue; }
    if (val.startsWith('"') && val.endsWith('"')) {
      data[key] = val.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      continue;
    }
    if (val.startsWith("'") && val.endsWith("'")) {
      data[key] = val.slice(1, -1).replace(/''/g, "'");
      continue;
    }
    if (val.startsWith('[') && val.endsWith(']')) {
      const inner = val.slice(1, -1).trim();
      data[key] = inner ? inner.split(',').map(s => s.trim().replace(/^["']|["']$/g, '')) : [];
      continue;
    }
    if (val !== '') data[key] = val;
  }

  return { data, content: match[2] };
}

export interface ArticleContent {
  slug: string;
  title: string;
  intro: string;
  seriesSlug: string;
  seriesName: string;
  seriesIcon: string;
  heroImage: string;
  showStar: boolean;
  readTime: string;
  date: string;
  body: string;
}

export interface ArticleListing {
  slug: string;
  seriesSlug: string;
  seriesIcon: string;
  seriesName: string;
  readTime: string;
  title: string;
  intro: string;
  showStar: boolean;
  date: string;
  tag: string;
  tagColor: string;
  heroImage: string;
}

const rawFiles = import.meta.glob('../content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const parsed = Object.values(rawFiles)
  .map((raw) => parseFrontmatter(raw))
  .sort((a, b) => {
    const da = new Date(a.data.date as string).getTime();
    const db = new Date(b.data.date as string).getTime();
    return db - da;
  });

export const articleContent: ArticleContent[] = parsed.map(({ data, content }) => ({
  slug: data.slug as string,
  title: data.title as string,
  intro: data.intro as string,
  seriesSlug: (data.seriesSlug as string) || '',
  seriesName: (data.seriesName as string) || '',
  seriesIcon: (data.seriesIcon as string) || '',
  heroImage: (data.heroImage as string) || '',
  showStar: (data.showStar as boolean) || false,
  readTime: (data.readTime as string) || '',
  date: formatDate(data.date as string),
  body: content.trim(),
}));

export const articleListings: ArticleListing[] = parsed.map(({ data }) => ({
  slug: data.slug as string,
  seriesSlug: (data.seriesSlug as string) || '',
  seriesIcon: (data.seriesIcon as string) || '',
  seriesName: (data.seriesName as string) || '',
  readTime: (data.readTime as string) || '',
  title: data.title as string,
  intro: data.intro as string,
  showStar: (data.showStar as boolean) || false,
  date: formatDate(data.date as string),
  tag: (data.tag as string) || '',
  tagColor: (data.tagColor as string) || '#e7335e',
  heroImage: (data.heroImage as string) || '',
}));

export function getArticleBySlug(slug: string): ArticleContent | undefined {
  return articleContent.find(a => a.slug === slug);
}

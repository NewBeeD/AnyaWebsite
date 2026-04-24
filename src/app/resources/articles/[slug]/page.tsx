import ArticleClient from './ArticleClient';

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = new Set<string>();
  try {
    const res = await fetch(`${STRAPI_API_URL}/articles?fields[0]=Slug&pagination[pageSize]=1000`);
    if (res.ok) {
      const json = await res.json();
      const items: any[] = json?.data ?? [];
      for (const item of items) {
        const slug = item?.attributes?.Slug ?? item?.Slug;
        if (typeof slug === 'string' && slug.length > 0) slugs.add(slug);
      }
    }
  } catch (err) {
    console.warn('[articles/[slug]] generateStaticParams fetch failed:', err);
  }
  // Always include a placeholder so next export does not fail when no content exists.
  if (slugs.size === 0) slugs.add('placeholder');
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default function Page() {
  return <ArticleClient />;
}

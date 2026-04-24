import GalleryClient from './GalleryClient';

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

// Known mock gallery IDs that exist in UseGalleryApi (see src/hooks/Events/UseGalleryApi.tsx)
const MOCK_GALLERY_IDS = ['1', '2'];

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = new Set<string>(MOCK_GALLERY_IDS);

  try {
    const res = await fetch(`${STRAPI_API_URL}/events-galleries?pagination[pageSize]=1000`);
    if (res.ok) {
      const json = await res.json();
      const items: any[] = json?.data ?? [];
      for (const item of items) {
        const attrs = item?.attributes ?? item;
        const slug = attrs?.Slug ?? attrs?.slug;
        if (typeof slug === 'string' && slug.length > 0) slugs.add(slug);
        if (item?.id != null) slugs.add(`strapi-${item.id}`);
      }
    }
  } catch (err) {
    console.warn('[eventsgallery/[slug]] generateStaticParams fetch failed:', err);
  }

  if (slugs.size === 0) slugs.add('placeholder');
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default function Page() {
  return <GalleryClient />;
}

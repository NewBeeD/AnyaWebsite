'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

interface Article {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  church: string;
  date: Date;
  category: 'doctrine' | 'lifestyle' | 'family' | 'health' | 'prophecy' | 'testimony' | 'youth' | 'community';
  description: string;
  content: string;
  readingTime: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  commentCount: number;
  featured: boolean;
  image?: string;
  scripture?: string;
  slug: string;
}

interface ArticleApiResult {
  events: Article[];
  loading: boolean;
  error: any;
}

export default function useCalendarApi(): ArticleApiResult {

  // const { data, loading, error } = useStrapiQuery('/events?populate=*');
  // Filter at the API level instead of client-side
  const { data, loading, error } = useStrapiQuery('/articles?populate=*');

  if (loading || error || !data) {
    return { events: [], loading, error };
  }

  const events =
    data?.data?.map((item: any) => ({
      id: item.id,
      title: item.Title,
      author: item.Author,
      authorRole: item.AuthorRole,
      church: item.Church,
      date: new Date(item.Date),
      category: LowerCase(item.Category),
      description: item.Description,
      content: item.Content,
      readingTime: item.ReadingTime,
      tags: item.Tags.tags,
      viewCount: item.ViewCount ?? 0,
      likeCount: item.LikeCount ?? 0,
      commentCount: item.CommentCount ?? 0,
      featured: item.Featured,
      image: item.Image,
      scripture: item.Scripture,
      slug: item.Slug

    })) ?? [];   
   

  return { events, loading, error };
}


function LowerCase(point){

  return point.toLowerCase();

}





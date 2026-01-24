'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

interface Sermon {
  id: string;
  title: string;
  preacher: string;
  church: string;
  date: Date;
  scripture: string;
  series: string;
  seriesPart?: number;
  description: string;
  content: string;
  readingTime: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  downloadCount: number;
  language: string;
  format: 'article' | 'transcript' | 'outline' | 'study-guide';
  slug: string;
}

interface SermonApiResult {
  events: Sermon[];
  loading: boolean;
  error: any;
}

export default function useCalendarApi(): SermonApiResult {


  const { data, loading, error } = useStrapiQuery('/sermons?populate=*');


  if (loading || error || !data) {
    return { events: [], loading, error };
  }

  const events =
    data?.data?.map((item: any) => ({
      id: item.id,
      title: item.Title,
      preacher: item.Preacher,
      church: item.Church,
      date: new Date(item.Date),
      scripture: item.Scripture,
      series: item.Series,
      seriesPart: item.SeriesPart,
      description: item.Description,
      content: item.Content,
      readingTime: item.ReadingTime ?? '10 minutes',
      tags: item.Tag.tags,
      viewCount: item.ViewCount ?? 0,
      likeCount: item.LikeCount ?? 0,
      downloadCount: item.DownloadCount ?? 0,
      language: toLowerCase(item.Language),
      format: item.Format,
      slug: item.Slug

    })) ?? [];   
   

  return { events, loading, error };
}


function toLowerCase(point){

  return point.toLowerCase();
}






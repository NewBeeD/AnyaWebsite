// app/sermons/page.tsx
'use client';

import { useState, useEffect } from 'react';

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
  language: 'english' | 'spanish' | 'french' | 'creole';
  format: 'article' | 'transcript' | 'outline' | 'study-guide';
}

export default function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [formatFilter, setFormatFilter] = useState<string>('all');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Sample text sermons data
  useEffect(() => {
    // const mockSermons: Sermon[] = [
    //   {
    //     id: '1',
    //     title: 'The Power of Faith in Difficult Times',
    //     preacher: 'Pastor Michael Thompson',
    //     church: 'Grace Community Church',
    //     date: new Date(2024, 6, 15),
    //     scripture: 'Hebrews 11:1-6',
    //     series: 'Faith Journey',
    //     seriesPart: 1,
    //     description: 'Exploring the essence of faith and how it sustains us through life\'s most challenging moments. A powerful message about trusting God\'s plan even when we cannot see the way forward.',
    //     content: 'Full sermon text content would go here... This would be the complete written sermon transcript or article format.',
    //     readingTime: '15 min read',
    //     tags: ['Faith', 'Trust', 'Hope', 'Perseverance'],
    //     viewCount: 156,
    //     likeCount: 89,
    //     downloadCount: 203,
    //     language: 'english',
    //     format: 'transcript'
    //   },
    //   {
    //     id: '2',
    //     title: 'Living in God\'s Grace',
    //     preacher: 'Rev. Sarah Johnson',
    //     church: 'Unity Fellowship',
    //     date: new Date(2024, 6, 8),
    //     scripture: 'Ephesians 2:8-10',
    //     series: 'Amazing Grace',
    //     seriesPart: 2,
    //     description: 'Understanding the depth of God\'s unmerited favor and how it transforms our daily lives. Learning to receive and extend grace to others.',
    //     content: 'Full sermon text content would go here...',
    //     readingTime: '12 min read',
    //     tags: ['Grace', 'Salvation', 'Mercy', 'Transformation'],
    //     viewCount: 203,
    //     likeCount: 134,
    //     downloadCount: 278,
    //     language: 'english',
    //     format: 'article'
    //   },
    //   {
    //     id: '3',
    //     title: 'El Poder de la Oración',
    //     preacher: 'Pastor Carlos Rodriguez',
    //     church: 'Iglesia de la Comunidad',
    //     date: new Date(2024, 6, 1),
    //     scripture: 'Filipenses 4:6-7',
    //     series: 'Vida de Oración',
    //     seriesPart: 1,
    //     description: 'Descubriendo el poder transformador de la oración en la vida del creyente y cómo desarrollar una relación más profunda con Dios.',
    //     content: 'Contenido completo del sermón en texto iría aquí...',
    //     readingTime: '14 min read',
    //     tags: ['Oración', 'Fe', 'Comunión', 'Espiritualidad'],
    //     viewCount: 98,
    //     likeCount: 67,
    //     downloadCount: 145,
    //     language: 'spanish',
    //     format: 'transcript'
    //   },
    //   {
    //     id: '4',
    //     title: 'Building Strong Christian Families - Study Guide',
    //     preacher: 'Dr. Robert Chen',
    //     church: 'Family Life Center',
    //     date: new Date(2024, 5, 24),
    //     scripture: 'Joshua 24:15',
    //     series: 'Family Foundations',
    //     seriesPart: 3,
    //     description: 'Biblical principles for establishing godly families in a modern world. Practical guidance for parents and couples seeking to honor God in their homes.',
    //     content: 'Study guide content with questions and discussion points...',
    //     readingTime: '20 min read',
    //     tags: ['Family', 'Parenting', 'Marriage', 'Legacy'],
    //     viewCount: 178,
    //     likeCount: 112,
    //     downloadCount: 312,
    //     language: 'english',
    //     format: 'study-guide'
    //   },
    //   {
    //     id: '5',
    //     title: 'Overcoming Fear with Faith - Sermon Outline',
    //     preacher: 'Evangelist Maria Garcia',
    //     church: 'Hope International Church',
    //     date: new Date(2024, 5, 17),
    //     scripture: '2 Timothy 1:7',
    //     series: 'Victorious Living',
    //     description: 'A powerful message on conquering fear through the power of God\'s Spirit. Learning to walk in confidence and boldness as children of God.',
    //     content: 'Sermon outline with main points and subpoints...',
    //     readingTime: '8 min read',
    //     tags: ['Fear', 'Faith', 'Victory', 'Courage'],
    //     viewCount: 145,
    //     likeCount: 93,
    //     downloadCount: 267,
    //     language: 'english',
    //     format: 'outline'
    //   },
    //   {
    //     id: '6',
    //     title: 'La Grâce qui Transforme',
    //     preacher: 'Pasteur Jean-Luc Martin',
    //     church: 'Église de la Réconciliation',
    //     date: new Date(2024, 5, 10),
    //     scripture: 'Romains 5:1-5',
    //     series: 'La Grâce de Dieu',
    //     seriesPart: 1,
    //     description: 'Exploration de la grâce transformatrice de Dieu et son impact sur notre vie quotidienne et nos relations.',
    //     content: 'Contenu complet du sermon en français...',
    //     readingTime: '16 min read',
    //     tags: ['Grâce', 'Transformation', 'Amour', 'Rédemption'],
    //     viewCount: 76,
    //     likeCount: 45,
    //     downloadCount: 98,
    //     language: 'french',
    //     format: 'article'
    //   },
    //   {
    //     id: '7',
    //     title: 'The Joy of Serving Others',
    //     preacher: 'Deacon Thomas Wilson',
    //     church: 'Servants Heart Ministry',
    //     date: new Date(2024, 5, 3),
    //     scripture: 'Mark 10:45',
    //     series: 'Servant Leadership',
    //     seriesPart: 2,
    //     description: 'Discovering the true joy that comes from serving others as Christ served us. Practical ways to live out servant leadership in daily life.',
    //     content: 'Full sermon text content would go here...',
    //     readingTime: '18 min read',
    //     tags: ['Service', 'Leadership', 'Humility', 'Joy'],
    //     viewCount: 132,
    //     likeCount: 78,
    //     downloadCount: 189,
    //     language: 'english',
    //     format: 'transcript'
    //   },
    //   {
    //     id: '8',
    //     title: 'Pouvoir Bondye a nan Lavni Nou',
    //     preacher: 'Pastè Jacques Pierre',
    //     church: 'Legliz Kominite Kreyl',
    //     date: new Date(2024, 4, 27),
    //     scripture: 'Jeremi 29:11',
    //     series: 'Plan Bondye a',
    //     description: 'Konprann plan Bondye a pou lavni nou epi aprann konfye nan li nan tout sikonstans lavi nou.',
    //     content: 'Tèks konplè sermone an kreyòl...',
    //     readingTime: '13 min read',
    //     tags: ['Lavni', 'Konfyans', 'Plan', 'Espwa'],
    //     viewCount: 89,
    //     likeCount: 56,
    //     downloadCount: 123,
    //     language: 'creole',
    //     format: 'transcript'
    //   }
    // ];
    
const mockSermons: Sermon[] = [
  {
    id: '1',
    title: 'The Power of Faith in Difficult Times',
    preacher: 'Pastor Michael Henderson',
    church: 'Roseau Seventh-day Adventist Church',
    date: new Date(2024, 6, 15),
    scripture: 'Hebrews 11:1-6',
    series: 'Faith Journey',
    seriesPart: 1,
    description: 'Exploring the essence of faith and how it sustains us through life\'s most challenging moments, including hurricanes and economic hardships. A powerful message about trusting God\'s plan for Dominica from an Adventist perspective.',
    content: 'Full sermon text content would go here... This would be the complete written sermon transcript focusing on Adventist teachings about faith and perseverance.',
    readingTime: '15 min read',
    tags: ['Faith', 'Trust', 'Hope', 'Perseverance', 'Dominica', 'Adventist'],
    viewCount: 156,
    likeCount: 89,
    downloadCount: 203,
    language: 'english',
    format: 'transcript'
  },
  {
    id: '2',
    title: 'Living in God\'s Grace: The Adventist Perspective',
    preacher: 'Pastor Sarah Laurent',
    church: 'Portsmouth Seventh-day Adventist Church',
    date: new Date(2024, 6, 8),
    scripture: 'Ephesians 2:8-10',
    series: 'Amazing Grace',
    seriesPart: 2,
    description: 'Understanding the depth of God\'s unmerited favor through the lens of Adventist theology and how it transforms our daily lives in the Dominican context.',
    content: 'Full sermon text content would go here... Exploring grace from an Adventist perspective.',
    readingTime: '12 min read',
    tags: ['Grace', 'Salvation', 'Mercy', 'Transformation', 'Adventist Doctrine'],
    viewCount: 203,
    likeCount: 134,
    downloadCount: 278,
    language: 'english',
    format: 'article'
  },
  {
    id: '3',
    title: 'El Poder de la Oración en la Vida Adventista',
    preacher: 'Pastor Carlos Martinez',
    church: 'Iglesia Adventista del Séptimo Día de San Carlos',
    date: new Date(2024, 6, 1),
    scripture: 'Filipenses 4:6-7',
    series: 'Vida de Oración Adventista',
    seriesPart: 1,
    description: 'Descubriendo el poder transformador de la oración en la vida del creyente adventista dominiqués y cómo desarrollar una relación más profunda con Dios.',
    content: 'Contenido completo del sermón en texto iría aquí... Enfocado en la perspectiva adventista.',
    readingTime: '14 min read',
    tags: ['Oración', 'Fe', 'Espiritualidad', 'Adventista', 'Vida Devocional'],
    viewCount: 98,
    likeCount: 67,
    downloadCount: 145,
    language: 'spanish',
    format: 'transcript'
  },
  {
    id: '4',
    title: 'Building Strong Adventist Families in Dominica - Study Guide',
    preacher: 'Elder Robert Green',
    church: 'Marigot Seventh-day Adventist Church',
    date: new Date(2024, 5, 24),
    scripture: 'Joshua 24:15',
    series: 'Family Foundations',
    seriesPart: 3,
    description: 'Biblical principles for establishing godly Adventist families in the unique cultural context of Dominica. Practical guidance based on Adventist family ministries.',
    content: 'Study guide content with questions and discussion points specific to Adventist family life in Dominica...',
    readingTime: '20 min read',
    tags: ['Family', 'Parenting', 'Marriage', 'Adventist Home', 'Family Ministries'],
    viewCount: 178,
    likeCount: 112,
    downloadCount: 312,
    language: 'english',
    format: 'study-guide'
  },
  {
    id: '5',
    title: 'Overcoming Fear with Adventist Hope - Sermon Outline',
    preacher: 'Evangelist Maria Joseph',
    church: 'Canefield Seventh-day Adventist Church',
    date: new Date(2024, 5, 17),
    scripture: '2 Timothy 1:7',
    series: 'Victorious Living',
    description: 'A powerful Adventist message on conquering fear and trauma through the blessed hope and the power of God\'s Spirit, especially relevant after hurricane experiences.',
    content: 'Sermon outline with main points and subpoints addressing hope from an Adventist perspective...',
    readingTime: '8 min read',
    tags: ['Fear', 'Faith', 'Victory', 'Blessed Hope', 'Adventist Eschatology'],
    viewCount: 145,
    likeCount: 93,
    downloadCount: 267,
    language: 'english',
    format: 'outline'
  },
  {
    id: '6',
    title: 'La Grâce dans la Perspective Adventiste',
    preacher: 'Pasteur Jean-Luc Fontaine',
    church: 'Église Adventiste du Septième Jour de Roseau',
    date: new Date(2024, 5, 10),
    scripture: 'Romains 5:1-5',
    series: 'La Grâce de Dieu',
    seriesPart: 1,
    description: 'Exploration de la grâce transformatrice de Dieu selon la théologie adventiste et son impact sur notre vie quotidienne dans le contexte dominiquais.',
    content: 'Contenu complet du sermon en français avec perspective adventiste...',
    readingTime: '16 min read',
    tags: ['Grâce', 'Transformation', 'Théologie Adventiste', 'Salut', 'Sanctification'],
    viewCount: 76,
    likeCount: 45,
    downloadCount: 98,
    language: 'french',
    format: 'article'
  },
  {
    id: '7',
    title: 'The Joy of Serving: Adventist Community Service',
    preacher: 'Deacon Thomas Williams',
    church: 'St. Joseph Seventh-day Adventist Church',
    date: new Date(2024, 5, 3),
    scripture: 'Mark 10:45',
    series: 'Servant Leadership',
    seriesPart: 2,
    description: 'Discovering the true joy that comes from serving others through Adventist Community Services in Dominican communities, following Christ\'s example of service.',
    content: 'Full sermon text content focusing on Adventist community service and outreach in Dominica...',
    readingTime: '18 min read',
    tags: ['Service', 'Leadership', 'Community Services', 'Outreach', 'ADRA'],
    viewCount: 132,
    likeCount: 78,
    downloadCount: 189,
    language: 'english',
    format: 'transcript'
  },
  {
    id: '8',
    title: 'Pouvoir Bondye a nan Legliz Adventist',
    preacher: 'Pastè Jacques Bernard',
    church: 'Legliz Adventist Setyèm Jou Dominik',
    date: new Date(2024, 4, 27),
    scripture: 'Jeremi 29:11',
    series: 'Plan Bondye a pou Adventist',
    description: 'Konprann plan Bondye a pou lavni legliz Adventist nan Dominik epi aprann konfye nan li nan tout sikonstans lavi nou.',
    content: 'Tèks konplè sermone an kreyòl dominiken ak referans doktrin Adventist...',
    readingTime: '13 min read',
    tags: ['Lavni', 'Konfyans', 'Plan', 'Espwa', 'Legliz Adventist'],
    viewCount: 89,
    likeCount: 56,
    downloadCount: 123,
    language: 'creole',
    format: 'transcript'
  },
  {
    id: '9',
    title: 'Health and Stewardship: Adventist Principles for Dominica',
    preacher: 'Pastor David Timothy',
    church: 'Salisbury Seventh-day Adventist Church',
    date: new Date(2024, 4, 20),
    scripture: '1 Corinthians 6:19-20',
    series: 'Health Message',
    seriesPart: 1,
    description: 'Understanding our biblical responsibility for health and wellness through the Adventist health message, applied to the Dominican context.',
    content: 'Sermon content focusing on Adventist health principles and environmental stewardship...',
    readingTime: '14 min read',
    tags: ['Health', 'Stewardship', 'Temperance', 'Wellness', 'Adventist Health'],
    viewCount: 112,
    likeCount: 78,
    downloadCount: 156,
    language: 'english',
    format: 'article'
  },
  {
    id: '10',
    title: 'Sabbath Rest: God\'s Gift to His People',
    preacher: 'Pastor Stephen Paul',
    church: 'Grand Bay Seventh-day Adventist Church',
    date: new Date(2024, 4, 13),
    scripture: 'Exodus 20:8-11',
    series: 'Sabbath Blessings',
    description: 'Exploring the beauty and blessing of the Sabbath from an Adventist perspective, and its special significance for God\'s people in Dominica.',
    content: 'Sermon content about Sabbath observance and its spiritual significance...',
    readingTime: '16 min read',
    tags: ['Sabbath', 'Rest', 'Worship', 'Seventh-day', 'Adventist Distinctive'],
    viewCount: 167,
    likeCount: 102,
    downloadCount: 234,
    language: 'english',
    format: 'transcript'
  },
  {
    id: '11',
    title: 'The Three Angels Messages for Today',
    preacher: 'Elder Mark Baptiste',
    church: 'Mahaut Seventh-day Adventist Church',
    date: new Date(2024, 4, 6),
    scripture: 'Revelation 14:6-12',
    series: 'End-Time Messages',
    seriesPart: 1,
    description: 'Understanding the relevance of the Three Angels Messages for our time and their application to the Adventist church in Dominica.',
    content: 'Sermon content explaining the Three Angels Messages from Revelation...',
    readingTime: '18 min read',
    tags: ['Three Angels', 'Revelation', 'End Times', 'Prophecy', 'Adventist Message'],
    viewCount: 145,
    likeCount: 98,
    downloadCount: 189,
    language: 'english',
    format: 'study-guide'
  },
  {
    id: '12',
    title: 'Christian Education: Adventist Philosophy',
    preacher: 'Dr. Linda Frederick',
    church: 'Dominica Seventh-day Adventist School Chapel',
    date: new Date(2024, 3, 29),
    scripture: 'Proverbs 22:6',
    series: 'Adventist Education',
    description: 'The importance of Christian education from an Adventist perspective and its impact on developing strong character in Dominican youth.',
    content: 'Sermon content focusing on Adventist educational philosophy...',
    readingTime: '15 min read',
    tags: ['Education', 'Youth', 'Character', 'Adventist School', 'Discipleship'],
    viewCount: 123,
    likeCount: 87,
    downloadCount: 167,
    language: 'english',
    format: 'outline'
  }
];
    
    setSermons(mockSermons);
  }, []);

  const getLanguageColor = (language: string) => {
    const colors = {
      english: 'bg-blue-50! border-blue-200! text-blue-700!',
      spanish: 'bg-green-50! border-green-200! text-green-700!',
      french: 'bg-purple-50! border-purple-200! text-purple-700!',
      creole: 'bg-orange-50! border-orange-200! text-orange-700!'
    };
    return colors[language as keyof typeof colors] || 'bg-gray-50! border-gray-200! text-gray-700!';
  };

  const getLanguageBadge = (language: string) => {
    const colors = {
      english: 'bg-blue-100! text-blue-800!',
      spanish: 'bg-green-100! text-green-800!',
      french: 'bg-purple-100! text-purple-800!',
      creole: 'bg-orange-100! text-orange-800!'
    };
    return colors[language as keyof typeof colors] || 'bg-gray-100! text-gray-800!';
  };

  const getFormatBadge = (format: string) => {
    const colors = {
      article: 'bg-indigo-100! text-indigo-800!',
      transcript: 'bg-teal-100! text-teal-800!',
      outline: 'bg-amber-100! text-amber-800!',
      'study-guide': 'bg-rose-100! text-rose-800!'
    };
    return colors[format as keyof typeof colors] || 'bg-gray-100! text-gray-800!';
  };

  const getFormatName = (format: string) => {
    const names = {
      article: 'Article',
      transcript: 'Transcript',
      outline: 'Outline',
      'study-guide': 'Study Guide'
    };
    return names[format as keyof typeof names] || format;
  };

  const getLanguageName = (language: string) => {
    const names = {
      english: 'English',
      spanish: 'Español',
      french: 'Français',
      creole: 'Kreyòl'
    };
    return names[language as keyof typeof names] || language;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredSermons = sermons.filter(sermon => {
    const matchesLanguage = filter === 'all' || sermon.language === filter;
    const matchesFormat = formatFilter === 'all' || sermon.format === formatFilter;
    const matchesSearch = searchTerm === '' || 
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.church.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesLanguage && matchesFormat && matchesSearch;
  });

  const SermonCard = ({ sermon }: { sermon: Sermon }) => (
    <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! hover:shadow-md! transition-all! duration-200!">
      {/* Header */}
      <div className="flex! justify-between! items-start! mb-4!">
        <div className="flex! flex-wrap! gap-2!">
          <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getLanguageBadge(sermon.language)}`}>
            {getLanguageName(sermon.language)}
          </span>
          <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${getFormatBadge(sermon.format)}`}>
            {getFormatName(sermon.format)}
          </span>
          {sermon.seriesPart && (
            <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
              Part {sermon.seriesPart}
            </span>
          )}
        </div>
        <div className="text-sm! text-gray-500!">
          {sermon.readingTime}
        </div>
      </div>

      {/* Title and Series */}
      <h3 className="text-xl! font-semibold! text-gray-900! mb-2!">
        {sermon.title}
      </h3>
      
      {sermon.series && (
        <p className="text-sm! text-blue-600! font-medium! mb-3!">
          {sermon.series} {sermon.seriesPart && `• Part ${sermon.seriesPart}`}
        </p>
      )}

      {/* Scripture */}
      <div className="flex! items-center! gap-x-2! mb-3!">
        <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="text-sm! text-gray-700! font-medium!">{sermon.scripture}</span>
      </div>
      
      {/* Description */}
      <p className="text-gray-600! mb-4! line-clamp-3!">
        {sermon.description}
      </p>

      {/* Details */}
      <div className="space-y-2! mb-4!">
        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-sm! text-gray-700!">{sermon.preacher}</span>
        </div>
        
        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-sm! text-gray-700!">{sermon.church}</span>
        </div>

        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm! text-gray-700!">{formatDate(sermon.date)}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex! items-center! gap-x-4! text-sm! text-gray-500! mb-4!">
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>{sermon.viewCount}</span>
        </div>
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{sermon.likeCount}</span>
        </div>
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>{sermon.downloadCount}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex! flex-wrap! gap-1! mb-4!">
        {sermon.tags.map(tag => (
          <span key={tag} className="inline-block! px-2! py-1! text-xs! bg-gray-100! text-gray-700! rounded!">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex! gap-x-3!">
        <button
          onClick={() => setSelectedSermon(sermon)}
          className="flex-1! bg-blue-600! text-white! py-2! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
        >
          Read Sermon
        </button>
        <button className="px-4! py-2! border! border-blue-600! text-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
          Download
        </button>
      </div>
    </div>
  );

  const SermonListItem = ({ sermon }: { sermon: Sermon }) => (
    <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! hover:shadow-md! transition-all! duration-200!">
      <div className="flex! flex-col! lg:flex-row! lg:items-center! justify-between!">
        <div className="flex-1!">
          <div className="flex! items-center! gap-x-3! mb-3!">
            <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getLanguageBadge(sermon.language)}`}>
              {getLanguageName(sermon.language)}
            </span>
            <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${getFormatBadge(sermon.format)}`}>
              {getFormatName(sermon.format)}
            </span>
            {sermon.seriesPart && (
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
                Part {sermon.seriesPart}
              </span>
            )}
            <span className="text-sm! text-gray-500!">{sermon.readingTime}</span>
          </div>
          
          <h3 className="text-xl! font-semibold! text-gray-900! mb-2!">
            {sermon.title}
          </h3>
          
          {sermon.series && (
            <p className="text-sm! text-blue-600! font-medium! mb-2!">
              {sermon.series} {sermon.seriesPart && `• Part ${sermon.seriesPart}`}
            </p>
          )}

          <p className="text-gray-600! mb-3!">
            {sermon.description}
          </p>

          <div className="flex! flex-wrap! gap-4! text-sm! text-gray-600! mb-3!">
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>{sermon.scripture}</span>
            </div>
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{sermon.preacher}</span>
            </div>
            <div className="flex! items-center! space-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{sermon.church}</span>
            </div>
          </div>

          <div className="flex! flex-wrap! gap-2!">
            {sermon.tags.map(tag => (
              <span key={tag} className="inline-block! px-2! py-1! text-xs! bg-gray-100! text-gray-700! rounded!">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex! items-center! gap-x-4! mt-4! lg:mt-0! lg:ml-6!">
          {/* Stats */}
          <div className="flex! items-center! gap-x-4! text-sm! text-gray-500!">
            <div className="flex! items-center! gap-x-1!">
              <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{sermon.viewCount}</span>
            </div>
            <div className="flex! items-center! gap-x-1!">
              <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{sermon.likeCount}</span>
            </div>
          </div>

          <div className="flex! gap-x-2!">
            <button
              onClick={() => setSelectedSermon(sermon)}
              className="px-4! py-2! text-blue-600! border! border-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
            >
              Read
            </button>
            <button className="px-4! py-2! bg-blue-600! text-white! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen! bg-gray-50! py-4! sm:py-8!">
      <div className="max-w-7xl! mx-auto! px-3! sm:px-6! lg:px-8!">
        
        {/* Header Section */}
        <div className="mb-6! sm:mb-8! px-2!">
          <h1 className="text-2xl! sm:text-3xl! font-bold! text-gray-900! mb-2!">
            Sermons Library
          </h1>
          <p className="text-base! sm:text-lg! text-gray-600!">
            Written sermons, transcripts, and study materials from pastors across our 90 member churches
          </p>
        </div>

        {/* Controls Card */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mb-4! sm:mb-6! mx-2! sm:mx-0!">
          <div className="flex! flex-col! lg:flex-row! justify-between! items-start! lg:items-center! space-y-4! lg:space-y-0!">
            {/* Search and View Controls */}
            <div className="flex! flex-col! sm:flex-row! space-y-4! sm:space-y-0! sm:gap-x-6! w-full! lg:w-auto!">
              {/* Search */}
              <div className="w-full! sm:w-64!">
                <label htmlFor="search" className="sr-only!">Search sermons</label>
                <div className="relative!">
                  <div className="absolute! inset-y-0! left-0! pl-3! flex! items-center! pointer-events-none!">
                    <svg className="h-5! w-5! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search sermons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block! w-full! pl-10! pr-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                  />
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex! items-center! gap-x-2!">
                <span className="text-sm! font-medium! text-gray-700!">View:</span>
                <div className="flex! bg-gray-100! rounded-lg! p-1!">
                  <button
                    onClick={() => setView('grid')}
                    className={`px-3! py-1! rounded! text-sm! font-medium! transition-colors! duration-200! ${
                      view === 'grid' 
                        ? 'bg-white! text-gray-900! shadow-sm!' 
                        : 'text-gray-600! hover:text-gray-900!'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`px-3! py-1! rounded! text-sm! font-medium! transition-colors! duration-200! ${
                      view === 'list' 
                        ? 'bg-white! text-gray-900! shadow-sm!' 
                        : 'text-gray-600! hover:text-gray-900!'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex! flex-col! sm:flex-row! space-y-3! sm:space-y-0! sm:gap-x-4! w-full! lg:w-auto!">
              <div className="flex! items-center! gap-x-2!">
                <label htmlFor="language-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Language:
                </label>
                <select
                  id="language-filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full! sm:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Languages</option>
                  <option value="english">English</option>
                  <option value="spanish">Español</option>
                  <option value="french">Français</option>
                  <option value="creole">Kreyòl</option>
                </select>
              </div>

              <div className="flex! items-center! gap-x-2!">
                <label htmlFor="format-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                  Format:
                </label>
                <select
                  id="format-filter"
                  value={formatFilter}
                  onChange={(e) => setFormatFilter(e.target.value)}
                  className="w-full! sm:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
                >
                  <option value="all">All Formats</option>
                  <option value="article">Articles</option>
                  <option value="transcript">Transcripts</option>
                  <option value="outline">Outlines</option>
                  <option value="study-guide">Study Guides</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Sermons Grid/List */}
        {filteredSermons.length === 0 ? (
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-8! text-center! mx-2! sm:mx-0!">
            <svg className="w-12! h-12! text-gray-400! mx-auto! mb-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg! font-medium! text-gray-900! mb-2!">No sermons found</h3>
            <p className="text-gray-600!">Try adjusting your search or filters to see more sermons.</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid! grid-cols-1! md:grid-cols-2! xl:grid-cols-3! gap-6! mx-2! sm:mx-0!">
            {filteredSermons.map(sermon => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
        ) : (
          <div className="space-y-4! mx-2! sm:mx-0!">
            {filteredSermons.map(sermon => (
              <SermonListItem key={sermon.id} sermon={sermon} />
            ))}
          </div>
        )}

        {/* Language & Format Legend */}
        <div className="mt-6! bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mx-2! sm:mx-0!">
          <div className="grid! md:grid-cols-2! gap-6!">
            <div>
              <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Available Languages</h3>
              <div className="flex! flex-wrap! gap-3! sm:gap-4!">
                {Object.entries({
                  english: 'English',
                  spanish: 'Español',
                  french: 'Français',
                  creole: 'Kreyòl'
                }).map(([language, label]) => (
                  <div key={language} className="flex! items-center! gap-x-2!">
                    <div className={`w-3! h-3! sm:w-4! sm:h-4! rounded! ${getLanguageBadge(language)}`} />
                    <span className="text-xs! sm:text-sm! text-gray-700!">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Sermon Formats</h3>
              <div className="flex! flex-wrap! gap-3! sm:gap-4!">
                {Object.entries({
                  article: 'Articles',
                  transcript: 'Transcripts',
                  outline: 'Outlines',
                  'study-guide': 'Study Guides'
                }).map(([format, label]) => (
                  <div key={format} className="flex! items-center! gap-x-2!">
                    <div className={`w-3! h-3! sm:w-4! sm:h-4! rounded! ${getFormatBadge(format)}`} />
                    <span className="text-xs! sm:text-sm! text-gray-700!">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sermon Detail Modal */}
      {selectedSermon && (
        <div className="fixed! inset-0! bg-black! bg-opacity-50! flex! items-center! justify-center! p-3! sm:p-4! z-50! animate-in! fade-in! duration-200!">
          <div className="bg-white! rounded-lg! max-w-4xl! w-full! max-h-[90vh]! overflow-y-auto! animate-in! slide-in-from-bottom-2! duration-300!">
            <div className="p-4! sm:p-6!">
              <div className="flex! justify-between! items-start! mb-4!">
                <div className="pr-4!">
                  <h2 className="text-2xl! font-bold! text-gray-900! mb-2!">
                    {selectedSermon.title}
                  </h2>
                  <div className="flex! flex-wrap! gap-2!">
                    <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getLanguageBadge(selectedSermon.language)}`}>
                      {getLanguageName(selectedSermon.language)}
                    </span>
                    <span className={`inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! ${getFormatBadge(selectedSermon.format)}`}>
                      {getFormatName(selectedSermon.format)}
                    </span>
                    {selectedSermon.seriesPart && (
                      <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-gray-100! text-gray-800!">
                        Part {selectedSermon.seriesPart}
                      </span>
                    )}
                    <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-blue-100! text-blue-800!">
                      {selectedSermon.readingTime}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSermon(null)}
                  className="text-gray-400! hover:text-gray-600! transition-colors! duration-200! p-1! rounded-lg! hover:bg-gray-100! flex-shrink-0!"
                >
                  <svg className="w-6! h-6!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid! md:grid-cols-2! gap-6! mb-6!">
                <div className="space-y-4!">
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Scripture</p>
                      <p className="text-lg! font-semibold! text-gray-600!">{selectedSermon.scripture}</p>
                    </div>
                  </div>
                  
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Preacher</p>
                      <p className="text-sm! text-gray-600!">{selectedSermon.preacher}</p>
                    </div>
                  </div>

                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Church</p>
                      <p className="text-sm! text-gray-600!">{selectedSermon.church}</p>
                    </div>
                  </div>

                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Date</p>
                      <p className="text-sm! text-gray-600!">{formatDate(selectedSermon.date)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  {selectedSermon.series && (
                    <div className="flex! items-start! space-x-3! mb-4!">
                      <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <div>
                        <p className="text-sm! font-medium! text-gray-900!">Series</p>
                        <p className="text-sm! text-gray-600!">
                          {selectedSermon.series} 
                          {selectedSermon.seriesPart && ` (Part ${selectedSermon.seriesPart})`}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="bg-gray-50! rounded-lg! p-4!">
                    <h4 className="text-sm! font-medium! text-gray-900! mb-3!">Sermon Stats</h4>
                    <div className="grid! grid-cols-3! gap-4!">
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-blue-600!">{selectedSermon.viewCount}</div>
                        <div className="text-xs! text-gray-600!">Views</div>
                      </div>
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-red-600!">{selectedSermon.likeCount}</div>
                        <div className="text-xs! text-gray-600!">Likes</div>
                      </div>
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-green-600!">{selectedSermon.downloadCount}</div>
                        <div className="text-xs! text-gray-600!">Downloads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex! items-start! space-x-3! mb-6!">
                <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm! font-medium! text-gray-900!">Description</p>
                  <p className="text-sm! text-gray-600!">{selectedSermon.description}</p>
                </div>
              </div>

              {/* Sermon Content Preview */}
              <div className="bg-gray-50! rounded-lg! p-4! mb-6!">
                <h4 className="text-sm! font-medium! text-gray-900! mb-3!">Sermon Preview</h4>
                <div className="prose! prose-sm! max-w-none!">
                  <p className="text-gray-600! line-clamp-4!">
                    {selectedSermon.content}
                  </p>
                </div>
                <p className="text-xs! text-gray-500! mt-2!">Preview of the first few paragraphs...</p>
              </div>

              {/* Tags */}
              <div className="flex! flex-wrap! gap-2! mb-6!">
                {selectedSermon.tags.map(tag => (
                  <span key={tag} className="inline-block! px-3! py-1! text-sm! bg-gray-100! text-gray-700! rounded-full!">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex! flex-col! sm:flex-row! space-y-3! sm:space-y-0! sm:space-x-3!">
                <button className="flex-1! bg-blue-600! text-white! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                  Read Full Sermon
                </button>
                <button className="flex-1! border! border-blue-600! text-blue-600! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                  Download PDF
                </button>
                <button className="flex-1! border! border-gray-300! text-gray-700! py-3! px-4! rounded-lg! font-medium! hover:bg-gray-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-gray-500! focus:ring-offset-2!">
                  Share Sermon
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
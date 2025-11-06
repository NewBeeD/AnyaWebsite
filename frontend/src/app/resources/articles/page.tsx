// app/articles/page.tsx
'use client';

import { useState, useEffect } from 'react';
import useArticleApi from '@/hooks/Resources/useArticleApi'

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

export default function ArticlesAndBlog() {

  const { events: articles, loading, error } = useArticleApi()
  // const [articles, setArticles] = useState<Article[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Sample articles data
  // useEffect(() => {
  //   const mockArticles: Article[] = [
  //     {
  //       id: '1',
  //       title: 'Understanding the Sabbath: More Than Just a Day of Rest',
  //       author: 'Pastor Michael Henderson',
  //       authorRole: 'Senior Pastor',
  //       church: 'Roseau Seventh-day Adventist Church',
  //       date: new Date(2024, 6, 15),
  //       category: 'doctrine',
  //       description: 'A deep dive into the biblical significance of the Sabbath and its practical application in our modern lives. Discover the peace and restoration that comes from honoring God\'s holy day.',
  //       content: 'Full article content would go here... Exploring the Sabbath from creation to redemption and its relevance for today\'s Christian.',
  //       readingTime: '8 min read',
  //       tags: ['Sabbath', 'Rest', 'Worship', 'Creation', 'Adventist'],
  //       viewCount: 324,
  //       likeCount: 156,
  //       commentCount: 23,
  //       featured: true,
  //       scripture: 'Genesis 2:1-3'
  //     },
  //     {
  //       id: '2',
  //       title: 'Plant-Based Living: A Biblical Perspective on Health',
  //       author: 'Dr. Sarah Laurent',
  //       authorRole: 'Health Ministries Director',
  //       church: 'Portsmouth Seventh-day Adventist Church',
  //       date: new Date(2024, 6, 12),
  //       category: 'health',
  //       description: 'Exploring the connection between our dietary choices and spiritual well-being. Practical tips for transitioning to a plant-based lifestyle in the Caribbean context.',
  //       content: 'Full article content would go here... Discussing the health message and Daniel\'s example.',
  //       readingTime: '10 min read',
  //       tags: ['Health', 'Nutrition', 'Plant-Based', 'Temperance', 'Wellness'],
  //       viewCount: 278,
  //       likeCount: 134,
  //       commentCount: 18,
  //       featured: true,
  //       scripture: 'Daniel 1:8-16'
  //     },
  //     {
  //       id: '3',
  //       title: 'Raising Adventist Children in a Digital Age',
  //       author: 'Elder Robert Green',
  //       authorRole: 'Family Ministries Leader',
  //       church: 'Marigot Seventh-day Adventist Church',
  //       date: new Date(2024, 6, 8),
  //       category: 'family',
  //       description: 'Practical strategies for nurturing faith in our children while navigating the challenges of technology and social media in today\'s world.',
  //       content: 'Full article content would go here... Focus on family worship and digital boundaries.',
  //       readingTime: '12 min read',
  //       tags: ['Family', 'Parenting', 'Technology', 'Youth', 'Discipleship'],
  //       viewCount: 189,
  //       likeCount: 98,
  //       commentCount: 15,
  //       featured: false,
  //       scripture: 'Proverbs 22:6'
  //     },
  //     {
  //       id: '4',
  //       title: 'The Blessed Hope: Living in Expectation of Christ\'s Return',
  //       author: 'Evangelist Maria Joseph',
  //       authorRole: 'Evangelism Coordinator',
  //       church: 'Canefield Seventh-day Adventist Church',
  //       date: new Date(2024, 6, 5),
  //       category: 'prophecy',
  //       description: 'How the blessed hope of Christ\'s soon return should shape our daily lives, priorities, and mission as Seventh-day Adventists.',
  //       content: 'Full article content would go here... Exploring the Second Coming and its practical implications.',
  //       readingTime: '14 min read',
  //       tags: ['Second Coming', 'Prophecy', 'Hope', 'Eschatology', 'Mission'],
  //       viewCount: 267,
  //       likeCount: 145,
  //       commentCount: 22,
  //       featured: true,
  //       scripture: 'Titus 2:13'
  //     },
  //     {
  //       id: '5',
  //       title: 'From Hurricane to Hope: A Dominican Testimony',
  //       author: 'Sister Linda Frederick',
  //       authorRole: 'Church Member',
  //       church: 'Grand Bay Seventh-day Adventist Church',
  //       date: new Date(2024, 6, 1),
  //       category: 'testimony',
  //       description: 'A powerful personal testimony of faith and restoration after Hurricane Maria, and how God turned devastation into opportunity for ministry.',
  //       content: 'Full testimony content would go here... Personal story of recovery and faith.',
  //       readingTime: '6 min read',
  //       tags: ['Testimony', 'Hurricane', 'Faith', 'Recovery', 'Dominica'],
  //       viewCount: 312,
  //       likeCount: 178,
  //       commentCount: 31,
  //       featured: false,
  //       scripture: 'Romans 8:28'
  //     },
  //     {
  //       id: '6',
  //       title: 'Youth Ministry in the 21st Century: Reaching the Next Generation',
  //       author: 'Deacon Thomas Williams',
  //       authorRole: 'Youth Leader',
  //       church: 'St. Joseph Seventh-day Adventist Church',
  //       date: new Date(2024, 5, 28),
  //       category: 'youth',
  //       description: 'Innovative approaches to youth ministry that connect with young people while staying true to Adventist principles and biblical truth.',
  //       content: 'Full article content would go here... Discussing Pathfinders, AY, and modern youth outreach.',
  //       readingTime: '11 min read',
  //       tags: ['Youth', 'Ministry', 'Next Generation', 'Pathfinders', 'Innovation'],
  //       viewCount: 156,
  //       likeCount: 89,
  //       commentCount: 12,
  //       featured: false,
  //       scripture: '1 Timothy 4:12'
  //     },
  //     {
  //       id: '7',
  //       title: 'Community Service as Evangelism: The Adventist Approach',
  //       author: 'Pastor David Timothy',
  //       authorRole: 'ACS Director',
  //       church: 'Salisbury Seventh-day Adventist Church',
  //       date: new Date(2024, 5, 25),
  //       category: 'community',
  //       description: 'How Adventist Community Services provides opportunities to share God\'s love through practical ministry in our Dominican communities.',
  //       content: 'Full article content would go here... Focus on service and witness.',
  //       readingTime: '9 min read',
  //       tags: ['Community Service', 'Evangelism', 'Outreach', 'ACS', 'Mission'],
  //       viewCount: 198,
  //       likeCount: 112,
  //       commentCount: 17,
  //       featured: false,
  //       scripture: 'Matthew 5:16'
  //     },
  //     {
  //       id: '8',
  //       title: 'The Health Message: Ellen White\'s Timeless Counsel',
  //       author: 'Dr. James Baptiste',
  //       authorRole: 'Medical Doctor',
  //       church: 'Roseau Seventh-day Adventist Church',
  //       date: new Date(2024, 5, 20),
  //       category: 'health',
  //       description: 'Examining the relevance of Ellen White\'s health principles in modern medicine and their application to Caribbean lifestyle and health challenges.',
  //       content: 'Full article content would go here... Scientific and spiritual perspectives.',
  //       readingTime: '15 min read',
  //       tags: ['Health Message', 'Ellen White', 'Prevention', 'Wholistic Health', 'Caribbean'],
  //       viewCount: 234,
  //       likeCount: 134,
  //       commentCount: 19,
  //       featured: true,
  //       scripture: '3 John 1:2'
  //     },
  //     {
  //       id: '9',
  //       title: 'Financial Stewardship: Managing God\'s Resources',
  //       author: 'Elder Mark Paul',
  //       authorRole: 'Stewardship Director',
  //       church: 'Mahaut Seventh-day Adventist Church',
  //       date: new Date(2024, 5, 18),
  //       category: 'lifestyle',
  //       description: 'Biblical principles of financial management, tithing, and stewardship for Adventist families in the Dominican economic context.',
  //       content: 'Full article content would go here... Practical financial guidance.',
  //       readingTime: '13 min read',
  //       tags: ['Stewardship', 'Finance', 'Tithing', 'Budgeting', 'Generosity'],
  //       viewCount: 167,
  //       likeCount: 98,
  //       commentCount: 14,
  //       featured: false,
  //       scripture: 'Malachi 3:10'
  //     },
  //     {
  //       id: '10',
  //       title: 'The Sanctuary Doctrine: Understanding Christ\'s Ministry',
  //       author: 'Pastor Stephen Bernard',
  //       authorRole: 'Theology Teacher',
  //       church: 'Dominica Seventh-day Adventist School',
  //       date: new Date(2024, 5, 15),
  //       category: 'doctrine',
  //       description: 'A clear explanation of the Adventist understanding of the heavenly sanctuary and Christ\'s ongoing ministry as our High Priest.',
  //       content: 'Full article content would go here... Deep theological exploration.',
  //       readingTime: '16 min read',
  //       tags: ['Sanctuary', 'Doctrine', 'High Priest', 'Atonement', 'Theology'],
  //       viewCount: 189,
  //       likeCount: 112,
  //       commentCount: 21,
  //       featured: false,
  //       scripture: 'Hebrews 8:1-2'
  //     }
  //   ];
  //   setArticles(mockArticles);
  // }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      doctrine: 'bg-blue-50! border-blue-200! text-blue-700!',
      lifestyle: 'bg-green-50! border-green-200! text-green-700!',
      family: 'bg-purple-50! border-purple-200! text-purple-700!',
      health: 'bg-red-50! border-red-200! text-red-700!',
      prophecy: 'bg-orange-50! border-orange-200! text-orange-700!',
      testimony: 'bg-pink-50! border-pink-200! text-pink-700!',
      youth: 'bg-indigo-50! border-indigo-200! text-indigo-700!',
      community: 'bg-teal-50! border-teal-200! text-teal-700!'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50! border-gray-200! text-gray-700!';
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      doctrine: 'bg-blue-100! text-blue-800!',
      lifestyle: 'bg-green-100! text-green-800!',
      family: 'bg-purple-100! text-purple-800!',
      health: 'bg-red-100! text-red-800!',
      prophecy: 'bg-orange-100! text-orange-800!',
      testimony: 'bg-pink-100! text-pink-800!',
      youth: 'bg-indigo-100! text-indigo-800!',
      community: 'bg-teal-100! text-teal-800!'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100! text-gray-800!';
  };

  const getCategoryName = (category: string) => {
    const names = {
      doctrine: 'Doctrine & Theology',
      lifestyle: 'Christian Living',
      family: 'Family & Relationships',
      health: 'Health & Wellness',
      prophecy: 'Prophecy & End Times',
      testimony: 'Testimonies',
      youth: 'Youth & Young Adults',
      community: 'Community & Service'
    };
    return names[category as keyof typeof names] || category;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredArticles = articles.filter(article => {
    const matchesFilter = filter === 'all' || article.category === filter;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const ArticleCard = ({ article }: { article: Article }) => (
    <div className={`bg-white! rounded-lg! shadow-sm! border! ${article.featured ? 'border-blue-300! ring-1! ring-blue-200!' : 'border-gray-200!'} p-6! hover:shadow-md! transition-all! duration-200!`}>
      {/* Header */}
      <div className="flex! justify-between! items-start! mb-4!">
        <div className="flex! flex-wrap! gap-2!">
          <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getCategoryBadge(article.category)}`}>
            {getCategoryName(article.category)}
          </span>
          {article.featured && (
            <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-100! text-yellow-800!">
              Featured
            </span>
          )}
        </div>
        <div className="text-sm! text-gray-500!">
          {article.readingTime}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl! font-semibold! text-gray-900! mb-3!">
        {article.title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600! mb-4! line-clamp-3!">
        {article.description}
      </p>

      {/* Scripture */}
      {article.scripture && (
        <div className="flex! items-center! gap-x-2! mb-3!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-sm! text-gray-700! font-medium!">{article.scripture}</span>
        </div>
      )}

      {/* Author & Details */}
      <div className="space-y-2! mb-4!">
        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-sm! text-gray-700!">
            {article.author} • {article.authorRole}
          </span>
        </div>
        
        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-sm! text-gray-700!">{article.church}</span>
        </div>

        <div className="flex! items-center! gap-x-2!">
          <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm! text-gray-700!">{formatDate(article.date)}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex! items-center! gap-x-4! text-sm! text-gray-500! mb-4!">
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>{article.viewCount}</span>
        </div>
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{article.likeCount}</span>
        </div>
        <div className="flex! items-center! gap-x-1!">
          <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{article.commentCount}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex! flex-wrap! gap-1! mb-4!">
        {article.tags.map(tag => (
          <span key={tag} className="inline-block! px-2! py-1! text-xs! bg-gray-100! text-gray-700! rounded!">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex! gap-x-3!">
        <button
          onClick={() => setSelectedArticle(article)}
          className="flex-1! bg-blue-600! text-white! py-2! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
        >
          Read Article
        </button>
        <button className="px-4! py-2! border! border-blue-600! text-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
          Share
        </button>
      </div>
    </div>
  );

  const ArticleListItem = ({ article }: { article: Article }) => (
    <div className={`bg-white! rounded-lg! shadow-sm! border! ${article.featured ? 'border-blue-300! ring-1! ring-blue-200!' : 'border-gray-200!'} p-6! hover:shadow-md! transition-all! duration-200!`}>
      <div className="flex! flex-col! lg:flex-row! lg:items-start! justify-between!">
        <div className="flex-1!">
          <div className="flex! items-center! gap-x-3! mb-3!">
            <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getCategoryBadge(article.category)}`}>
              {getCategoryName(article.category)}
            </span>
            {article.featured && (
              <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-100! text-yellow-800!">
                Featured
              </span>
            )}
            <span className="text-sm! text-gray-500!">{article.readingTime}</span>
          </div>
          
          <h3 className="text-xl! font-semibold! text-gray-900! mb-2!">
            {article.title}
          </h3>
          
          {article.scripture && (
            <p className="text-sm! text-blue-600! font-medium! mb-2!">
              {article.scripture}
            </p>
          )}

          <p className="text-gray-600! mb-3!">
            {article.description}
          </p>

          <div className="flex! flex-wrap! gap-4! text-sm! text-gray-600! mb-3!">
            <div className="flex! items-center! gap-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{article.author}</span>
            </div>
            <div className="flex! items-center! gap-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{article.church}</span>
            </div>
            <div className="flex! items-center! gap-x-1!">
              <svg className="w-4! h-4! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(article.date)}</span>
            </div>
          </div>

          <div className="flex! flex-wrap! gap-1!">
            {article.tags.map(tag => (
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
              <span>{article.viewCount}</span>
            </div>
            <div className="flex! items-center! gap-x-1!">
              <svg className="w-4! h-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{article.likeCount}</span>
            </div>
          </div>

          <div className="flex! gap-x-2!">
            <button
              onClick={() => setSelectedArticle(article)}
              className="px-4! py-2! text-blue-600! border! border-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!"
            >
              Read
            </button>
            <button className="px-4! py-2! bg-blue-600! text-white! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
              Share
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
            Articles & Blog
          </h1>
          <p className="text-base! sm:text-lg! text-gray-600!">
            Inspiring articles, biblical insights, and practical Christian living advice from Seventh-day Adventist writers across Dominica
          </p>
        </div>

        {/* Controls Card */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mb-4! sm:mb-6! mx-2! sm:mx-0!">
          <div className="flex! flex-col! lg:flex-row! justify-between! items-start! lg:items-center! space-y-4! lg:space-y-0!">
            {/* Search and View Controls */}
            <div className="flex! flex-col! sm:flex-row! space-y-4! sm:space-y-0! sm:gap-x-6! w-full! lg:w-auto!">
              {/* Search */}
              <div className="w-full! sm:w-64!">
                <label htmlFor="search" className="sr-only!">Search articles</label>
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
                    placeholder="Search articles..."
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

            {/* Filter */}
            <div className="flex! items-center! gap-x-3! w-full! lg:w-auto!">
              <label htmlFor="category-filter" className="text-sm! font-medium! text-gray-700! whitespace-nowrap!">
                Filter by category:
              </label>
              <select
                id="category-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full! lg:w-auto! px-3! py-2! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! text-sm!"
              >
                <option value="all">All Categories</option>
                <option value="doctrine">Doctrine & Theology</option>
                <option value="lifestyle">Christian Living</option>
                <option value="family">Family & Relationships</option>
                <option value="health">Health & Wellness</option>
                <option value="prophecy">Prophecy & End Times</option>
                <option value="testimony">Testimonies</option>
                <option value="youth">Youth & Young Adults</option>
                <option value="community">Community & Service</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Articles Section */}
        {featuredArticles.length > 0 && filter === 'all' && (
          <div className="mb-8! mx-2! sm:mx-0!">
            <h2 className="text-xl! font-bold! text-gray-900! mb-4!">Featured Articles</h2>
            <div className="grid! grid-cols-1! md:grid-cols-2! gap-6!">
              {featuredArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* All Articles Grid/List */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-8! text-center! mx-2! sm:mx-0!">
            <svg className="w-12! h-12! text-gray-400! mx-auto! mb-4!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg! font-medium! text-gray-900! mb-2!">No articles found</h3>
            <p className="text-gray-600!">Try adjusting your search or filters to see more articles.</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid! grid-cols-1! md:grid-cols-2! xl:grid-cols-3! gap-6! mx-2! sm:mx-0!">
            {(filter === 'all' ? regularArticles : filteredArticles).map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="space-y-4! mx-2! sm:mx-0!">
            {(filter === 'all' ? regularArticles : filteredArticles).map(article => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </div>
        )}

        {/* Category Legend */}
        <div className="mt-6! bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-4! sm:p-6! mx-2! sm:mx-0!">
          <h3 className="text-lg! font-semibold! text-gray-900! mb-3! sm:mb-4!">Article Categories</h3>
          <div className="flex! flex-wrap! gap-3! sm:gap-4!">
            {Object.entries({
              doctrine: 'Doctrine & Theology',
              lifestyle: 'Christian Living',
              family: 'Family & Relationships',
              health: 'Health & Wellness',
              prophecy: 'Prophecy & End Times',
              testimony: 'Testimonies',
              youth: 'Youth & Young Adults',
              community: 'Community & Service'
            }).map(([category, label]) => (
              <div key={category} className="flex! items-center! gap-x-2!">
                <div className={`w-3! h-3! sm:w-4! sm:h-4! rounded! ${getCategoryBadge(category)}`} />
                <span className="text-xs! sm:text-sm! text-gray-700!">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed! inset-0! bg-black! bg-opacity-50! flex! items-center! justify-center! p-3! sm:p-4! z-50! animate-in! fade-in! duration-200!">
          <div className="bg-white! rounded-lg! max-w-4xl! w-full! max-h-[90vh]! overflow-y-auto! animate-in! slide-in-from-bottom-2! duration-300!">
            <div className="p-4! sm:p-6!">
              <div className="flex! justify-between! items-start! mb-4!">
                <div className="pr-4!">
                  <h2 className="text-2xl! font-bold! text-gray-900! mb-2!">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex! flex-wrap! gap-2!">
                    <span className={`inline-flex! items-center! px-2.5! py-1! rounded-full! text-xs! font-medium! ${getCategoryBadge(selectedArticle.category)}`}>
                      {getCategoryName(selectedArticle.category)}
                    </span>
                    {selectedArticle.featured && (
                      <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-yellow-100! text-yellow-800!">
                        Featured Article
                      </span>
                    )}
                    <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-blue-100! text-blue-800!">
                      {selectedArticle.readingTime}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Author</p>
                      <p className="text-sm! text-gray-600!">{selectedArticle.author}</p>
                      <p className="text-xs! text-gray-500!">{selectedArticle.authorRole}</p>
                    </div>
                  </div>
                  
                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Church</p>
                      <p className="text-sm! text-gray-600!">{selectedArticle.church}</p>
                    </div>
                  </div>

                  <div className="flex! items-start! space-x-3!">
                    <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm! font-medium! text-gray-900!">Published</p>
                      <p className="text-sm! text-gray-600!">{formatDate(selectedArticle.date)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  {selectedArticle.scripture && (
                    <div className="flex! items-start! space-x-3! mb-4!">
                      <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div>
                        <p className="text-sm! font-medium! text-gray-900!">Key Scripture</p>
                        <p className="text-lg! font-semibold! text-gray-600!">{selectedArticle.scripture}</p>
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="bg-gray-50! rounded-lg! p-4!">
                    <h4 className="text-sm! font-medium! text-gray-900! mb-3!">Article Stats</h4>
                    <div className="grid! grid-cols-3! gap-4!">
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-blue-600!">{selectedArticle.viewCount}</div>
                        <div className="text-xs! text-gray-600!">Views</div>
                      </div>
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-red-600!">{selectedArticle.likeCount}</div>
                        <div className="text-xs! text-gray-600!">Likes</div>
                      </div>
                      <div className="text-center!">
                        <div className="text-2xl! font-bold! text-green-600!">{selectedArticle.commentCount}</div>
                        <div className="text-xs! text-gray-600!">Comments</div>
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
                  <p className="text-sm! text-gray-600!">{selectedArticle.description}</p>
                </div>
              </div>

              {/* Article Content Preview */}
              <div className="bg-gray-50! rounded-lg! p-4! mb-6!">
                <h4 className="text-sm! font-medium! text-gray-900! mb-3!">Article Preview</h4>
                <div className="prose! prose-sm! max-w-none!">
                  <p className="text-gray-600! line-clamp-6!">
                    {selectedArticle.content}
                  </p>
                </div>
                <p className="text-xs! text-gray-500! mt-2!">Preview of the article content...</p>
              </div>

              {/* Tags */}
              <div className="flex! flex-wrap! gap-2! mb-6!">
                {selectedArticle.tags.map(tag => (
                  <span key={tag} className="inline-block! px-3! py-1! text-sm! bg-gray-100! text-gray-700! rounded-full!">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex! flex-col! sm:flex-row! space-y-3! sm:space-y-0! sm:space-x-3!">
                <button className="flex-1! bg-blue-600! text-white! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                  Read Full Article
                </button>
                <button className="flex-1! border! border-blue-600! text-blue-600! py-3! px-4! rounded-lg! font-medium! hover:bg-blue-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:ring-offset-2!">
                  Save for Later
                </button>
                <button className="flex-1! border! border-gray-300! text-gray-700! py-3! px-4! rounded-lg! font-medium! hover:bg-gray-50! transition-colors! duration-200! focus:outline-none! focus:ring-2! focus:ring-gray-500! focus:ring-offset-2!">
                  Share Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// 'use client';

// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import useArticleApi from '@/hooks/Resources/useArticleApi';
// import Link from 'next/link';
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';


// interface Article {
//   id: string;
//   title: string;
//   author: string;
//   authorRole: string;
//   church: string;
//   date: Date;
//   category: 'doctrine' | 'lifestyle' | 'family' | 'health' | 'prophecy' | 'testimony' | 'youth' | 'community';
//   description: string;
//   content: any; // Changed to any for Strapi block content
//   readingTime: string;
//   tags: string[];
//   viewCount: number;
//   likeCount: number;
//   commentCount: number;
//   featured: boolean;
//   image?: string;
//   scripture?: string;
//   slug: string;
// }


// // app/articles/[slug]/page.tsx
// export default function ArticleDetail() {
 
  
//   const params = useParams();
//   const slug = params.slug as string;
  
//   const { events: articles, loading, error } = useArticleApi();
//   const [article, setArticle] = useState<any>(null);
//   const [notFound, setNotFound] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   useEffect(() => {
//     if (articles.length > 0) {
//       const foundArticle = articles.find(a => a.slug === slug);
//       if (foundArticle) {
//         setArticle(foundArticle);
//         setNotFound(false);
//       } else {
//         setNotFound(true);
//       }
//     }
//   }, [articles, slug]);

//   // Loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   // Error state
//   if (error || notFound || !article) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">
//             {error ? 'Error Loading Article' : 'Article Not Found'}
//           </h1>
//           <p className="text-gray-600 mb-8">
//             {error ? 'There was an error loading the article.' : 'The article you\'re looking for doesn\'t exist.'}
//           </p>
//           <Link 
//             href="/articles"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//           >
//             Back to Articles
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-6xl mx-auto! px-4! sm:px-6! lg:px-8!">
//           <div className="flex justify-between items-center py-4!">
//             <Link 
//               href="/articles"
//               className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back to Articles
//             </Link>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-4xl mx-auto! px-4! sm:px-6! lg:px-8! py-8!">
//         {/* Article Header */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6! mb-8!">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4!">
//             {article.title}
//           </h1>
          
//           {article.scripture && (
//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4! mb-6!">
//               <p className="text-xl font-semibold text-blue-800">{article.scripture}</p>
//             </div>
//           )}

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4! mb-6!">
//             <div className="flex items-center gap-x-4! text-sm text-gray-600">
//               <span>By {article.author}</span>
//               <span>{article.church}</span>
//               <span>{new Date(article.date).toLocaleDateString()}</span>
//             </div>
//             <div className="flex items-center gap-x-2!">
//               <span className="text-sm text-gray-500">{article.readingTime}</span>
//             </div>
//           </div>

//           <p className="text-gray-700 text-lg leading-relaxed mb-4!">
//             {article.description}
//           </p>
//         </div>

//         {/* Article Content */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6! mb-8!">
//           {article.content ? (
//             <div className="prose prose-lg max-w-none">
//               <BlocksRenderer content={article.content} />
//             </div>
//           ) : (
//             <div className="text-center py-8! text-gray-500">
//               <p>No content available for this article.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// app/articles/[slug]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import useArticleApi from '@/hooks/Resources/useArticleApi';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface Article {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  church: string;
  date: Date;
  category: 'doctrine' | 'lifestyle' | 'family' | 'health' | 'prophecy' | 'testimony' | 'youth' | 'community';
  description: string;
  content: any;
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

// Define proper TypeScript interfaces for the block props
interface HeadingBlockProps {
  children: React.ReactNode;
  level: number;
}

interface ParagraphBlockProps {
  children: React.ReactNode;
}

interface ListBlockProps {
  children: React.ReactNode;
  format: 'ordered' | 'unordered';
}

interface ListItemBlockProps {
  children: React.ReactNode;
}

interface LinkBlockProps {
  children: React.ReactNode;
  url: string;
}

// Create properly typed components for each block type
const blocksRendererConfig = {
  // Headings
  heading: ({ children, level }: HeadingBlockProps) => {
    const baseClasses = "text-gray-900 font-bold mb-4!";
    const levelClasses = {
      1: 'text-3xl sm:text-4xl mt-8! mb-6!',
      2: 'text-2xl sm:text-3xl mt-6! mb-4!',
      3: 'text-xl sm:text-2xl mt-4! mb-3!',
      4: 'text-lg sm:text-xl mt-4! mb-2!',
      5: 'text-base sm:text-lg mt-3! mb-!',
      6: 'text-base font-semibold mt-3! mb-2!',
    };
    
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return (
      <Tag className={`${baseClasses} ${levelClasses[level as keyof typeof levelClasses]}`}>
        {children}
      </Tag>
    );
  },
  
  // Paragraphs
  paragraph: ({ children }: ParagraphBlockProps) => (
    <p className="text-gray-700 leading-relaxed mb-4! text-base">
      {children}
    </p>
  ),
  
  // Lists
  list: ({ children, format }: ListBlockProps) => {
    if (format === 'ordered') {
      return (
        <ol className="list-decimal list-inside space-y-2! my-4!">
          {children}
        </ol>
      );
    }
    return (
      <ul className="list-disc list-inside space-y-2! my-4!">
        {children}
      </ul>
    );
  },
  
  // List items
  'list-item': ({ children }: ListItemBlockProps) => (
    <li className="text-gray-700">
      {children}
    </li>
  ),
  
  // Links
  link: ({ children, url }: LinkBlockProps) => (
    <a 
      href={url} 
      className="text-blue-600 hover:text-blue-800 underline transition-colors"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
};

// Modifiers configuration (for inline text styling)
interface ModifierProps {
  children: React.ReactNode;
}

const modifiersRendererConfig = {
  bold: ({ children }: ModifierProps) => (
    <strong className="font-bold text-gray-900">
      {children}
    </strong>
  ),
  
  italic: ({ children }: ModifierProps) => (
    <em className="italic text-gray-700">
      {children}
    </em>
  ),
};

export default function ArticleDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const { events: articles, loading, error } = useArticleApi();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{id: string; user: string; text: string; date: Date}[]>([]);

  // Fix the infinite loop by properly handling the useEffect dependencies
  useEffect(() => {
    if (articles.length > 0 && slug) {
      const foundArticle = articles.find(a => a.slug === slug);
      if (foundArticle && (!article || article.id !== foundArticle.id)) {
        setArticle(foundArticle);
        // Find related articles (same category, excluding current)
        const related = articles
          .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
          .slice(0, 3);
        setRelatedArticles(related);
      }
    }
  }, [articles, slug, article]); // Added article to dependencies to prevent infinite updates


  const getCategoryBadge = (category: string) => {
    const colors = {
      doctrine: 'bg-blue-100 text-blue-800',
      lifestyle: 'bg-green-100 text-green-800',
      family: 'bg-purple-100 text-purple-800',
      health: 'bg-red-100 text-red-800',
      prophecy: 'bg-orange-100 text-orange-800',
      testimony: 'bg-pink-100 text-pink-800',
      youth: 'bg-indigo-100 text-indigo-800',
      community: 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleLike = () => {
    if (article) {
      setIsLiked(!isLiked);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: Date.now().toString(),
        user: 'Current User',
        text: comment,
        date: new Date()
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4!">Article Not Found</h1>
          <p className="text-gray-600 mb-8!">The article you're looking for doesn't exist.</p>
          <Link 
            href="/articles"
            className="bg-blue-600 text-white px-6! py-3! rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto! px-4! sm:px-6! lg:px-8!">
          <div className="flex justify-between items-center py-4!">
            <Link 
              href="/resources/articles"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>
            <div className="flex items-center gap-x-4!">
              <button
                onClick={handleBookmark}
                className={`p-2! rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'bg-yellow-50 text-yellow-600' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button
                onClick={handleShare}
                className="p-2! text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto! px-4! sm:px-6! lg:px-8! py-8!">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6! mb-8!">
          <div className="flex flex-wrap gap-2! mb-4!">
            <span className={`inline-flex items-center px-3! py-1! rounded-full text-sm font-medium ${getCategoryBadge(article.category)}`}>
              {getCategoryName(article.category)}
            </span>
            {article.featured && (
              <span className="inline-flex items-center px-3! py-1! rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                Featured
              </span>
            )}
            <span className="inline-flex items-center px-3! py-1! rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {article.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4! leading-tight">
            {article.title}
          </h1>

          {article.scripture && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4! mb-6!">
              <div className="flex items-start gap-x-3!">
                <svg className="w-5 h-5 text-blue-600 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-1!">Key Scripture</p>
                  <p className="text-xl font-semibold text-blue-800">{article.scripture}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6! mb-6!">
            <div className="space-y-4!">
              <div className="flex items-start gap-x-3!">
                <svg className="w-5 h-5 text-gray-400 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">Author</p>
                  <p className="text-lg text-gray-700">{article.author}</p>
                  <p className="text-sm text-gray-500">{article.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-x-3!">
                <svg className="w-5 h-5 text-gray-400 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">Church</p>
                  <p className="text-lg text-gray-700">{article.church}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4!">
              <div className="flex items-start gap-x-3!">
                <svg className="w-5 h-5 text-gray-400 mt-0.5! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">Published</p>
                  <p className="text-lg text-gray-700">{formatDate(article.date)}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4!">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Article Stats</h4>
                <div className="grid grid-cols-3 gap-4!">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{article.viewCount}</div>
                    <div className="text-xs text-gray-600">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{article.likeCount + (isLiked ? 1 : 0)}</div>
                    <div className="text-xs text-gray-600">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{article.commentCount + comments.length}</div>
                    <div className="text-xs text-gray-600">Comments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2!">
            {article.tags.map(tag => (
              <span key={tag} className="inline-block px-3! py-1! text-sm bg-gray-100 text-gray-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6! mb-8!">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6! font-medium">
              {article.description}
            </p>
            
            <div className="border-t border-gray-200 pt-6!">
              {article.content && (
                <div className="rich-text-content">
                  <BlocksRenderer 
                    content={article.content} 
                    blocks={blocksRendererConfig as any}
                    modifiers={modifiersRendererConfig}
                  />
                </div>
              )}
              
              {!article.content && (
                <div className="text-gray-700 leading-relaxed space-y-4!">
                  <p>This article doesn't have content yet.</p>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6! mt-8!">
            <div className="flex flex-col sm:flex-row gap-3!">
              <button
                onClick={handleLike}
                className={`flex items-center justify-center px-6! py-3! rounded-lg font-medium transition-colors ${
                  isLiked
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <svg 
                  className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} 
                  stroke={isLiked ? "none" : "currentColor"} 
                  fill={isLiked ? "currentColor" : "none"} 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {isLiked ? 'Liked' : 'Like'}
              </button>
              
              <button
                onClick={handleBookmark}
                className={`flex items-center justify-center px-6! py-3! rounded-lg font-medium transition-colors ${
                  isBookmarked
                    ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <svg 
                  className={`w-5 h-5 mr-2! ${isBookmarked ? 'fill-current' : ''}`} 
                  stroke={isBookmarked ? "none" : "currentColor"} 
                  fill={isBookmarked ? "currentColor" : "none"} 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                {isBookmarked ? 'Saved' : 'Save'}
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center justify-center px-6! py-3! bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6! mb-8!">
          <h2 className="text-2xl font-bold text-gray-900 mb-6!">
            Comments ({article.commentCount + comments.length})
          </h2>

          <form onSubmit={handleCommentSubmit} className="mb-8!">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              rows={4}
              className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
            <div className="flex justify-end mt-3!">
              <button
                type="submit"
                disabled={!comment.trim()}
                className="px-6! py-2! bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post Comment
              </button>
            </div>
          </form>

          <div className="space-y-6!">
            {comments.map(comment => (
              <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start gap-x-3!">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">
                      {comment.user.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-x-2! mb-2!">
                      <span className="font-medium text-gray-900">{comment.user}</span>
                      <span className="text-sm text-gray-500">
                        {comment.date.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {comments.length === 0 && (
              <div className="text-center py-8! text-gray-500">
                <svg className="w-12 h-12 mx-auto! text-gray-300 mb-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6!">
            <h2 className="text-2xl font-bold text-gray-900 mb-6!">Related Articles</h2>
            <div className="grid gap-4!">
              {relatedArticles.map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.slug}`}
                  className="block p-4! border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1!">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-2! text-sm text-gray-500">
                        <span>{relatedArticle.author}</span>
                        <span>{formatDate(relatedArticle.date)}</span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 mt-1! flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
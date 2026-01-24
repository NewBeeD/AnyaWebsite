// app/sermons/[slug]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import useSermonApi from '@/hooks/Resources/useSermonsApi';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

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
  content: any;
  readingTime: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  downloadCount: number;
  language: 'english' | 'spanish' | 'french' | 'creole';
  format: 'article' | 'transcript' | 'outline' | 'study-guide';
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
    const baseClasses = "text-gray-900! font-bold! mb-4!";
    const levelClasses = {
      1: 'text-3xl! sm:text-4xl! mt-8! mb-6!',
      2: 'text-2xl! sm:text-3xl! mt-6! mb-4!',
      3: 'text-xl! sm:text-2xl! mt-4! mb-3!',
      4: 'text-lg! sm:text-xl! mt-4! mb-2!',
      5: 'text-base! sm:text-lg! mt-3! mb-2!',
      6: 'text-base! font-semibold! mt-3! mb-2!',
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
    <p className="text-gray-700! leading-relaxed! mb-4! text-base!">
      {children}
    </p>
  ),
  
  // Lists
  list: ({ children, format }: ListBlockProps) => {
    if (format === 'ordered') {
      return (
        <ol className="list-decimal! list-inside! space-y-2! my-4!">
          {children}
        </ol>
      );
    }
    return (
      <ul className="list-disc! list-inside! space-y-2! my-4!">
        {children}
      </ul>
    );
  },
  
  // List items
  'list-item': ({ children }: ListItemBlockProps) => (
    <li className="text-gray-700!">
      {children}
    </li>
  ),
  
  // Links
  link: ({ children, url }: LinkBlockProps) => (
    <a 
      href={url} 
      className="text-blue-600! hover:text-blue-800! underline! transition-colors!"
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
    <strong className="font-bold! text-gray-900!">
      {children}
    </strong>
  ),
  
  italic: ({ children }: ModifierProps) => (
    <em className="italic! text-gray-700!">
      {children}
    </em>
  ),
};

export default function SermonDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const { events: sermons, loading, error } = useSermonApi();
  const [sermon, setSermon] = useState<Sermon | null>(null);
  const [relatedSermons, setRelatedSermons] = useState<Sermon[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{id: string; user: string; text: string; date: Date}[]>([]);

  // Fix the infinite loop by properly handling the useEffect dependencies
  useEffect(() => {
    if (sermons.length > 0 && slug) {
      const foundSermon = sermons.find(s => s.slug === slug);
      if (foundSermon && (!sermon || sermon.id !== foundSermon.id)) {
        setSermon(foundSermon);
        // Find related sermons (same series or language, excluding current)
        const related = sermons
          .filter(s => (s.series === foundSermon.series || s.language === foundSermon.language) && s.id !== foundSermon.id)
          .slice(0, 3);
        setRelatedSermons(related);
      }
    }
  }, [sermons, slug, sermon]);

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

  const handleLike = () => {
    if (sermon) {
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
          title: sermon?.title,
          text: sermon?.description,
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

  const handleDownload = () => {
    // In a real app, this would trigger a file download
    alert('Download functionality would be implemented here');
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
      <div className="min-h-screen! bg-gray-50! flex! items-center! justify-center!">
        <div className="animate-spin! rounded-full! h-12! w-12! border-b-2! border-blue-600!"></div>
      </div>
    );
  }

  if (error || !sermon) {
    return (
      <div className="min-h-screen! bg-gray-50! flex! items-center! justify-center!">
        <div className="text-center!">
          <h1 className="text-2xl! font-bold! text-gray-900! mb-4!">Sermon Not Found</h1>
          <p className="text-gray-600! mb-8!">The sermon you're looking for doesn't exist.</p>
          <Link 
            href="/resources/sermons"
            className="bg-blue-600! text-white! px-6! py-3! rounded-lg! font-medium! hover:bg-blue-700! transition-colors!"
          >
            Back to Sermons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen! bg-gray-50! py-4! sm:py-8!">
      <div className="max-w-4xl! mx-auto! px-3! sm:px-6! lg:px-8!">
        
        {/* Header Section */}
        <div className="mb-6! sm:mb-8!">
          <div className="flex! justify-between! items-start! mb-4!">
            <Link 
              href="/resources/sermons"
              className="flex! items-center! text-gray-600! hover:text-gray-900! transition-colors! mb-4!"
            >
              <svg className="w-5! h-5! mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Sermons Library
            </Link>
            <div className="flex! items-center! space-x-4!">
              <button
                onClick={handleBookmark}
                className={`p-2! rounded-lg! transition-colors! ${
                  isBookmarked 
                    ? 'bg-yellow-50! text-yellow-600!' 
                    : 'text-gray-400! hover:text-gray-600! hover:bg-gray-100!'
                }`}
              >
                <svg className="w-5! h-5!" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button
                onClick={handleShare}
                className="p-2! text-gray-400! hover:text-gray-600! hover:bg-gray-100! rounded-lg! transition-colors!"
              >
                <svg className="w-5! h-5!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          <h1 className="text-2xl! sm:text-3xl! font-bold! text-gray-900! mb-2!">
            {sermon.title}
          </h1>
          <p className="text-base! sm:text-lg! text-gray-600!">
            {sermon.description}
          </p>
        </div>

        {/* Sermon Header Card */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! mb-6!">
          <div className="flex! flex-wrap! gap-2! mb-4!">
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
            <span className="inline-flex! items-center! px-2! py-1! rounded! text-xs! font-medium! bg-blue-100! text-blue-800!">
              {sermon.readingTime}
            </span>
          </div>

          {/* Scripture */}
          <div className="flex! items-center! gap-x-2! mb-4!">
            <svg className="w-5! h-5! text-gray-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-lg! font-semibold! text-gray-900!">{sermon.scripture}</span>
          </div>

          {sermon.series && (
            <p className="text-sm! text-blue-600! font-medium! mb-4!">
              {sermon.series} {sermon.seriesPart && `• Part ${sermon.seriesPart}`}
            </p>
          )}

          <div className="grid! md:grid-cols-2! gap-6! mb-4!">
            <div className="space-y-4!">
              <div className="flex! items-start! space-x-3!">
                <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <p className="text-sm! font-medium! text-gray-900!">Preacher</p>
                  <p className="text-lg! text-gray-700!">{sermon.preacher}</p>
                </div>
              </div>
              
              <div className="flex! items-start! space-x-3!">
                <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="text-sm! font-medium! text-gray-900!">Church</p>
                  <p className="text-lg! text-gray-700!">{sermon.church}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4!">
              <div className="flex! items-start! space-x-3!">
                <svg className="w-5! h-5! text-gray-400! mt-0.5! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm! font-medium! text-gray-900!">Date</p>
                  <p className="text-lg! text-gray-700!">{formatDate(sermon.date)}</p>
                </div>
              </div>

              <div className="bg-gray-50! rounded-lg! p-4!">
                <h4 className="text-sm! font-medium! text-gray-900! mb-2!">Sermon Stats</h4>
                <div className="grid! grid-cols-3! gap-4!">
                  <div className="text-center!">
                    <div className="text-2xl! font-bold! text-blue-600!">{sermon.viewCount}</div>
                    <div className="text-xs! text-gray-600!">Views</div>
                  </div>
                  <div className="text-center!">
                    <div className="text-2xl! font-bold! text-red-600!">{sermon.likeCount + (isLiked ? 1 : 0)}</div>
                    <div className="text-xs! text-gray-600!">Likes</div>
                  </div>
                  <div className="text-center!">
                    <div className="text-2xl! font-bold! text-green-600!">{sermon.downloadCount}</div>
                    <div className="text-xs! text-gray-600!">Downloads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex! flex-wrap! gap-2!">
            {sermon.tags.map(tag => (
              <span key={tag} className="inline-block! px-3! py-1! text-sm! bg-gray-100! text-gray-700! rounded-full!">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sermon Content */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! mb-6!">
          {sermon.content ? (
            <div className="prose! prose-lg! max-w-none!">
              <BlocksRenderer 
                content={sermon.content} 
                blocks={blocksRendererConfig as any}
                modifiers={modifiersRendererConfig}
              />
            </div>
          ) : (
            <div className="text-center! py-8! text-gray-500!">
              <p>No content available for this sermon.</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! mb-6!">
          <div className="flex! flex-col! sm:flex-row! gap-3!">
            <button
              onClick={handleLike}
              className={`flex! items-center! justify-center! px-6! py-3! rounded-lg! font-medium! transition-colors! ${
                isLiked
                  ? 'bg-red-50! text-red-700! border! border-red-200!'
                  : 'bg-gray-100! text-gray-700! hover:bg-gray-200!'
              }`}
            >
              <svg 
                className={`w-5! h-5! mr-2! ${isLiked ? 'fill-current!' : ''}`} 
                stroke={isLiked ? "none" : "currentColor"} 
                fill={isLiked ? "currentColor" : "none"} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {isLiked ? 'Liked' : 'Like'}
            </button>
            
            <button
              onClick={handleDownload}
              className="flex! items-center! justify-center! px-6! py-3! bg-blue-600! text-white! rounded-lg! font-medium! hover:bg-blue-700! transition-colors!"
            >
              <svg className="w-5! h-5! mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
            
            <button
              onClick={handleShare}
              className="flex! items-center! justify-center! px-6! py-3! border! border-blue-600! text-blue-600! rounded-lg! font-medium! hover:bg-blue-50! transition-colors!"
            >
              <svg className="w-5! h-5! mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6! mb-6!">
          <h2 className="text-2xl! font-bold! text-gray-900! mb-6!">
            Comments ({sermon.likeCount + comments.length})
          </h2>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-8!">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              rows={4}
              className="w-full! px-4! py-3! border! border-gray-300! rounded-lg! focus:outline-none! focus:ring-2! focus:ring-blue-500! focus:border-blue-500! resize-none!"
            />
            <div className="flex! justify-end! mt-3!">
              <button
                type="submit"
                disabled={!comment.trim()}
                className="px-6! py-2! bg-blue-600! text-white! rounded-lg! font-medium! hover:bg-blue-700! transition-colors! disabled:opacity-50! disabled:cursor-not-allowed!"
              >
                Post Comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-6!">
            {comments.map(comment => (
              <div key={comment.id} className="border-b! border-gray-200! pb-6! last:border-b-0!">
                <div className="flex! items-start! space-x-3!">
                  <div className="w-10! h-10! bg-blue-100! rounded-full! flex! items-center! justify-center!">
                    <span className="text-blue-600! font-medium! text-sm!">
                      {comment.user.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1!">
                    <div className="flex! items-center! space-x-2! mb-2!">
                      <span className="font-medium! text-gray-900!">{comment.user}</span>
                      <span className="text-sm! text-gray-500!">
                        {comment.date.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700!">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {comments.length === 0 && (
              <div className="text-center! py-8! text-gray-500!">
                <svg className="w-12! h-12! mx-auto! text-gray-300! mb-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Sermons */}
        {relatedSermons.length > 0 && (
          <div className="bg-white! rounded-lg! shadow-sm! border! border-gray-200! p-6!">
            <h2 className="text-2xl! font-bold! text-gray-900! mb-6!">Related Sermons</h2>
            <div className="grid! gap-4!">
              {relatedSermons.map(relatedSermon => (
                <Link
                  key={relatedSermon.id}
                  href={`/resources/sermons/${relatedSermon.slug}`}
                  className="block! p-4! border! border-gray-200! rounded-lg! hover:border-blue-300! hover:shadow-md! transition-all! duration-200!"
                >
                  <div className="flex! items-start! justify-between!">
                    <div className="flex-1!">
                      <h3 className="font-semibold! text-gray-900! mb-1!">
                        {relatedSermon.title}
                      </h3>
                      <p className="text-sm! text-gray-600! line-clamp-2!">
                        {relatedSermon.description}
                      </p>
                      <div className="flex! items-center! space-x-4! mt-2! text-sm! text-gray-500!">
                        <span>{relatedSermon.preacher}</span>
                        <span>{formatDate(relatedSermon.date)}</span>
                      </div>
                    </div>
                    <svg className="w-5! h-5! text-gray-400! mt-1! flex-shrink-0!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
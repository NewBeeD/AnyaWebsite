import { useState, useEffect } from 'react';

interface BibleVerse {
  book: string;
  text: string;
  version: string;
}

const fallbackVerses: BibleVerse[] = [
  {
    book: "John 3:16",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    version: "NIV"
  },
  {
    book: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
    version: "NIV"
  },
  {
    book: "Jeremiah 29:11",
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    version: "NIV"
  }
];

export const useBibleAPI = () => {
  const [verse, setVerse] = useState<BibleVerse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVerse = async () => {
    setLoading(true);
    setError(null);

    try {
      const apis = [
        'https://bible-api.com/?random=verse',
        'https://labs.bible.org/api/?passage=random&type=json'
      ];

      let success = false;
      
      for (const apiUrl of apis) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000);

          const response = await fetch(apiUrl, { 
            signal: controller.signal 
          });
          
          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            
            if (apiUrl.includes('bible-api.com')) {
              setVerse({
                book: data.reference,
                text: data.text,
                version: data.translation_name || 'NIV'
              });
            } else if (apiUrl.includes('labs.bible.org')) {
              const verseData = Array.isArray(data) ? data[0] : data;
              setVerse({
                book: `${verseData.bookname} ${verseData.chapter}:${verseData.verse}`,
                text: verseData.text,
                version: 'NIV'
              });
            }
            
            success = true;
            break;
          }
        } catch (apiError) {
          console.log(`API ${apiUrl} failed:`, apiError);
          continue;
        }
      }

      if (!success) {
        throw new Error('All Bible APIs failed');
      }

    } catch (err) {
      console.error('Error fetching verse:', err);
      setError('Failed to fetch from API');
      // Use fallback
      const randomFallback = fallbackVerses[Math.floor(Math.random() * fallbackVerses.length)];
      setVerse(randomFallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return { verse, loading, error, refetch: fetchVerse };
};
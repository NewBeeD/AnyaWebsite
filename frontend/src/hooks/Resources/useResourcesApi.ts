import { useState, useEffect } from 'react';

// Your Strapi API base URL - configure this in your environment variables
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

// Type definitions
interface StrapiResponse {
  data: any;
  meta?: any;
  error?: any;
}

interface RequestOptions {
  headers?: Record<string, string>;
  [key: string]: any;
}

export const useStrapi = () => {
  const [data, setData] = useState<StrapiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Helper function to handle API requests
  const request = async (endpoint: string, options: RequestOptions = {}) => {
    setLoading(true);
    setError(null);

    try {
      const url = `${STRAPI_API_URL}${endpoint}`;
      
      const config: RequestInit = {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      };

      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: StrapiResponse = await response.json();
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // GET request
  const get = (endpoint: string, options: RequestOptions = {}) => {
    return request(endpoint, { method: 'GET', ...options });
  };

  // POST request
  const post = (endpoint: string, body: any, options: RequestOptions = {}) => {
    return request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options,
    });
  };

  // PUT request
  const put = (endpoint: string, body: any, options: RequestOptions = {}) => {
    return request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...options,
    });
  };

  // DELETE request
  const del = (endpoint: string, options: RequestOptions = {}) => {
    return request(endpoint, { method: 'DELETE', ...options });
  };

  return {
    data,
    loading,
    error,
    get,
    post,
    put,
    delete: del,
  };
};


// hooks/useStrapi.js
export const useStrapiQuery = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = `${STRAPI_API_URL}${endpoint}`;
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
          },
          ...options,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]); // Remove options from dependencies  

  return { data, loading, error };
};
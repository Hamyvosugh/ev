// app/admin/blog/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Datentyp für Blog-Posts
interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

export default function AdminBlogPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPath, setSelectedPath] = useState('/blog');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [revalidateType, setRevalidateType] = useState('all'); // 'all', 'specific'
  const [selectedPost, setSelectedPost] = useState('');

  // Laden der Blog-Post-Liste
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoadingPosts(true);
        const response = await fetch('/api/blog/list');
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Posts');
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setStatus('Fehler beim Laden der Post-Liste');
      } finally {
        setLoadingPosts(false);
      }
    }

    fetchPosts();
  }, []);

  // Aktualisieren des Pfads basierend auf dem ausgewählten Post
  useEffect(() => {
    if (revalidateType === 'specific' && selectedPost) {
      setSelectedPath(`/blog/${selectedPost}`);
    } else if (revalidateType === 'all') {
      setSelectedPath('/blog');
    }
  }, [revalidateType, selectedPost]);

  const handleRevalidate = async () => {
    try {
      setIsLoading(true);
      setStatus('Revalidierung läuft...');

      const secretKey = prompt('Bitte geben Sie den Sicherheitsschlüssel ein:');
      
      if (!secretKey) {
        setStatus('Revalidierung abgebrochen. Kein Sicherheitsschlüssel eingegeben.');
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/revalidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path: selectedPath,
          secret: secretKey,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(`Revalidierung erfolgreich: ${data.message}`);
      } else {
        setStatus(`Fehler bei der Revalidierung: ${data.message}`);
      }
    } catch (error) {
      setStatus(`Systemfehler: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Blog-Verwaltung</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Seiten neu generieren</h2>
          <p className="mb-4 text-gray-600">
            Nach dem Hinzufügen oder Ändern von Blog-Inhalten können Sie diese Optionen verwenden, 
            um die entsprechenden Seiten neu zu generieren.
          </p>
          
          <div className="mb-4">
            <div className="flex gap-4 mb-4">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="revalidateType" 
                  value="all" 
                  checked={revalidateType === 'all'} 
                  onChange={() => setRevalidateType('all')}
                  className="form-radio h-4 w-4 text-blue-900"
                />
                <span className="ml-2 text-gray-800">Alle Blog-Seiten</span>
              </label>
              
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="revalidateType" 
                  value="specific" 
                  checked={revalidateType === 'specific'} 
                  onChange={() => setRevalidateType('specific')}
                  className="form-radio h-4 w-4 text-blue-900"
                />
                <span className="ml-2 text-gray-800">Spezifischen Post auswählen</span>
              </label>
            </div>
            
            {revalidateType === 'specific' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Post auswählen:</label>
                {loadingPosts ? (
                  <p className="text-gray-800">Lade Posts...</p>
                ) : (
                  <select 
                    value={selectedPost}
                    onChange={(e) => setSelectedPost(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
                  >
                    <option value="">-- Post auswählen --</option>
                    {posts.map((post) => (
                      <option key={post.slug} value={post.slug} className="text-gray-800">
                        {post.title} ({new Date(post.date).toLocaleDateString('de-DE')})
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}
            
            <div className="mt-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Pfad für Revalidierung:</label>
              <input 
                type="text" 
                value={selectedPath}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          
          <button
            onClick={handleRevalidate}
            disabled={isLoading || (revalidateType === 'specific' && !selectedPost)}
            className={`px-4 py-2 rounded-md text-white font-medium ${
              isLoading || (revalidateType === 'specific' && !selectedPost) 
                ? 'bg-gray-400' 
                : 'bg-blue-900 hover:bg-blue-800'
            } transition-colors duration-300`}
          >
            {isLoading ? 'Revalidierung läuft...' : 'Seiten neu generieren'}
          </button>
          
          {status && (
            <div className={`mt-4 p-3 rounded-md ${
              status.includes('erfolgreich') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {status}
            </div>
          )}
        </div>
        
        <div className="border-t pt-6">
          <Link href="/blog" className="text-blue-900 hover:underline">
            Zurück zum Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
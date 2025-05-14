// pages/PostList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sortOrder, setSortOrder] = useState('latest'); // Default to 'latest'

  const fetchPosts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:8000/api/posts');
      setPosts(response.data);
      setFilteredPosts(response.data);
    } catch (err) {
      setError('Failed to fetch posts.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    // Filter posts based on the search query
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort posts based on selected sort order
    if (sortOrder === 'latest') {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setFilteredPosts(filtered);
  }, [searchQuery, posts, sortOrder]);

  return (
    <div className="container mt-4">

      {/* Custom Styling */}
      <style>{`
        .header-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #17a2b8, #6f42c1);
          color: white;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
        }

        .search-input {
          border-radius: 10px;
          border: 1px solid #ddd;
          padding: 12px 16px;
          margin-bottom: 30px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          width: 70%; /* Make search bar wider */
        }

        .post-card {
          background: white;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
          transition: box-shadow 0.2s ease;
        }

        .post-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .post-date {
          font-size: 0.9rem;
          color: black;
          margin-bottom: 8px;
        }

        .sort-filter-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sort-filter-bar select {
          font-size: 0.875rem; /* Smaller font size for the filter */
          width: 15%; /* Set a specific width for the filter dropdown */
          height:15%;
        }

        .sort-filter-bar input {
          width: 70%; /* Search bar width */
        }
      `}</style>

      {/* Header */}
      <div className="header-bar">
        <h1 className="mb-0">All Posts</h1>
        <button className="btn btn-light text-dark fw-semibold" onClick={fetchPosts}>
          Refresh
        </button>
      </div>

      {/* Sort and Filter Bar */}
      <div className="sort-filter-bar">
        {/* Search on Left */}
        <input
          type="text"
          className="form-control search-input"
          placeholder="🔍 Search posts by title or content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Sort on Right */}
        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="latest">Sort by Latest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <div className="mt-3">Loading posts...</div>
        </div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post._id} className="post-card">
            <div className="post-date">
              🗓️ {new Date(post.createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <Post post={post} />
          </div>
        ))
      ) : (
        <h4 className="text-muted">No posts found</h4>
      )}
    </div>
  );
}

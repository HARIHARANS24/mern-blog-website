// pages/PostDetail.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams(); // Get the post ID from the URL

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        setError('Failed to load the post.');
        console.error('Error fetching post', error);
      }
    };

    fetchPost();
  }, [id]); // Re-fetch when `id` changes

  if (error) {
    return <div className="container mt-4 text-danger">{error}</div>;
  }

  if (!post) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {/* Custom CSS */}
      <style>{`
        .post-detail {
          background: #fff;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .post-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .post-image {
          width: 100%;
          max-height: 450px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .post-author {
          font-size: 0.95rem;
          color: #555;
          margin-top: 30px;
        }

        .post-content {
          font-size: 1.1rem;
          line-height: 1.7;
        }
      `}</style>

      <div className="post-detail">
        <h1 className="post-title">{post.title}</h1>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="post-image"
          />
        )}

        <p className="post-content">{post.content}</p>

        <p className="post-author"><strong>Author:</strong> {post.author || 'Unknown'}</p>
      </div>
    </div>
  );
}

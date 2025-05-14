// src/pages/Home.js

import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchLatestPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/posts");
      const sortedPosts = response.data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 10);
      setPosts(sortedPosts);
    } catch (error) {
      console.error("Failed to fetch latest posts:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    fetchLatestPosts();
    fetchCategories();
  }, []);

  return (
    <main>
      {/* Custom CSS */}
      <style>
        {`
          .home-header {
            background: linear-gradient(135deg, #007bff, #6610f2);
            color: white;
            padding: 40px 30px;
            border-radius: 12px;
            margin-bottom: 40px;
          }

          .post-card {
            border: 1px solid #eee;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 24px;
            background-color: #fff;
            transition: box-shadow 0.2s;
          }

          .post-card:hover {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          }

          .category-link {
            font-weight: 500;
            color: #333;
            transition: all 0.2s;
          }

          .category-link:hover {
            color: #007bff;
            text-decoration: underline;
          }

          .list-group-item {
            border: none;
            background-color: #f8f9fa;
            margin-bottom: 5px;
            border-radius: 8px;
          }
        `}
      </style>

      <div className="container mt-4">
        <div className="row">
          {/* Main content */}
          <section className="col-lg-9">
            <div className="home-header">
              <h1 className="mb-2">Welcome to My Blog</h1>
              <p className="mb-0">Explore the latest 10 posts from our community of writers and creators.</p>
            </div>

            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="post-card">
                  <Post post={post} />
                </div>
              ))
            ) : (
              <p>Loading latest posts...</p>
            )}
          </section>

          {/* Sidebar */}
          <aside className="col-lg-3 mb-4">
            <h4 className="mb-3">Categories</h4>
            <ul className="list-group">
              {categories.map((cat) => (
                <li key={cat._id} className="list-group-item">
                  <Link to={`/posts/category/${cat._id}`} className="category-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}

import Post from "../components/Post";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function CategoryPosts() {
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState(null);
    const { id } = useParams();

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/posts/category/${id}`);
            setPosts(response.data);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        }
    };

    const fetchCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/categories/${id}`);
            setCategory(response.data);
        } catch (error) {
            console.error("Failed to fetch category:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
        fetchCategory();
    }, [id]); // Added id to dependency array to refetch if route changes

    if (!category) {
        return <div className="container mt-5 text-center"><p>Loading category...</p></div>;
    }

    return (
        <main>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="mb-4">{category.name}</h1>
                        {
                            posts.length > 0 ? (
                                posts.map((post) => (
                                    <Post key={post._id} post={post} />
                                ))
                            ) : (
                                <h4>No posts available</h4>
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

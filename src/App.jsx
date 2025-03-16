import {useCallback, useEffect, useState} from "react";
import {createPost, deletePost, getPosts, updatePost} from "./api.js";
import PostList from "./PostList.jsx";
import PostForm from "./PostForm.jsx";

function App() {
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleSavePost = useCallback((updatedPost) => {
        if (updatedPost.id) {
            updatePost(updatedPost)
                .then(response => setPosts(posts.map(post => post.id === response.id ? updatedPost : post)))
        } else {
            createPost(updatedPost)
                .then(response => setPosts(prevPosts => [...prevPosts, {
                    id: response.id,
                    title: updatedPost.title,
                    body: updatedPost.body
                }]));
        }
        setShowForm(false);
    }, [posts]);

    const handleCreatePost = () => {
        setShowForm(true);
        setPost({});
    };

    const handleEditPost = useCallback((post) => {
        setPost(post);
        setShowForm(true);
    }, []);

    const handleDeletePost = useCallback((postId) => {
        deletePost(postId).then(() => setPosts(prevPosts => prevPosts.filter(post => post.id !== postId)));
    }, []);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    return (
        <>
            <div className="btn-container">
                <button className="create-btn" type="button" onClick={handleCreatePost}>Створити пост</button>
            </div>

            <PostList posts={posts} onEditPost={handleEditPost} onDeletePost={handleDeletePost}/>

            {showForm &&
                <PostForm post={post}
                          showForm={showForm}
                          onSave={handleSavePost}
                          onCancel={() => setShowForm(false)}/>
            }
        </>
    )
}

export default App

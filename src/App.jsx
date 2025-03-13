import {useCallback, useEffect, useState} from "react";
import {createPost, getPosts, updatePost} from "./api.js";

import PostList from "./PostList.jsx";
import PostForm from "./PostForm.jsx";

function App() {
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleSavePost = useCallback((updatedPost) => {
        if (updatedPost.id) {
            updatePost(updatedPost)
                .then(response => setPosts(posts.map((post) => post.id === response.id ? updatedPost : post)))
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

    const handleEditPost = useCallback((post) => {
        setPost(post);
        setShowForm(true);
    }, []);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    return (
        <>
            <button type="button" onClick={() => setShowForm(prevState => !prevState)}>Створити пост</button>

            <PostList posts={posts} onEditPost={handleEditPost}/>
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

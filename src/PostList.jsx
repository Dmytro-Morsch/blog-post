import {useState} from "react";
import Post from "./Post.jsx";

function PostList({posts, onEditPost, onDeletePost}) {
    const [isOpenSection, setOpenSection] = useState(null);

    const toggleAccordion = (postId) => {
        setOpenSection((prev) => (prev === postId ? null : postId));
    };

    return (
        <>
            {posts.toSorted((a, b) => b.id - a.id)
                .map((post) => (
                    <Post key={post.id} post={post} onDeletePost={() => onDeletePost(post.id)}
                          onEditPost={() => onEditPost(post)}
                          toggleAccordion={() => toggleAccordion(post.id)} isOpenSection={isOpenSection}/>
                ))}
        </>
    );
}

export default PostList;

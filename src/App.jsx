import {useEffect, useState} from "react";
import {getPosts} from "./api.js";
import PostList from "./PostList.jsx";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

  return (
    <>
        <PostList posts={posts}/>
    </>
  )
}

export default App

function PostList({posts}) {
    return (
        <>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <div>{post.body}</div>
                </div>
            ))}
        </>
    );
}

export default PostList;

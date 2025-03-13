function PostList({posts, onEditPost}) {
    return (
        <>
            {posts.toSorted((a, b) => b.id - a.id)
                .map(post => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <h2 className="title">{post.title}</h2>
                            <button className="edit-btn" onClick={() => onEditPost(post)}>Редагувати</button>
                        </div>

                        <div className="body">{post.body}</div>
                    </div>
                ))}
        </>
    );
}

export default PostList;

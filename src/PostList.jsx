function PostList({posts, onEditPost, onDeletePost}) {
    return (
        <>
            {posts.toSorted((a, b) => b.id - a.id)
                .map(post => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <h2 className="title">{post.title}</h2>
                            <div className="btns">
                                <button className="edit-btn" onClick={() => onEditPost(post)}>Редагувати</button>
                                <button className="delete-btn" onClick={() => onDeletePost(post.id)}>Видалити</button>
                            </div>
                        </div>

                        <div className="body">{post.body}</div>
                    </div>
                ))}
        </>
    );
}

export default PostList;

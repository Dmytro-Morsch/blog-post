import {useState} from "react";
import {FaRegTrashAlt} from "react-icons/fa";
import {MdModeEdit} from "react-icons/md";

function PostList({posts, onEditPost, onDeletePost}) {
    const [isOpenSection, setOpenSection] = useState(null);

    const toggleAccordion = (index) => {
        setOpenSection((prev) => (prev === index ? null : index));
    };

    return (
        <>
            {posts.toSorted((a, b) => b.id - a.id)
                .map((post, index) => (
                    <div key={post.id} className="post">
                        <button className={`accordion-btn ${isOpenSection === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}>{post.title}</button>

                        <div className={`accordion-body ${isOpenSection === index ? 'open' : ''}`}>
                            <div className="btns">
                                <button className="edit-btn" onClick={() => onEditPost(post)}>
                                    <MdModeEdit className="icon"/>
                                </button>
                                <button className="delete-btn" onClick={() => onDeletePost(post.id)}>
                                    <FaRegTrashAlt className="icon"/>
                                </button>
                            </div>
                            {post.body}
                        </div>
                    </div>
                ))}
        </>
    );
}

export default PostList;

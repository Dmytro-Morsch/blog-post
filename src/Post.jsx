import {MdModeEdit} from "react-icons/md";
import {FaRegTrashAlt} from "react-icons/fa";
import Confirmation from "./Confirmation.jsx";
import {useCallback, useState} from "react";

function Post({post, onDeletePost, onEditPost, toggleAccordion, isOpenSection}) {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDeletePost = useCallback(() => {
        onDeletePost();
        setShowConfirmation(false);
    }, [onDeletePost]);

    return (
        <div className="post">
            <button className={`accordion-btn ${isOpenSection === post.id ? 'active' : ''}`}
                    onClick={() => toggleAccordion()}>{post.title}</button>

            <div className={`accordion-body ${isOpenSection === post.id ? 'open' : ''}`}>
                <div className="btns">
                    <button className="edit-btn" onClick={() => onEditPost()}>
                        <MdModeEdit className="icon"/>
                    </button>
                    <button className="delete-btn" onClick={() => setShowConfirmation(true)}>
                        <FaRegTrashAlt className="icon"/>
                    </button>
                </div>
                {post.body}
            </div>
            {showConfirmation &&
                <Confirmation onDelete={() => handleDeletePost()}
                              onCancel={() => setShowConfirmation(false)}/>
            }
        </div>
    );
}

export default Post;

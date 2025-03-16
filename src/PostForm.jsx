import {useEffect, useRef, useState} from "react";

function PostForm({post, onSave, onCancel}) {
    const [title, setTitle] = useState(post.title ?? '');
    const [body, setBody] = useState(post.body ?? '');

    const dialogRef = useRef(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, [dialogRef]);

    return (
        <dialog ref={dialogRef} className="post-form-dialog" onCancel={onCancel}>
            <div className="container">
                <div className="field">
                    <label>Заголовок:</label>
                    <input value={title} onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className="field">
                    <label>Текст:</label>
                    <textarea value={body} onChange={e => setBody(e.target.value)}></textarea>
                </div>

                <div className="btns">
                    <button className="save-btn" type="button"
                            onClick={() => onSave({id: post.id, title, body})}>Зберегти
                    </button>
                    <button className="cancel-btn" type="button" onClick={() => onCancel()}>Відхилити</button>
                </div>
            </div>
        </dialog>

    );
}

export default PostForm;

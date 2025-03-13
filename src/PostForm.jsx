import {useEffect, useRef, useState} from "react";

function PostForm({post, showForm, onSave, onCancel}) {
    const [title, setTitle] = useState(post.title ?? '');
    const [body, setBody] = useState(post.body ?? '');

    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current?.open && !showForm) {
            dialogRef.current?.close();
        } else if (!dialogRef.current?.open && showForm) {
            dialogRef.current?.showModal();
        }
    }, [showForm]);

    return (
        <dialog ref={dialogRef} className="post-form" onCancel={onCancel}>
            <div className="container">
                <input value={title} onChange={e => setTitle(e.target.value)}/>
                <textarea value={body} onChange={e => setBody(e.target.value)}></textarea>
                <div>
                    <button type="button" onClick={() => onSave({id: post.id, title, body})}>Зберегти</button>
                    <button type="button" onClick={() => onCancel()}>Відхилити</button>
                </div>
            </div>
        </dialog>

    );
}

export default PostForm;

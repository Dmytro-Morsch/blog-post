import {useEffect, useRef} from "react";

function Confirmation({onDelete, onCancel}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current?.open) {
            dialogRef.current?.close();
        } else if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    return (
        <dialog ref={dialogRef} onCancel={() => onCancel()}>
            <div>Видалити пост?</div>

            <div className="confirmation-btns">
                <button className="delete-btn" onClick={() => onDelete()}>
                    Видалити
                </button>
                <button className="cancel-btn" onClick={() => onCancel()}>
                    Відхилити
                </button>
            </div>
        </dialog>
    );
}

export default Confirmation;

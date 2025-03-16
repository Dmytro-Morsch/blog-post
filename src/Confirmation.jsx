import {useEffect, useRef} from "react";

function Confirmation({onDelete, onCancel}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, [dialogRef]);

    return (
        <dialog ref={dialogRef} className="confirmation-dialog" onCancel={() => onCancel()}>
            <div className="message">Видалити пост?</div>

            <div className="confirmation-btns">
                <button type="button" className="delete-btn" onClick={() => onDelete()}>
                    Видалити
                </button>
                <button type="button" className="cancel-btn" onClick={() => onCancel()}>
                    Відхилити
                </button>
            </div>
        </dialog>
    );
}

export default Confirmation;

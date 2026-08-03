import { useEffect } from "react";

function Modal({ image, onClose }) {
    function handleBackdropClick(event) {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    function handleEscClick(evt) {
        if (evt.key === "Escape") {
            onClose()
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleEscClick)
        return () => {
            window.removeEventListener("keydown", handleEscClick)
        }
    }, [])

    return (
        <div className="overlay" onClick={handleBackdropClick}>
            <div className="modal">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Modal
import ReactDOM from "react-dom";
import style from '../modal/modal.module.css';
import ModalOverlay from '../modaloverlay/modaloverlay.jsx';
import React from 'react';

const modalRoot = document.getElementById("react-modals");


function Modal ({ children, onClose }) {


    React.useEffect(() => {
        const closeModal = () => {
            document.removeEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    closeModal();
                }
            })
            onClose();
        }
    
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        })
    }, [onClose]); 


    return ReactDOM.createPortal(
        (
            <>
            <div className={style.modal_position}  onClick={onClose}>
            <ModalOverlay onClose={onClose} />
            <div className={style.open_modal}>
                {children}
            </div>
            </div>
            </>
        ),
        modalRoot
    );
}

  export default Modal;
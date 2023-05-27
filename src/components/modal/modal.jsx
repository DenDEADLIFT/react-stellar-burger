import ReactDOM from "react-dom";
import style from '../modal/modal.module.css';
import ModalOverlay from '../modaloverlay/modaloverlay.jsx';
import React from 'react';
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function Modal ({ children, onClose }) {

    React.useEffect(() => {

            const handleESCclose = (e) => {
                if (e.key === "Escape") {
                    onClose();
                }
            } 
            document.addEventListener("keydown", handleESCclose); 

            return () => document.removeEventListener("keydown", handleESCclose)  

    }, [onClose]); 

    return ReactDOM.createPortal(
        (
            <div className={style.modal_position}>
                <ModalOverlay onClose={onClose} />
                <div className={style.open_modal}>
                    {children}
                </div>
            </div>
        ),
        modalRoot
    );
}

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

  export default Modal; 
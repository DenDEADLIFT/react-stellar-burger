import ReactDOM from "react-dom";
import style from '../modal/modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import React from 'react';
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");
 
function Modal({ children, onClose, closeButton }) {

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
                    <div className={style.close_icon}>
                    {<CloseIcon onClick={closeButton} />}
                    </div>
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
    closeButton: PropTypes.func.isRequired,
};

export default Modal; 
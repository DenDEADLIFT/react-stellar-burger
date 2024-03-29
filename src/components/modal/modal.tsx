import ReactDOM from "react-dom";
import style from '../modal/modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useEffect, ReactNode } from 'react';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");

interface IModalProps {
    children?: ReactNode;
    onClose: () => void;
    closeButton?: () => void;
}

const Modal = ({ children, onClose, closeButton }: IModalProps) => {

    useEffect(() => {
        const handleESCclose = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        }
        document.addEventListener("keydown", handleESCclose);

        return () => document.removeEventListener("keydown", handleESCclose);
    }, [onClose]);

    return ReactDOM.createPortal(
        (
            <div className={style.modal_position}>
                <ModalOverlay onClose={onClose} />
                <div className={style.open_modal}>
                    <div className={style.close_icon}>
                        {<CloseIcon type="primary" onClick={closeButton} />}
                    </div>
                    {children}
                </div>
            </div>
        ),
        modalRoot as HTMLElement
    );
}

export default Modal;
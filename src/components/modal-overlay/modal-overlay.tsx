import styles from './modal-overlay.module.css';
import { ReactNode } from 'react';

interface IModalOverlayProps {
    onClose: () => void;
}

const ModalOverlay = ({ onClose }: IModalOverlayProps) => {

    return (
        <div className={styles.modal_overlay} onClick={onClose}></div>
    )
}

export default ModalOverlay; 
import styles from './modal-overlay.module.css';
import { IModalProps } from '../types/modal'

const ModalOverlay = ({ onClose }: IModalProps) => {

    return (
        <div className={styles.modal_overlay} onClick={onClose}></div>
    )
}

export default ModalOverlay; 
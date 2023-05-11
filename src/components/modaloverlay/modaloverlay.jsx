import styles from './modaloverlay.module.css';

function ModalOverlay ({onClose}) {
    return (
        <div className={styles.modal_overlay} onClick={onClose}></div>
    )
}

export default ModalOverlay;
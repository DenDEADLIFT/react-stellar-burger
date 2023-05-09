import styles from './modaloverlay.module.css';

function ModalOverlay ({onClose}) {
    return (
        <div className={styles.modal_overlay} onClose={onClose}>

        </div>
    )
}

export default ModalOverlay;
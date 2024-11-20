import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { IoMdClose } from 'react-icons/io';

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
      appElement={document.getElementById('root')}
    >
      <button className={styles.closeIcon} onClick={onRequestClose}>
        <IoMdClose />
      </button>
      <img className={styles.largeImg} src={imageUrl} alt="" />
    </Modal>
  );
}

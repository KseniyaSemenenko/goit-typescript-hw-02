import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { IoMdClose } from 'react-icons/io';

interface ImageModalType {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalType> = ({
  isOpen,
  onRequestClose,
  imageUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
      appElement={document.getElementById('root') as HTMLElement}
    >
      <button className={styles.closeIcon} onClick={onRequestClose}>
        <IoMdClose />
      </button>
      <img className={styles.largeImg} src={imageUrl} alt="" />
    </Modal>
  );
};
export default ImageModal;

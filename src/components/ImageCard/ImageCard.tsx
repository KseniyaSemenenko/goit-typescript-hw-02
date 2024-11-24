import { PhotoInfo } from '../../types';
import { ImageGalleryType } from '../ImageGallery/ImageGallery';
import css from './ImageCard.module.css';

interface ImageCardType {
  item: PhotoInfo;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardType> = ({ item, onClick }) => {
  return (
    <div className={css.photoContainer}>
      <img
        className={css.itemPhoto}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={onClick}
      />
      <div className={css.photoText}>
        <p>{item.alt_description}</p>
        <p>Likes: {item.likes}</p>
      </div>
    </div>
  );
};
export default ImageCard;

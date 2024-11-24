import { PhotoInfo } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export interface ImageGalleryType {
  search: PhotoInfo[] | null;
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryType> = ({ search, onImageClick }) => {
  return (
    <ul className={css.listPhoto}>
      {Array.isArray(search) &&
        search.map(item => {
          return (
            <li className={css.listPhotoItem} key={item.id}>
              <ImageCard
                item={item}
                onClick={() => {
                  onImageClick(item.urls.regular);
                }}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;

import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
export default function ImageGallery({search, onImageClick}) {
    return (
        <ul className={css.listPhoto}>
			{Array.isArray(search) && search.map((item) => {
				return (
					<li className={css.listPhotoItem} key={item.id}>
						<ImageCard item={item} onClick={()=>{onImageClick(item.urls.regular)}} />
					</li>);
	})}
	
</ul>

    )
}
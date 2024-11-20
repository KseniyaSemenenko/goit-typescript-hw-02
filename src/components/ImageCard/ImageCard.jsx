import css from './ImageCard.module.css'

export default function ImageCard({ item, onClick }) {
  return (
    <div className={css.photoContainer} >
      <img className={css.itemPhoto} src={item.urls.small} alt={item.alt_description} onClick={onClick} />
      <div className={css.photoText}>
        <p >{item.alt_description}</p>
        <p>Likes: {item.likes}</p></div>
    </div>
  );
}

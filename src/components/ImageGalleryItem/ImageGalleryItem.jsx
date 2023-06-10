import css from './ImageGalleryItem.module.css'

export function ImageGalleryItem({ smallImage, description }) {
  return (
    <li className={css.galleryitem}>
      <img className={css.galleryitemimage}  src={smallImage} alt={description} />
    </li>
  );
}

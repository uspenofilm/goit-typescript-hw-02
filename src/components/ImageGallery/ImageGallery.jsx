import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ photos, onClick }) {
  return (
    <div className={css.galleryContainer}>
      <ul className={css.list}>
        {photos.map((photo) => (
          <li key={photo.id} className={css.item}>
            <ImageCard image={photo} onClick={onClick}></ImageCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

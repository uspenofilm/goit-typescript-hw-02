import { Photos } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type Props = {
  photos: Array<Photos>;
  onClick: (firstArg: string, secondArg: string) => void;
};

export default function ImageGallery({ photos, onClick }: Props) {
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

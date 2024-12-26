import css from "./ImageCard.module.css";
import { Photos } from "../App/App.types";

type Props = {
  image: Photos;
  onClick: (firstArg: string, secondArg: string) => void;
};

export default function ImageCard({
  image: { urls, description },
  onClick,
}: Props) {
  return (
    <div className={css.imageCardContainer}>
      <img
        src={urls.small}
        alt={description}
        className={css.image}
        onClick={() => {
          onClick(urls.regular, description);
        }}
      />
    </div>
  );
}

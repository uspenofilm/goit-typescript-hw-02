import css from "./ImageCard.module.css";

export default function ImageCard({ image: { urls, description }, onClick }) {
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

import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button type="submit" className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}

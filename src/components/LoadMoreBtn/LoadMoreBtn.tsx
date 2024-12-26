import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <button type="submit" className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}

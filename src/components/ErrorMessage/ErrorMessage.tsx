import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return <p className={css.errorMessage}>No results found. Please try again</p>;
}

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { getPhotos } from "../axiosRequest";
import { useState, useEffect } from "react";
import css from "./App.module.css";
import { Photos } from "./App.types";

export default function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState<Array<Photos>>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const onHandleSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
    setPhotos([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results, totalPages } = await getPhotos(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setPhotos((prevResults) => [...prevResults, ...results]);
        setIsVisible(page < totalPages);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  function openModal(url: string, alt: string) {
    setIsOpen(true);
    setModalUrl(url);
    setModalAlt(alt);
  }

  function closeModal() {
    setIsOpen(false);
    setModalAlt("");
    setModalUrl("");
  }

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onHandleSubmit} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={openModal} />
      )}
      {photos.length > 0 && !isVisible && <LoadMoreBtn onClick={onLoadMore} />}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {isEmpty && <ErrorMessage />}
      <ImageModal
        onClose={closeModal}
        isOpen={modalIsOpen}
        url={modalUrl}
        alt={modalAlt}
      />
    </div>
  );
}

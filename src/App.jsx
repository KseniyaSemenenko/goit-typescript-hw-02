import { useEffect, useState } from 'react';
import { searchResult } from './articles-api';
import { Toaster } from 'react-hot-toast';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import css from './App.module.css';

const App = () => {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchValue, setSearchValue] = useState(null);
  const [btnLoadMore, setBtnLoadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const handleSubmit = inputValue => {
    setSearchValue(inputValue);
    setPage(1);
    setBtnLoadMore(false);
  };
  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };
  const openModal = imageUrl => {
    setSelectedPhoto(imageUrl);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto('');
  };

  useEffect(() => {
    if (searchValue === null) return;
    const handleSubmitBySearchValue = async () => {
      setLoading(true);
      setError(false);

      try {
        const { results, totalPages: total } = await searchResult(
          searchValue,
          page
        );
        setSearch(prevSearch =>
          page === 1 ? results : [...prevSearch, ...results]
        );
        setTotalPages(total);
        setBtnLoadMore(true);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSubmitBySearchValue();
  }, [searchValue, page]);

  return (
    <div>
      <SearchBar onHandleSubmit={handleSubmit} />
      <Toaster />
      {searchValue && (!search || search.length === 0) ? <p className={css.textNotFound}>Nothing was found for your request!🤷‍♂️ Try again😉</p> :<ImageGallery search={search} onImageClick={openModal} />}
      {loading && (
        <div className={css.loading}>
          <Loader />
        </div>
      )}
      {error && <ErrorMessage />}
      {btnLoadMore && page < totalPages && (
        <LoadMoreBtn changePage={changePage} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedPhoto}
      />
    </div>
  );
};

export default App;

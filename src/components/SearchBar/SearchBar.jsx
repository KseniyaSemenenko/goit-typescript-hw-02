import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar({ onHandleSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.search.value.trim();
    if (inputValue === '') {
      toast.error('Enter a search word!', {
        duration: 2000,
        style: {
          fontSize: 30,
        },
      });
      return;
    }
    onHandleSubmit(inputValue);

    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.headerForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          <CiSearch className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
}

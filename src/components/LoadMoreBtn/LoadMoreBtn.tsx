import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnType {
  changePage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnType> = ({ changePage }) => {
  return (
    <div className={css.loadMoreContainer}>
      <button onClick={changePage} className={css.loadMoreBtn} type="submit">
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;

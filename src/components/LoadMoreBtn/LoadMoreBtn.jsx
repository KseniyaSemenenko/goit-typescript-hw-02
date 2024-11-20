import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({changePage}) {
    return (
        <div className={css.loadMoreContainer}>
            <button onClick={changePage} className={css.loadMoreBtn} type="submit">Load more</button>
        </div>
        
    )
}
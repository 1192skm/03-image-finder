import css from './Button.module.css'
export function BtnLoadMore({ onClick }) {
    return (
      <button onClick={onClick} className={css.button} type="button">
        Load more
      </button>
    );
}
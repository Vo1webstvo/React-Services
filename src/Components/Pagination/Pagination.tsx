import { nextPage, prevPage } from '../../redux/countrySlice/countrySlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

import styles from './pagination.module.scss';
const Pagination = () => {
  const { page, totalPages } = useAppSelector((state) => state.countryData);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination__btn}
        onClick={() => dispatch(prevPage())}
        disabled={page === 1}>
        {'<'}
      </button>
      <button
        className={styles.pagination__btn}
        onClick={() => dispatch(nextPage())}
        disabled={page === totalPages}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;

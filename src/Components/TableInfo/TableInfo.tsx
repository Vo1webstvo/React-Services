import styles from './tableinfo.module.scss';
import TableItemList from '../TableItemList/TableItemList';
import Pagination from '../Pagination/Pagination';
const TableInfo = () => {
  return (
    <div className={styles.tableInfo}>
      <div className={styles.tableInfo__title}>
        Российские компании с наибольшим числом работников
      </div>
      <Pagination />
      <div className={styles.tableInfo__wrapper}>
        <div className={styles.tableInfo__wrapper__header}>
          <div className={`${styles.tableInfo__wrapper__header_94px}`}>Название</div>
          <div className={styles.tableInfo__wrapper__header_94px}>
            Кол-во <br /> акций
            <span className={styles.tableInfo__currency}>ШТ.</span>
          </div>
          <div className={styles.tableInfo__wrapper__header_94px}>
            Средняя <br /> цена
            <span className={styles.tableInfo__currency}>₽</span>
          </div>
          <div className={styles.tableInfo__wrapper__header_94px}>
            Текущая <br /> цена
            <span className={styles.tableInfo__currency}>₽</span>
          </div>
          <div className={styles.tableInfo__wrapper__header_94px}>
            Цель
            <span className={styles.tableInfo__currency}>₽</span>
          </div>
          <div className={styles.tableInfo__wrapper__header_94px}>
            Потенциал <br />
            роста
            <span className={styles.tableInfo__currency}>%</span>
          </div>
          <div className={styles.tableInfo__wrapper__header_94px}>
            Доходность
            <span className={styles.tableInfo__currency}>%</span>
          </div>
          <div className={styles.tableInfo__wrapper__header_94px}>
            Доля
            <span className={styles.tableInfo__currency}>%</span>
          </div>
          <div className={styles.tableInfo__wrapper__header_94px}>
            Дата
            <span className={styles.tableInfo__currency}>%</span>
          </div>
        </div>

        <TableItemList />
      </div>

      <ul></ul>
    </div>
  );
};

export default TableInfo;

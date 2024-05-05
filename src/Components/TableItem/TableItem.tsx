import React from 'react';
import { useAppDispatch } from '../../redux/hook.ts';
import { IData } from '../../interface/dataInterface';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/Routes.ts';

import styles from './tableItem.module.scss';
import { setSelectedCompany } from '../../redux/countrySlice/countrySlice.ts';

type TableItemProps = {
  data: IData;
  style?: React.CSSProperties;
};

const TableItem = ({ data, style }: TableItemProps) => {
  const dispatch = useAppDispatch();
  const riskLevelMatch = data['Потенциал роста']?.match(/[-+]?\d*([.,]?\d+)?/g);
  const riskLevelNumber = riskLevelMatch ? parseFloat(riskLevelMatch[0]) : null;
  const checkNumber = riskLevelNumber && riskLevelNumber >= 0 ? 'green' : 'red';

  return (
    <>
      <div className={`${styles.tableItem}`} style={style}>
        <div className={`${styles.tableItem__list} ${styles.tableItem__w235}`}>{data.компания}</div>
        <div className={styles.tableItem__list}>{data.Потенциал}</div>
        <div className={styles.tableItem__list}>{data['Точка входа']}</div>
        <div className={styles.tableItem__list}>{data['Текущая цена']}</div>
        <div className={styles.tableItem__list}>{data.тикер}</div>
        <div
          className={styles.tableItem__list}
          style={{
            color: checkNumber === 'green' ? 'green' : 'red',
          }}>
          {data['Потенциал роста']}
        </div>
        <div className={styles.tableItem__list}>{data['Ср-срочн. потенциал']}</div>
        <div className={styles.tableItem__list}>{data.доля}</div>
        <div className={styles.tableItem__list}>
          {new Date().toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </div>
      </div>

      <div className={styles.mobile}>
        <Link
          to={`${ROUTES.SOLOCOMPANY}${data.компания}`}
          onClick={() => dispatch(setSelectedCompany(data))}>
          {data.компания}
        </Link>
      </div>
    </>
  );
};

export default TableItem;

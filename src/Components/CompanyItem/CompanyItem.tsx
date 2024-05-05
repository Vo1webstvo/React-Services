import { useAppSelector } from '../../redux/hook';
import styles from './companyItem.module.scss';
const CompanyItem = () => {
  const { soloCompany } = useAppSelector((state) => state.countryData);

  return (
    <>
      {soloCompany && (
        <div className={styles.companyItem}>
          <div className={styles.companyItem__header}>
            <div className={styles.companyItem__header}>
              <div className={`${styles.companyItem__header_94px}`}>Название</div>
              <div className={styles.companyItem__header_94px}>
                Кол-во <br /> акций
                <span className={styles.companyItem__currency}>ШТ.</span>
              </div>
              <div className={styles.companyItem__header_94px}>
                Средняя <br /> цена
                <span className={styles.companyItem__currency}>₽</span>
              </div>
              <div className={styles.companyItem__header_94px}>
                Текущая <br /> цена
                <span className={styles.companyItem__currency}>₽</span>
              </div>
              <div className={styles.companyItem__header_94px}>
                Цель
                <span className={styles.companyItem__currency}>₽</span>
              </div>
              <div className={styles.companyItem__header_94px}>
                Потенциал <br />
                роста
                <span className={styles.companyItem__currency}>%</span>
              </div>
              <div className={styles.companyItem__header_94px}>
                Доходность
                <span className={styles.companyItem__currency}>%</span>
              </div>
              <div className={styles.companyItem__header_94px}>
                Доля
                <span className={styles.companyItem__currency}>%</span>
              </div>
              <div className={styles.companyItem__header_94px}>
                Дата
                <span className={styles.companyItem__currency}>%</span>
              </div>
            </div>
          </div>
          <div className={styles.companyItem__content}>
            <div className={styles.companyItem__content__list}>{soloCompany.компания}</div>
            <div className={styles.companyItem__content__list}>{soloCompany.Потенциал}</div>
            <div className={styles.companyItem__content__list}>{soloCompany['Точка входа']}</div>
            <div className={styles.companyItem__content__list}>{soloCompany['Текущая цена']}</div>
            <div className={styles.companyItem__content__list}>{soloCompany.тикер}</div>
            <div className={styles.companyItem__content__list}>
              {soloCompany['Потенциал роста']}
            </div>
            <div className={styles.companyItem__content__list}>
              {soloCompany['Ср-срочн. потенциал']}
            </div>
            <div className={styles.companyItem__content__list}>{soloCompany.доля}</div>
            <div className={styles.companyItem__content__list}>
              {new Date().toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyItem;

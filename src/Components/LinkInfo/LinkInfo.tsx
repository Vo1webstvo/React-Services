import { useState } from 'react';
import { countryInfo } from '../../utils/countryLink';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/Routes';

import styles from './linkInfo.module.scss';

const LinkInfo = () => {
  const [active, setActive] = useState<number>(0);

  const toggleActive = (index: number) => {
    setActive(index);
  };

  return (
    <div className={styles.linkInfo}>
      <h2 className={styles.linkInfo__title}>Портфели</h2>
      <div className={styles.linkInfo__navContainer}>
        <div className={styles.linkInfo__nav}>
          {['Unity', 'ideas'].map((item, index) => (
            <li
              key={index}
              className={`${styles.linkInfo__nav_item} ${
                active === index ? styles.linkInfo__active : ''
              }`}
              onClick={() => toggleActive(index)}>
              {item}
            </li>
          ))}
        </div>
        <hr className={styles.linkInfo__line} />
      </div>

      <div className={styles.linkInfo__country}>
        {countryInfo &&
          countryInfo.map((item) => (
            <div key={item.country}>
              <h3 className={styles.linkInfo__country_title}>{item.country}</h3>
              <ul className={styles.linkInfo__country_list}>
                <li className={styles.linkInfo__country_item}>
                  <Link to={`${ROUTES.BRIEFCASES}${item.id}`}>{item.a}</Link>
                </li>
                <li className={styles.linkInfo__country_item}>
                  <Link to={`${ROUTES.BRIEFCASES}${item.id}`}>{item.b}</Link>
                </li>
                <li className={styles.linkInfo__country_item}>
                  <Link to={`${ROUTES.BRIEFCASES}${item.id}`}>{item.с}</Link>
                </li>
                <li className={styles.linkInfo__country_item}>
                  <Link to={`${ROUTES.BRIEFCASES}${item.id}`}>{item.d}</Link>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LinkInfo;

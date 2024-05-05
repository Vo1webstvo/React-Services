import { useEffect } from 'react';
import TableItem from '../TableItem/TableItem';
import Skeleton from '../Skeleton/Skeleton';
import { getCountries } from '../../redux/countrySlice/countrySlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { IData } from '../../interface/dataInterface';
import { useParams } from 'react-router-dom';

import styles from './tableItemList.module.scss';

const TableItemList = () => {
  const dispatch = useAppDispatch();
  const { countries, status } = useAppSelector((state) => state.countryData);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getCountries(id));
    }
  }, [dispatch]);

  return (
    <div className={styles.tableItemList}>
      {status === 'loading' ? <Skeleton /> : <View data={countries} />}
    </div>
  );
};

export default TableItemList;

const View = (props: { data: IData[] }) => {
  const { data } = props;
  const { startIndex, endIndex } = useAppSelector((state) => state.countryData);

  const VisibleItems = data.slice(startIndex, endIndex);

  return VisibleItems.map((item, i) => (
    <TableItem
      style={{ backgroundColor: i % 2 !== 0 ? '#f8f8f8' : '' }}
      key={i}
      data={{ ...item }}
    />
  ));
};

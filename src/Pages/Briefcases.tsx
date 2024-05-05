import { useParams } from 'react-router-dom';
import Header from '../Components/Header/Header';
import TableInfo from '../Components/TableInfo/TableInfo';
import { ROUTES } from '../utils/Routes';
const Briefcases = () => {
  const { id } = useParams();
  return (
    <>
      <div className="container">
        <div style={{ display: 'flex', gap: '8px' }}>
          <Header children={['Главная']} link={ROUTES.HOME} />
          <Header children={['Портфели']} link={`${ROUTES.BRIEFCASES}${id}`} />
        </div>
        <TableInfo />
      </div>
    </>
  );
};

export default Briefcases;

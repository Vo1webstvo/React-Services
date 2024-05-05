import Header from '../Components/Header/Header.tsx';
import { ROUTES } from '../utils/Routes.ts';
import { useParams } from 'react-router-dom';
import CompanyItem from '../Components/CompanyItem/CompanyItem.tsx';

const SoloCompany = () => {
  const { id } = useParams();
  return (
    <>
      <div className="container">
        <div style={{ display: 'flex', gap: '8px' }}>
          <Header children={['Главная']} link={ROUTES.HOME} />
          <Header children={['Портфели']} link={`${ROUTES.BRIEFCASES}${id}`} />
        </div>
        <CompanyItem />
      </div>
    </>
  );
};

export default SoloCompany;

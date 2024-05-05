import Header from '../Components/Header/Header';
import LinkInfo from '../Components/LinkInfo/LinkInfo';
import { ROUTES } from '../utils/Routes';

const Home = () => {
  return (
    <>
      <div className="container">
        <Header children={['Главная']} link={ROUTES.HOME} />
        <LinkInfo />
      </div>
    </>
  );
};

export default Home;

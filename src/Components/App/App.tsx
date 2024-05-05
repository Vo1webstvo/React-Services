import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import Briefcases from '../../Pages/Briefcases';
import { ROUTES } from '../../utils/Routes';
import SoloCompany from '../../Pages/SoloCompany.tsx';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={`${ROUTES.BRIEFCASES}:id`} element={<Briefcases />} />
        <Route path={`${ROUTES.SOLOCOMPANY}:id`} element={<SoloCompany />} />
        <Route path={ROUTES.ERROR} element={<h1>Такой страницы не существует</h1>} />
      </Routes>
    </div>
  );
}

export default App;

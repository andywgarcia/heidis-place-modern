import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DistinctiveFraming from './pages/DistinctiveFraming';
import NeedleworkSpecialist from './pages/NeedleworkSpecialist';
import AUniqueTouch from './pages/AUniqueTouch';
import Quality from './pages/Quality';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="distinctive-framing" element={<DistinctiveFraming />} />
          <Route path="needlework-specialist" element={<NeedleworkSpecialist />} />
          <Route path="a-unique-touch" element={<AUniqueTouch />} />
          <Route path="quality" element={<Quality />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

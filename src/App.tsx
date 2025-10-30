import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/:serviceId" element={<ServiceDetail />} />
    </Routes>
  );
}

export default App;
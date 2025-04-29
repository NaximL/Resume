import Home from './pages/Home'; 
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Navigator() {
  return (
    <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Home />} /> 
        </Routes>
    </BrowserRouter>

  );
}

export default Navigator;

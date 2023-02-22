import './App.css';
import { Navbar } from './components/organisms/Navbar';
import { Footer } from './components/organisms/Footer'
import { PageTemplate } from './components/templates/PageTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'  element={<HomePage/>} />
          <Route path='*' element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
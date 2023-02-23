import './App.css';
import { Navbar } from './components/organisms/Navbar';
import { Footer } from './components/organisms/Footer'
import { PageTemplate } from './components/templates/PageTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { BlogPage } from './components/pages/BlogPage';
import { initializeInformation } from './initializeData';
import { NewPostPage } from './components/pages/NewPostPage';
import { EditPostPage } from './components/pages/EditPostPage';

initializeInformation();
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'  element={<HomePage/>} />
          <Route path='/About'  element={<AboutPage/>} />
          <Route path='/Blog'  element={<BlogPage/>} />
          <Route path='/Blog/:id'  element={<EditPostPage/>} />
          <Route path='/Blog/new' element={<NewPostPage/>} />
          <Route path='/Contact'  element={<ContactPage/>} />
          <Route path='*' element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { BlogPage } from './components/pages/BlogPage';
import { initializeInformation } from './initializeData';
import { NewPostPage } from './components/pages/NewPostPage';
import { PostEditDetails } from './components/pages/PostEditDetails';
import { PostDetails } from './components/pages/PostDetails';

initializeInformation();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Blog/edit/:id" element={<NewPostPage />} />
        <Route path="/Blog/edit/details/:id" element={<PostEditDetails />} />
        <Route path="/Blog/post/:id" element={<PostDetails />} />
        <Route path="/Blog/new" element={<NewPostPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

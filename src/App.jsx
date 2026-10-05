import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import SiteLayout from './components/SiteLayout.jsx';

export default function App() {
  return <BrowserRouter><Routes>
    <Route element={<SiteLayout />}>
      <Route index element={<HomePage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="gallery.html" element={<Navigate to="/gallery" replace />} />
      <Route path="*" element={<main className="wrap main-content"><h1>Page not found</h1><a href="/">Back to the project</a></main>} />
    </Route>
  </Routes></BrowserRouter>;
}

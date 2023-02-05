import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogWithSidebar from './pages/BlogWithSidebar';
import Contacts from './pages/Contacts';
import OurHistory from './pages/OurHistory';
import AboutUs from './pages/AboutUs';

function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog_sidebar" element={<BlogWithSidebar />}>
          <Route />
        </Route>
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="history" element={<OurHistory />} />
      </Route>
    </Routes>
  );
}

export default App;

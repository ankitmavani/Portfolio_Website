import React from 'react';
import Sidebar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import { Outlet, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import PortFolio from './Pages/PortFolio';
import Resume from './Pages/Resume';
import MarkdownViewer from './Pages/MarkdownViewer';

function Layout() {
  
  return (
    <div>
      <main>
        <Sidebar />
        <div className="main-content">
          <NavBar />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Parent route */}
      <Route path="/" element={<Layout />}>
        {/* Child routes */}
        <Route index element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<PortFolio />} />
        <Route path="markdown" element={<MarkdownViewer />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;

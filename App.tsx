import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Retail from './pages/Retail';
import Wholesale from './pages/Wholesale';
import History from './pages/History';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Contact from './pages/Contact';
import InvictaCaseStudy from './pages/InvictaCaseStudy';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/history" element={<History />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/case-study/invicta" element={<InvictaCaseStudy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
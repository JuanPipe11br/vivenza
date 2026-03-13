import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductCatalog } from './pages/ProductCatalog';
import { ProjectsPortfolio } from './pages/ProjectsPortfolio';
import { QuoteRequest } from './pages/QuoteRequest';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<ProductCatalog />} />
          <Route path="portfolio" element={<ProjectsPortfolio />} />
          <Route path="quote" element={<QuoteRequest />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

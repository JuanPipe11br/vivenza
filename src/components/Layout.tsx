import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Typography } from './Typography';
import { Breadcrumbs } from './Breadcrumbs';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Quote', path: '/quote' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 w-full z-50 glass-panel py-6 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
        <Link to="/">
          <Typography variant="label" className="text-brand-on-surface hover:text-brand-primary transition-colors">Vivenza</Typography>
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
             <Link key={link.path} to={link.path}>
                <Typography 
                   variant="label" 
                   className={`hover:text-brand-primary transition-colors ${pathname === link.path ? 'text-brand-primary' : 'text-brand-outline-variant'}`}
                >
                   {link.name}
                </Typography>
             </Link>
          ))}
        </div>
        <button 
          className="md:hidden text-brand-on-surface"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[88px] left-0 w-full bg-brand-surface border-b border-brand-outline-variant/20 z-40 md:hidden">
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
               <Link 
                 key={link.path} 
                 to={link.path}
                 onClick={() => setMobileMenuOpen(false)}
               >
                  <Typography 
                     variant="label" 
                     className={`hover:text-brand-primary transition-colors ${pathname === link.path ? 'text-brand-primary' : 'text-brand-outline-variant'}`}
                  >
                     {link.name}
                  </Typography>
               </Link>
            ))}
          </div>
        </div>
      )}

      {/* Breadcrumbs */}
      {pathname !== '/' && <Breadcrumbs />}

      {/* Main Content Area */}
      <main className="flex-grow pt-[88px]"> {/* Avoid overlap with fixed nav */}
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-surface-container pb-12 pt-24 px-8 md:px-16 flex flex-col md:flex-row justify-between items-end gap-12 border-t border-brand-outline-variant/20">
         <div>
            <Typography variant="headline" className="text-brand-on-surface mb-4">Vivenza.</Typography>
            <Typography variant="label" className="text-brand-on-surface-variant block mt-8">© 2026 Studio Vivenza</Typography>
            <div className="mt-6 flex flex-col gap-2">
               <a href="mailto:hola@vivenza.com" className="font-functional text-sm text-brand-on-surface-variant hover:text-brand-primary transition-colors">hola@vivenza.com</a>
               <a href="tel:+573182199984" className="font-functional text-sm text-brand-on-surface-variant hover:text-brand-primary transition-colors">+57 318 219 9984</a>
               <Typography variant="label" className="text-brand-on-surface-variant mt-2">123 Diseño Street, Ciudad</Typography>
            </div>
         </div>
         <div className="flex gap-16">
            <div className="flex flex-col gap-4">
               <Typography variant="label" className="text-brand-on-surface-variant mb-2">Navigation</Typography>
               {navLinks.slice(0, 3).map(link => (
                  <Link key={link.path} to={link.path} className="font-functional text-sm text-brand-on-surface hover:text-brand-primary transition-colors">
                     {link.name}
                  </Link>
               ))}
            </div>
            <div className="flex flex-col gap-4">
               <Typography variant="label" className="text-brand-on-surface-variant mb-2">Connect</Typography>
               {navLinks.slice(3).map(link => (
                  <Link key={link.path} to={link.path} className="font-functional text-sm text-brand-on-surface hover:text-brand-primary transition-colors">
                     {link.name}
                  </Link>
               ))}
            </div>
            <div className="flex flex-col gap-4">
               <Typography variant="label" className="text-brand-on-surface-variant mb-2">Social</Typography>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-functional text-sm text-brand-on-surface hover:text-brand-primary transition-colors">Instagram</a>
               <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="font-functional text-sm text-brand-on-surface hover:text-brand-primary transition-colors">Pinterest</a>
            </div>
         </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-brand-surface-container border border-brand-outline-variant/30 flex items-center justify-center shadow-lg hover:bg-brand-surface-container-high transition-colors"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-brand-on-surface">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        )}
        <a
          href="https://wa.me/573182199984"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25l-.288-.135a3.75 3.75 0 00-3.57 4.035L1.824 12.5a.75.75 0 01-.72.457l-1.218.382a.75.75 0 01-.456-.728l.622-1.214A3.75 3.75 0 006.75 8.25zm7.5 0l-.288-.135a3.75 3.75 0 00-3.57 4.035L8.269 12.5a.75.75 0 01-.72.457l-1.218.382a.75.75 0 01-.456-.728l.622-1.214A3.75 3.75 0 0014.25 8.25z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

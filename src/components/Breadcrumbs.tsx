import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const breadcrumbMap: Record<string, string> = {
  '/': 'Home',
  '/catalog': 'Catalog',
  '/portfolio': 'Portfolio',
  '/quote': 'Quote Request',
  '/about': 'About Us',
  '/contact': 'Contact',
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);
  
  if (paths.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    ...paths.map((path, index) => ({
      label: breadcrumbMap[`/${path}`] || path.charAt(0).toUpperCase() + path.slice(1),
      path: '/' + paths.slice(0, index + 1).join('/'),
    })),
  ];

  return (
    <nav className="px-8 md:px-16 py-4 bg-brand-surface">
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-brand-outline-variant">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-brand-on-surface-variant">{item.label}</span>
            ) : (
              <Link 
                to={item.path} 
                className="text-brand-on-surface-variant hover:text-brand-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

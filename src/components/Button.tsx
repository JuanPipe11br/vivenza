import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyle = "group relative inline-flex items-center justify-center px-8 py-4 text-xs font-medium tracking-blueprint uppercase overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-gold-brush text-brand-on-primary hover:from-brand-primary-fixed-dim hover:to-brand-primary-fixed-dim",
    secondary: "bg-transparent border border-brand-outline-variant/20 text-brand-on-surface hover:bg-brand-surface-container",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
        {children}
      </span>
    </button>
  );
};

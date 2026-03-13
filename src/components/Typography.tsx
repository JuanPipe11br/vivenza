import React from 'react';

type TypographyProps = {
  variant: 'display' | 'headline' | 'body' | 'label';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export const Typography: React.FC<TypographyProps> = ({ variant, as, children, className = '' }) => {
  const Component = as || defaultElement(variant);

  const baseStyles = {
    display: 'font-editorial font-light text-6xl tracking-editorial-tight',
    headline: 'font-editorial font-normal text-3xl',
    body: 'font-functional font-normal text-base',
    label: 'font-functional font-medium text-xs tracking-blueprint uppercase',
  };

  return (
    <Component className={`${baseStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

function defaultElement(variant: string): React.ElementType {
  switch (variant) {
    case 'display': return 'h1';
    case 'headline': return 'h2';
    case 'body': return 'p';
    case 'label': return 'span';
    default: return 'span';
  }
}

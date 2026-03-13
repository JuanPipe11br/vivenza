import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
};

export const Card: React.FC<CardProps> = ({ children, className = '', elevated = false }) => {
  // "Paper-on-Stone" logic
  // surface-container-lowest on surface background
  const baseStyle = "bg-brand-surface-container-lowest overflow-hidden transition-all duration-500 rounded-none";
  const shadowStyle = elevated ? "shadow-ambient" : "";

  return (
    <div className={`${baseStyle} ${shadowStyle} ${className}`}>
      {children}
    </div>
  );
};

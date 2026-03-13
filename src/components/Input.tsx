import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input: React.FC<InputProps> = ({ label, className = '', id, ...props }) => {
  const inputId = id || label.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={`relative pt-5 ${className}`}>
      <input
        id={inputId}
        className="block w-full bg-transparent border-0 border-b border-brand-outline-variant py-2.5 text-brand-on-surface focus:outline-none focus:ring-0 focus:border-brand-primary transition-colors duration-300 peer"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={inputId}
        className="absolute text-brand-on-surface-variant font-functional text-xs tracking-blueprint uppercase duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-brand-primary cursor-text"
      >
        {label}
      </label>
    </div>
  );
};

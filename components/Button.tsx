import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  children: React.ReactNode;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center transition-all duration-300 text-p-sm tracking-[0.2em] uppercase font-medium rounded-none";
  
  const variants = {
    primary: "bg-primary-800 text-white px-8 py-4 hover:bg-primary-700",
    secondary: "bg-transparent border-sm border-primary-800 text-primary-800 px-8 py-4 hover:bg-primary-800 hover:text-white",
    link: "bg-transparent text-primary-800 border-b border-primary-200 hover:border-primary-800 pb-1 px-0"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1.5} />}
    </button>
  );
};

export default Button;
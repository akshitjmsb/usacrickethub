import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const button = cva(
  'inline-flex items-center justify-center rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-usaBlue text-usaWhite hover:bg-blue-900',
        secondary: 'bg-usaRed text-usaWhite hover:bg-red-800',
        outline: 'border border-usaBlue text-usaBlue hover:bg-usaBlue hover:text-usaWhite',
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-5 py-2 text-base',
        lg: 'px-7 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

export const Button: React.FC<ButtonProps> = ({ className, variant, size, ...props }) => (
  <button className={button({ variant, size, className })} {...props} />
);

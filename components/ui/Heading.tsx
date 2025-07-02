import React from 'react';
import clsx from 'clsx';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading: React.FC<HeadingProps> = ({ level = 1, className, children, ...props }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={clsx(
        'font-extrabold tracking-tight',
        {
          'text-4xl md:text-5xl': level === 1,
          'text-3xl md:text-4xl': level === 2,
          'text-2xl md:text-3xl': level === 3,
          'text-xl md:text-2xl': level === 4,
          'text-lg md:text-xl': level === 5,
          'text-base md:text-lg': level === 6,
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

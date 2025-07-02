import React from 'react';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="w-full max-w-5xl mx-auto px-4 md:px-8">{children}</div>
);

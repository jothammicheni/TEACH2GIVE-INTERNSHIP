import React, { ReactNode } from 'react';

interface CardProps {
    color: string| number; // You can use this for styling
    children: ReactNode;
    className: string;
}

function Card({ children, className ,color}: CardProps) {
  return (
    <div className={className} style={{backgroundColor:color}}>
      {children}
    </div>
  );
}

export default Card;

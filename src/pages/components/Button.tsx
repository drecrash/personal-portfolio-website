import React from 'react';

interface ButtonProps {
  id: string;
  onClick: (id: string) => void;
}

const Button = ({ id, onClick }: ButtonProps) => {
  return <button onClick={() => onClick(id)}>{id}</button>;
};

export default Button;
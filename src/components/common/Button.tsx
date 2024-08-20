import React, { PropsWithChildren } from 'react';

type Props =
  | HTMLButtonElement
  | {
      className?: string;
    };

const Button = ({ children, className = '' }: PropsWithChildren<Props>) => {
  return (
    <button
      className={`p-4 bg-marine-blue capitalize font-semibold text-white rounded-lg cursor-pointer hover:brightness-150 transition duration-300 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;

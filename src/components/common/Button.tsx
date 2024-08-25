import { PropsWithChildren } from 'react';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
};

const Button = ({
  type,
  children,
  className = '',
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`p-4 bg-marine-blue capitalize font-semibold text-white rounded-lg cursor-pointer hover:brightness-150 transition duration-300 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;

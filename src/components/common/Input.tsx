import { useState } from 'react';

type Props = {
  label: string;
  value?: string | number;
  type?: string;
  error: string | undefined;
  placeholder?: string;
  handleChange: (val: number | string) => void;
};

const Input = ({
  label,
  handleChange,
  value = '',
  type = 'text',
  error,
  placeholder,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className='flex flex-col gap-2 items-start ' aria-label='input'>
      <div className='flex items-center justify-between w-full'>
        <label className='font-medium' htmlFor={`html-${label}`}>
          {label}
        </label>
        {!!error && <p className='text-xs font-medium text-[red]'>{error}</p>}
      </div>
      <div
        className={`flex gap-1 w-full border rounded-lg transition duration-300 overflow-hidden hover:border-purplish-blue ${
          isFocused ? 'border-purplish-blue' : 'border-light-gray'
        } ${error ? '!border-[red]' : ''}`}
      >
        <input
          id={`html-${label}`}
          type={type}
          value={value}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => handleChange(e.target.value)}
          className='p-4 w-full outline-none peer'
        />
      </div>
    </div>
  );
};

export default Input;

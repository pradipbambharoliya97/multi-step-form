type Props = {
  value: boolean;
  handleChange: (e: boolean) => void;
};

const Switch = ({ value, handleChange }: Props) => (
  <label className='lex items-center cursor-pointer' htmlFor='switch'>
    <input
      id='switch'
      type='checkbox'
      className='sr-only peer'
      onChange={() => handleChange(!value)}
    />
    <div className="relative w-11 h-6 bg-marine-blue peer-focus:outline-none ring-0 rounded-full peer peer-checked:after:translate-x-[120%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
  </label>
);

export default Switch;

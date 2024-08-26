import { memo } from 'react';
import Button from './Button';

type Props = {
  handleNextClick: () => void;
  handleClickBack: () => void;
  step: number;
};

const Footer = ({ handleNextClick, handleClickBack, step }: Props) => (
  <div className='flex-1 md:hidden flex items-center justify-between text-end h-full'>
    <p
      className={`text-lg text-cool-gray cursor-pointer hover:text-marine-blue transition duration-300 select-none ${
        step === 1 ? 'invisible' : 'visible'
      } `}
      onClick={handleClickBack}
    >
      Go Back
    </p>
    <Button
      className={step === 4 ? 'bg-purplish-blue px-8' : ''}
      onClick={handleNextClick}
    >
      {step === 4 ? 'Confirm' : 'next Step'}
    </Button>
  </div>
);

export default memo(Footer);

import { memo } from 'react';
import { sideBarData } from '../../utils/constant';

type Props = {
  step: number;
};

const Sidebar = ({ step }: Props) => (
  <div className='p-6 lg:p-10 xl:p-12 h-full w-full side-bar-image bg-cover bg-center bg-no-repeat'>
    <div className='flex flex-col gap-8 font-medium'>
      {sideBarData.map((item, index) => (
        <div className='text-white uppercase grid grid-cols-[auto_1fr] items-center gap-y-0 gap-x-6'>
          <p
            className={`size-10 xl:size-12 flex items-center justify-center rounded-full border border-white group-hover:border-light-blue group-hover:bg-light-blue group-hover:text-marine-blue transition duration-300 text-xl row-span-2 ${
              step === index + 1
                ? 'border-light-blue bg-light-blue text-marine-blue'
                : ''
            } `}
          >
            {index + 1}
          </p>
          <p className='text-white/50'>STEP {index + 1}</p>
          <p className='text-lg font-semibold whitespace-nowrap'>{item}</p>
        </div>
      ))}
    </div>
  </div>
);

export default memo(Sidebar);

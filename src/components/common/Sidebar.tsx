import React from 'react';

type Props = {};

const data = ['your info', 'select plan', 'add-ons', 'summary'];
const Sidebar = (props: Props) => {
  return (
    <div className='p-12 h-full side-bar-image bg-cover bg-center bg-no-repeat'>
      <div className='flex flex-col gap-8 font-medium'>
        {data.map((item, index) => (
          <div className='text-white uppercase grid grid-cols-[auto_1fr] gap-y-0 gap-x-6'>
            <p className='size-12 flex items-center justify-center rounded-full border border-white group-hover:border-light-blue group-hover:bg-light-blue group-hover:text-marine-blue transition duration-300 text-xl row-span-2'>
              {index + 1}
            </p>
            <p className='text-white/50'>STEP {index + 1}</p>
            <p className='text-lg font-semibold'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

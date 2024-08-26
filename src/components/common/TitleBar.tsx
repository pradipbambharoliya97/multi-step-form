import { memo } from 'react';

type Props = {
  title: string;
  subTitle: string;
};

const TitleBar = ({ title, subTitle }: Props) => (
  <>
    <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold flex felx-col gap-10 text-marine-blue '>
      {title}
    </h1>
    <p className='text-base md:text-lg text-cool-gray mb-4'>{subTitle}</p>
  </>
);

export default memo(TitleBar);

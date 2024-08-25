import React from 'react';
type Props = {};

const StepFive = (props: Props) => {
  return (
    <div className='py-4 min-h-full flex flex-col items-center justify-center gap-6 text-center'>
      <img src='/images/icon-thank-you.svg' alt='checkmark' />
      <h1 className='text-5xl font-semibold flex felx-col gap-10 text-marine-blue '>
        Thank you!
      </h1>

      <p className='text-lg text-cool-gray mb-4'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default StepFive;

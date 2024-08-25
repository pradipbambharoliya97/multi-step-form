import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import Button from '../common/Button';
import Switch from '../common/Switch';
import { FormDataType, ModeType } from '../../App';

type Props = {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  setStep: (step: number) => void;
};

const data = [
  {
    image: '/images/icon-arcade.svg',
    title: 'Arcade',
    priceM: 10,
    priceY: 100,
  },
  {
    image: '/images/icon-advanced.svg',
    title: 'Advanced',
    priceM: 12,
    priceY: 120,
  },
  {
    image: '/images/icon-pro.svg',
    title: 'Pro',
    priceM: 15,
    priceY: 150,
  },
];

const StepTwo = ({ formData, setFormData, setStep }: Props) => {
  const monthlyMode = useMemo(() => formData.mode === 'mo', [formData]);
  return (
    <div className='py-4 min-h-full flex flex-col gap-3'>
      <h1 className='text-5xl font-semibold flex felx-col gap-10 text-marine-blue '>
        Select your plan
      </h1>
      <p className='text-lg text-cool-gray mb-4'>
        You have the option of monthly or yearly billing.
      </p>

      <div className='flex items-center gap-6'>
        {data.map((item) => (
          <div
            className={`border rounded-xl flex flex-col items-start gap-1 p-4 w-full h-56 hover:border-purplish-blue hover:bg-pastel-blue/10 transition-all duration-300 cursor-pointer ${
              formData.plan.title === item.title
                ? 'border-purplish-blue bg-pastel-blue/10'
                : 'border-light-gray'
            } `}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                plan: item,
              }))
            }
          >
            <div className='flex-1'>
              <img src={item.image} alt='' />
            </div>
            <h1 className='text-lg font-semibold text-marine-blue'>
              {item.title}
            </h1>
            <p className='text-cool-gray font-medium'>
              ${monthlyMode ? item.priceM : item.priceY}/{formData.mode}
            </p>
            {!monthlyMode && (
              <p className='font-normal text-marine-blue transition duration-300'>
                2 months free
              </p>
            )}
          </div>
        ))}
      </div>

      <div className='p-4 w-full flex items-center justify-center gap-6 bg-pastel-blue/10 rounded-lg mt-4 text-lg font-medium duration-300 transition'>
        <p
          className={`transition duration-300 ${
            monthlyMode ? 'text-marine-blue' : 'text-cool-gray'
          }`}
        >
          {ModeType.mo}
        </p>
        <p>
          <Switch
            value={!monthlyMode}
            handleChange={(val) =>
              setFormData((prev) => ({
                ...prev,
                mode: val ? 'yr' : 'mo',
              }))
            }
          />
        </p>
        <p
          className={`transition duration-300 ${
            !monthlyMode ? 'text-marine-blue' : 'text-cool-gray'
          }`}
        >
          {ModeType.yr}
        </p>
      </div>

      <div className='flex-1 flex items-end justify-between text-end h-full'>
        <p
          className='text-lg text-cool-gray cursor-pointer hover:text-marine-blue transition duration-300'
          onClick={() => setStep(1)}
        >
          Go Back
        </p>
        <Button type='submit' onClick={() => setStep(3)}>
          next Step
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;

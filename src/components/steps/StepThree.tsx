import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../common/Button';
import Switch from '../common/Switch';
import { FormDataType } from '../../App';

type Props = {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  setStep: (step: number) => void;
};

const data = [
  {
    title: 'Online service',
    value: 'onlineService',
    subTitle: 'Access to multiplayer games',
    priceM: 1,
    priceY: 10,
  },
  {
    title: 'Larger storage',
    value: 'LargeStorage',
    subTitle: 'Extra 1TB of cloud save',
    priceM: 2,
    priceY: 20,
  },
  {
    title: 'Customizable Profile',
    value: 'customizableProfile',
    subTitle: 'Custom theme on your profile',
    priceM: 2,
    priceY: 20,
  },
];

const StepThree = ({ formData, setFormData, setStep }: Props) => {
  return (
    <div className='py-4 min-h-full flex flex-col gap-3'>
      <h1 className='text-5xl font-semibold flex felx-col gap-10 text-marine-blue '>
        Pick add-ons
      </h1>
      <p className='text-lg text-cool-gray mb-4'>
        Add-ons help enhance your gaming experience.
      </p>

      <div className='flex flex-col gap-6'>
        {data.map((item) => (
          <label
            htmlFor={item.title}
            className={`group grid grid-cols-[auto_1fr_auto] gap-5 items-center border rounded-xl p-4 w-full cursor-pointer hover:border-purplish-blue hover:bg-pastel-blue/10 transition duration-300 select-none ${
              formData.addOns.has(item)
                ? 'border-purplish-blue bg-pastel-blue/10'
                : 'border-light-gray bg-white '
            }`}
          >
            <div>
              <input
                id={item.title}
                type='checkbox'
                checked={formData.addOns.has(item)}
                className='w-5 h-5 hidden peer'
                onChange={(e) =>
                  setFormData((prev) => {
                    const old = new Set(prev.addOns);
                    if (e.target.checked && !old.has(item)) {
                      old.add(item);
                    } else {
                      old.delete(item);
                    }
                    return { ...prev, addOns: old };
                  })
                }
              />
              <div className='size-6 border peer-checked:border-purplish-blue border-light-gray peer-checked:bg-purplish-blue rounded-md text-white flex items-center justify-center select-none transition duration-300'>
                &#10003;
              </div>
            </div>
            <div>
              <h1 className='text-lg font-semibold text-marine-blue'>
                {item.title}
              </h1>
              <h3 className='text-lg font-semibold text-cool-gray'>
                {item.subTitle}
              </h3>
            </div>
            <p className='text-purplish-blue font-medium'>
              ${formData.mode === 'mo' ? item.priceM : item.priceY}/
              {formData.mode}
            </p>
          </label>
        ))}
      </div>

      <div className='flex-1 flex items-end justify-between text-end h-full'>
        <p
          className='text-lg text-cool-gray cursor-pointer hover:text-marine-blue transition duration-300'
          onClick={() => setStep(2)}
        >
          Go Back
        </p>
        <Button type='submit' onClick={() => setStep(4)}>
          next Step
        </Button>
      </div>
    </div>
  );
};

export default StepThree;

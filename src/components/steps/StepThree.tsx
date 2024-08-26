import { Dispatch, memo, SetStateAction } from 'react';
import { stepThreeData } from '../../utils/constant';
import { FormDataType } from '../../utils/type';
import Button from '../common/Button';
import TitleBar from '../common/TitleBar';

type Props = {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  setStep: (step: number) => void;
};

const StepThree = ({ formData, setFormData, setStep }: Props) => (
  <div className='py-4 min-h-full flex flex-col gap-3'>
    <TitleBar
      {...{
        title: 'Pick add-ons',
        subTitle: 'Add-ons help enhance your gaming experience.',
      }}
    />
    <div className='flex flex-col gap-4 md:gap-6'>
      {stepThreeData.map((item) => (
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
            <div className='size-5 md:size-6 border peer-checked:border-purplish-blue border-light-gray peer-checked:bg-purplish-blue rounded-md text-white flex items-center justify-center select-none transition duration-300'>
              &#10003;
            </div>
          </div>
          <div>
            <h1 className='text-lg font-semibold text-marine-blue'>
              {item.title}
            </h1>
            <h3 className='font-semibold text-cool-gray'>{item.subTitle}</h3>
          </div>
          <p className='text-purplish-blue font-medium'>
            ${formData.mode === 'mo' ? item.priceM : item.priceY}/
            {formData.mode}
          </p>
        </label>
      ))}
    </div>

    <div className='flex-1 hidden md:flex items-end justify-between text-end h-full'>
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

export default memo(StepThree);

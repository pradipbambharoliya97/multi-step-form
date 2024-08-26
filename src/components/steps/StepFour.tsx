import { Dispatch, memo, SetStateAction, useMemo } from 'react';
import { FormDataType, ModeType } from '../../utils/type';
import Button from '../common/Button';
import TitleBar from '../common/TitleBar';
import StepFive from './StepFive';

type Props = {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  setStep: (step: number) => void;
  confirmed: boolean;
  setConfirmed: Dispatch<SetStateAction<boolean>>;
};

const StepFour = ({ formData, setStep, confirmed, setConfirmed }: Props) => {
  const monthlyMode = useMemo(() => formData.mode === 'mo', [formData]);
  const totalBill = useMemo(() => {
    const basic = monthlyMode ? formData.plan.priceM : formData.plan.priceY;
    const totalAddOns = Array.from(formData.addOns).reduce((a, c) => {
      if (monthlyMode) {
        return a + c.priceM;
      }
      return a + c.priceY;
    }, 0);
    return basic + totalAddOns;
  }, [formData, monthlyMode]);

  if (confirmed) {
    return <StepFive />;
  }

  return (
    <div className='py-4 min-h-full flex flex-col gap-3'>
      <TitleBar
        {...{
          title: 'Finishing up',
          subTitle: 'Double-check everything looks OK before confirming.',
        }}
      />
      <div className='bg-pastel-blue/10 p-6 rounded-md text-lg'>
        <div className='flex items-center gap-5'>
          <div className='flex-1'>
            <p className='text-marine-blue font-semibold'>
              {formData.plan.title} (
              {ModeType[formData.mode as keyof typeof ModeType]})
            </p>
            <span
              className='text-cool-gray underline hover:text-purplish-blue cursor-pointer transition duration-300'
              onClick={() => setStep(2)}
            >
              Change
            </span>
          </div>
          <p className='text-marine-blue font-medium'>
            $
            {formData.mode === 'mo'
              ? formData.plan.priceM
              : formData.plan.priceY}
            /{formData.mode}
          </p>
        </div>
        <hr className='border border-light-gray my-6' />
        <div className='flex flex-col gap-6'>
          {Array.from(formData.addOns).map((on) => (
            <div className='flex items-center justify-between'>
              <p className='text-lg font-medium text-cool-gray'>{on.title}</p>
              <p>
                +${formData.mode === 'mo' ? on.priceM : on.priceY}/
                {formData.mode}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-between p-6'>
        <p className='text-lg font-medium text-cool-gray'>Total</p>
        <p className='text-xl text-purplish-blue font-semibold'>
          +${totalBill}/{formData.mode}
        </p>
      </div>

      <div className='flex-1 hidden md:flex items-end justify-between text-end h-full'>
        <p
          className='text-lg text-cool-gray cursor-pointer hover:text-marine-blue transition duration-300'
          onClick={() => setStep(3)}
        >
          Go Back
        </p>
        <Button
          type='submit'
          className='bg-purplish-blue px-8'
          onClick={() => setConfirmed(true)}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default memo(StepFour);

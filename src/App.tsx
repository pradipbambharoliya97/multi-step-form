import { memo, useState } from 'react';
import './App.css';
import Footer from './components/common/Footer';
import Sidebar from './components/common/Sidebar';
import StepFour from './components/steps/StepFour';
import StepOne from './components/steps/StepOne';
import StepThree from './components/steps/StepThree';
import StepTwo from './components/steps/StepTwo';
import { sideBarData, stepTwoData } from './utils/constant';
import { FormDataType } from './utils/type';

const initialVal: FormDataType = {
  name: '',
  email: '',
  mobile: '',
  plan: stepTwoData[0],
  mode: 'mo',
  addOns: new Set(),
};

const App = () => {
  const [step, setStep] = useState(1);
  const [stepSubmit, setStepSubmit] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState(initialVal);

  const handleClickBack = () => {
    setStep((prev) => {
      if (prev === 2) {
        setStepSubmit(1);
      }
      return prev - 1;
    });
  };

  const handleNextClick = () => {
    if (step === 4) {
      setConfirmed(true);
      return;
    }
    if (step === 1) {
      setStepSubmit((prev) => prev + 1);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <main
      role='main'
      aria-labelledby='main'
      className='text-sm md:text-base w-full h-[100svh] overflow-hidden bg-light-blue/25 flex flex-col items-center justify-center md:p-4'
    >
      <div className='md:hidden mobie-sidebar w-full h-1/3 bg-center bg-no-repeat bg-cover p-10 flex justify-center gap-4 text-white'>
        {sideBarData.map((_, index) => (
          <p
            className={`size-10 font-semibold xl:size-12 flex items-center justify-center rounded-full border border-white group-hover:border-light-blue group-hover:bg-light-blue group-hover:text-marine-blue transition duration-300 text-xl row-span-2 ${
              step === index + 1
                ? 'border-light-blue bg-light-blue text-marine-blue'
                : ''
            } `}
          >
            {index + 1}
          </p>
        ))}
      </div>

      <section className='md:hidden relative flex gap-6 rounded-3xl w-full h-full max-w-7xl max-h-[75vh] p-6'>
        <div className='bg-white absolute -top-[94px] left-4 right-4 rounded-xl'>
          <div className='w-full xl:w-2/3 xl:mx-auto h-full p-8'>
            {step === 1 && (
              <StepOne
                {...{
                  formData,
                  setFormData,
                  setStep,
                  step,
                  stepSubmit: stepSubmit,
                }}
              />
            )}
            {step === 2 && <StepTwo {...{ formData, setFormData, setStep }} />}
            {step === 3 && (
              <StepThree {...{ formData, setFormData, setStep }} />
            )}
            {step === 4 && (
              <StepFour
                {...{
                  formData,
                  setFormData,
                  setStep,
                  confirmed,
                  setConfirmed,
                }}
              />
            )}
          </div>
        </div>
      </section>

      {!confirmed && (
        <footer className='md:hidden p-4 bg-white w-full'>
          <Footer
            handleClickBack={handleClickBack}
            handleNextClick={handleNextClick}
            step={step}
          />
        </footer>
      )}

      <section className='max-md:hidden flex gap-6 rounded-3xl bg-white w-full h-full max-w-7xl max-h-[75vh] p-6'>
        <div className='relative flex-1 sidebar bg-marine-blue rounded-xl text-white overflow-hidden '>
          <Sidebar {...{ step }} />
        </div>
        <div className='flex-1'>
          <div className='w-full xl:w-2/3 xl:mx-auto h-full'>
            {step === 1 && (
              <StepOne {...{ formData, setFormData, step, setStep }} />
            )}
            {step === 2 && <StepTwo {...{ formData, setFormData, setStep }} />}
            {step === 3 && (
              <StepThree {...{ formData, setFormData, setStep }} />
            )}
            {step === 4 && (
              <StepFour
                {...{ formData, setFormData, setStep, confirmed, setConfirmed }}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default memo(App);

import { useState } from 'react';
import './App.css';
import Sidebar from './components/common/Sidebar';
import StepOne from './components/steps/StepOne';
import StepTwo from './components/steps/StepTwo';
import StepThree from './components/steps/StepThree';
import StepFour from './components/steps/StepFour';
import StepFive from './components/steps/StepFive';

export type FormDataType = {
  name: string;
  email: string;
  mobile: string;
  plan: {
    image: string;
    title: string;
    priceM: number;
    priceY: number;
  };
  mode: keyof typeof ModeType;
  addOns: Set<{
    title: string;
    value: string;
    subTitle: string;
    priceM: number;
    priceY: number;
  }>;
};

export enum ModeType {
  mo = 'Monthly',
  yr = 'Yearly',
}

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    mobile: '',
    plan: {
      image: '/images/icon-arcade.svg',
      title: 'Arcade',
      priceM: 10,
      priceY: 100,
    },
    mode: 'mo',
    addOns: new Set(),
  });

  return (
    <main
      role='main'
      aria-labelledby='main'
      className='text-sm md:text-base w-full h-screen bg-light-blue/25 flex items-center justify-center'
    >
      <section className='flex gap-6 rounded-3xl bg-white w-full h-full max-w-7xl max-h-[75vh] p-6'>
        <div className='relative flex-1 max-w-[21vw] bg-marine-blue rounded-xl text-white overflow-hidden '>
          <Sidebar {...{ step }} />
        </div>
        <div className='flex-1'>
          <div className='w-2/3 mx-auto h-full'>
            {step === 1 && <StepOne {...{ formData, setFormData, setStep }} />}
            {step === 2 && <StepTwo {...{ formData, setFormData, setStep }} />}
            {step === 3 && (
              <StepThree {...{ formData, setFormData, setStep }} />
            )}
            {step === 4 && <StepFour {...{ formData, setFormData, setStep }} />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;

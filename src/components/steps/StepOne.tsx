import { Dispatch, memo, SetStateAction, useCallback, useEffect } from 'react';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { FormDataType } from '../../utils/type';
import Button from '../common/Button';
import Input from '../common/Input';
import TitleBar from '../common/TitleBar';

type Props = {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  setStep: (step: number) => void;
  step: number;
  stepSubmit?: number;
};

const StepOne = ({
  formData,
  setFormData,
  step,
  setStep,
  stepSubmit,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    (data) => {
      setFormData((prev) => ({
        ...prev,
        name: data.name,
        email: data.email,
        mobile: data.mobile,
      }));
      setStep(2);
    },
    [setFormData, setStep]
  );

  useEffect(() => {
    if (step === 1 && stepSubmit && stepSubmit > 1) {
      handleSubmit(onSubmit)();
    }
  }, [handleSubmit, onSubmit, step, stepSubmit]);

  return (
    <div className='py-4 min-h-full flex flex-col gap-3'>
      <TitleBar
        {...{
          title: 'Personal info',
          subTitle:
            'Please provide your name, email address, and phone number.',
        }}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 md:gap-6 lg:gap-8 lg:py-6 h-full flex-1'
        noValidate
      >
        <Controller
          name='name'
          control={control}
          rules={{
            required: 'The field is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters long',
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'Name must contain only letters and spaces',
            },
          }}
          render={({ field }) => (
            <Input
              label='Name'
              placeholder='e.g. Stephen King'
              error={`${errors?.name?.message || ''}`}
              value={field.value}
              handleChange={(val) => {
                field.onChange(val);
              }}
            />
          )}
        />

        <Controller
          name='email'
          control={control}
          rules={{
            required: 'The field is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Enter a valid email address',
            },
          }}
          render={({ field }) => (
            <Input
              label='Email Address'
              type='email'
              placeholder='e.g. stephenking@lorem.com'
              value={field.value}
              error={`${errors?.email?.message || ''}`}
              handleChange={(val) => {
                field.onChange(val);
              }}
            />
          )}
        />

        <Controller
          name='mobile'
          control={control}
          rules={{
            required: 'The field is required',
            pattern: {
              value: /^\+?[1-9]\d{1,9}$/,
              message: 'Enter a valid phone number',
            },
            validate: (val) =>
              val.length > 9 || 'Phone number must be 10 digits',
          }}
          render={({ field }) => (
            <Input
              label='Phone Number'
              placeholder='e.g. +91 9999999999'
              error={`${errors?.mobile?.message || ''}`}
              value={field.value}
              handleChange={(val) => {
                if (/^\d*$/.test(val)) field.onChange(val);
              }}
            />
          )}
        />

        <div className='flex-1 hidden md:flex items-end justify-end text-end h-full'>
          <Button type='submit'>next Step</Button>
        </div>
      </form>
    </div>
  );
};

export default memo(StepOne);

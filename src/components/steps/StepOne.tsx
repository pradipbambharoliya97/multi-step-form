import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import Button from '../common/Button';
import Input from '../common/Input';

type Props = {};

const StepOne = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className='py-4 min-h-full flex flex-col gap-3'>
      <h1 className='text-5xl font-semibold flex felx-col gap-10 text-marine-blue '>
        Personal info
      </h1>
      <p className='text-lg text-cool-gray mb-4'>
        Please provide your name, email address, and phone number.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-8 py-6 h-full flex-1'
        noValidate
      >
        <Controller
          name='name'
          control={control}
          rules={{ required: 'The field is required' }}
          render={({ field }) => {
            return (
              <Input
                label='Name'
                placeholder='e.g. Stephen King'
                error={`${errors?.name?.message || ''}`}
                value={field.value}
                handleChange={(val) => {
                  if (+val > -1) field.onChange(val);
                }}
              />
            );
          }}
        />

        <Controller
          name='email'
          control={control}
          rules={{ required: 'The field is required' }}
          render={({ field }) => (
            <Input
              label='Email Address'
              type='email'
              placeholder='e.g. stephenking@lorem.com'
              value={field.value}
              error={`${errors?.name?.message || ''}`}
              handleChange={(val) => {
                if (+val > -1) field.onChange(val);
              }}
            />
          )}
        />
        <Controller
          name='mobile'
          control={control}
          rules={{ required: 'The field is required' }}
          render={({ field }) => (
            <Input
              label='Phone Number'
              placeholder='e.g. +91 9999999999'
              error={`${errors?.name?.message || ''}`}
              value={field.value}
              handleChange={(val) => {
                if (+val > -1) field.onChange(val);
              }}
            />
          )}
        />

        <div className='flex-1 flex items-end justify-end text-end h-full'>
          <Button type='submit'>next Step</Button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
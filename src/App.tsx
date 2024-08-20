import './App.css';
import Sidebar from './components/common/Sidebar';
import StepOne from './components/steps/StepOne';

const App = () => {
  return (
    <main
      role='main'
      aria-labelledby='main'
      className='text-sm md:text-base w-full h-screen bg-light-blue/25 flex items-center justify-center'
    >
      <section className='flex gap-6 rounded-3xl bg-white w-full h-full max-w-7xl max-h-[75vh] p-6'>
        <div className='relative flex-1 max-w-[21vw] bg-marine-blue rounded-xl text-white overflow-hidden '>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <div className='w-2/3 mx-auto h-full'>
            <StepOne />
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;

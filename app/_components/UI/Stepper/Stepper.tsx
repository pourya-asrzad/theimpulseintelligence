import {FC, ReactNode} from 'react';

interface IStepperProps {
  children: ReactNode;
  activeStep: number;
}

const Stepper: FC<IStepperProps> = (props) => {
  const {children} = props;
  return (
    <div>
      <ol className="flex w-full items-center text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
        {children}
      </ol>
    </div>
  );
};

export default Stepper;

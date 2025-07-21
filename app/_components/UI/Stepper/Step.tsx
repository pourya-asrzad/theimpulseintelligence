import React, {FC} from 'react';

interface IStepperProps {
  children: React.ReactNode;
}
const Step: FC<IStepperProps> = (props) => {
  const {children} = props;
  return (
    <li className="flex items-center text-blue-600 after:mx-6 after:hidden after:h-1 after:w-full after:border-1 after:border-b after:border-gray-200 dark:text-blue-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
      {children}
    </li>
  );
};

export default Step;

import type {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';

export const Heading = ({children, className}: {children: ReactNode; className?: string}) => {
  return <h1 className={twMerge('text-3xl font-bold', className)}>{children}</h1>;
};

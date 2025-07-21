import type {PropsWithChildren} from 'react';
import {twMerge} from 'tailwind-merge';
import {useLocale} from 'next-intl';

export const Text = ({children}: PropsWithChildren) => {
  const isRtl = useLocale() === 'fa';
  return <p className={twMerge('text-md font-normal', isRtl ? 'text-right' : 'text-left')}>{children}</p>;
};

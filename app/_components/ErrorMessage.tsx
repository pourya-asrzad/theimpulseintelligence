import type {PropsWithChildren} from 'react';
export const ErrorMessage = ({children}: PropsWithChildren) => {
  if (!children) return null;
  return <p className="p-1 text-red-500">{children}</p>;
};

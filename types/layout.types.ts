import type {ReactNode} from 'react';

export interface ILayoutProps {
  children: ReactNode;
  params: {locale: 'fa' | 'en'};
}

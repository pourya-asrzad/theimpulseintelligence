/* eslint-disable sort-imports */
'use client';

import {NextUIProvider} from '@nextui-org/react';
import {QueryClient, QueryClientProvider as ReactQueryClientProvider} from '@tanstack/react-query';
import {PropsWithChildren} from 'react';

const queryClient = new QueryClient();

const QueryClientProvider = ({children}: PropsWithChildren) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      <NextUIProvider>{children}</NextUIProvider>
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;

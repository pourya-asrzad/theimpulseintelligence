/* eslint-disable sort-imports */
import '@/app/globals.css';

import {Vazirmatn} from 'next/font/google';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {ILayoutProps} from '@/types/layout.types';
import type {Metadata} from 'next';
import QueryClientProvider from '../QueryClientProvider';
import {getSupportedLocale} from '@/config/i18n.config';
import {notFound} from 'next/navigation';
import {twMerge} from 'tailwind-merge';

const locales = ['fa', 'en']; // Список поддерживаемых локалей

export const metadata: Metadata = {
  title: 'AI',
  description: 'Using Flan, you will have complete and safe access to the world of artificial intelligence',
};

const vazir = Vazirmatn({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700']});

export default function LocaleLayout({children, params: {locale}}: ILayoutProps) {
  const cu = getSupportedLocale(locale); // Получение поддерживаемой локали для текущей страницы
  const messages = useMessages(); // Получение сообщений для текущей локали

  const isValidLocale = locales.some((cur) => cur === locale); // Проверка на валидность локали
  if (!isValidLocale) notFound(); // Если локаль не валидна, отобразить страницу 404 Not Found
  console.log(cu, 'Current locale');
  return (
    <html dir={cu === 'fa' ? 'rtl' : 'ltr'} lang={cu || 'fa'}>
      <body className={twMerge(vazir.className)}>
        <QueryClientProvider>
          <NextIntlClientProvider locale={cu} messages={messages}>
            {children} {/* Вывод дочерних компонентов */}
          </NextIntlClientProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export type AppLocale = 'en' | 'fa';

export const supportedLocales = ['en', 'fa'] as AppLocale[];

export const defaultLocale = 'fa' as AppLocale;

export const getSupportedLocale = (locale?: string): AppLocale => {
  const existingLocale = (locale && supportedLocales.find((l) => l === locale)) || undefined;

  return existingLocale || defaultLocale;
};

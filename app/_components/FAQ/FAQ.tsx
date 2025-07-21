'use client';
import {Accordion, AccordionItem} from '@nextui-org/react';

import {useTranslations} from 'next-intl';

export default function App() {
  const t = useTranslations();
  const frequentQuestions = [
    {
      uniqueId: 1,
      title: t('faq1.title'),
      answer: t('faq1.answer'),
    },
    {
      uniqueId: 2,
      title: t('faq2.title'),
      answer: t('faq2.answer'),
    },
    {
      uniqueId: 3,
      title: t('faq3.title'),
      answer: t('faq3.answer'),
    },
    {
      uniqueId: 4,
      title: t('faq4.title'),
      answer: t('faq4.answer'),
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-bold">{t('faq_title')}</h1>
      <Accordion className="text-light mx-auto my-10 w-[90%] rounded-[1.5rem]  border-1 border-gray-300 bg-gray-50 px-[2rem] py-[1rem]  md:w-[80%] lg:w-[65%]">
        {frequentQuestions.map((question) => (
          <AccordionItem
            className="text-extralight my-2 rounded-[1rem] px-2 hover:bg-gray-200"
            key={question.uniqueId}
            aria-label={question.title}
            title={question.title}
          >
            {question.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

/* eslint-disable sort-imports */
import {useTranslations} from 'next-intl';
import {Button} from '@nextui-org/react';
// import mid from '/pictures/mid.png';
// import chat from '/pictures/chatgpt.png';
import Image from 'next/image';
// import dallE from '/pictures/dall-e3.svg';

const IntroSection = () => {
  const t = useTranslations();
  return (
    <section className="flex w-full flex-col items-center gap-8 p-3">
      <Button className="mt-10 flex min-w-[12rem] items-center justify-center rounded-2xl bg-black p-7 text-white sm:w-[18%] sm:text-[1.2rem] xl:text-[1.4rem] ">
        {t('start')}
      </Button>
      <div className="mt-2 flex w-full max-w-[30rem] flex-col items-center justify-center gap-4  md:w-[100%] md:max-w-[100%] ">
        <div className="text-[2rem] font-bold">{t('Ai_Tools')}</div>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-8 md:max-w-[70rem] md:justify-around">
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="Midjourny"
              className="w-[7rem] rounded-[1.5rem] bg-blue-50 p-3"
              width={700}
              height={700}
              src={'/pictures/mid.png'}
            />
            <span className="mt-1 font-light">Midjourney</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="Chat Gpt4"
              className="w-[7rem] rounded-[1.5rem] bg-blue-50 p-3"
              width={700}
              height={700}
              src={'/pictures/chatgpt.png'}
            />
            <span className="mt-1 font-light">Chat GPT4</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="Dall e"
              className="w-[7rem] rounded-[1.5rem] bg-blue-50 p-3"
              width={700}
              height={700}
              src={'/pictures/dall-e3.svg'}
            />
            <span className="mt-1 font-light">Dall E3</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              alt="Chat Gpt3"
              className="w-[7rem] rounded-[1.5rem] bg-blue-50 p-3"
              width={700}
              height={700}
              src={'/pictures/chatgpt.png'}
            />
            <span className="mt-1 font-light">Chat GPT3</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              alt="Dall e"
              className="w-[7rem] rounded-[1.5rem] bg-blue-50 p-3"
              width={700}
              height={700}
              src={'/pictures/dall-e3.svg'}
            />
            <span className="mt-1 font-light">Dall E2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

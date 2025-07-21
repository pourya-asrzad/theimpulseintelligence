/* eslint-disable sort-imports */
import {useLocale} from 'next-intl';
import Video from '../_components/UI/Video/Video';
import IntroSection from '../_components/IntroSection/IntroSection';
//
import FAQ from '../_components/FAQ/FAQ';
import TestimonialSlider from '../_components/TestimonialSlider/TestimonialSlider';
import {appSlogan} from '../constants';
import Layout from '../_components/Layout/Layout';
// import Particles from '../_components/Particles';

export default function HomePage() {
  const locale = useLocale();

  return (
    <Layout>
      {/* <Particles className="pointer-event-none animate-fade-in  absolute  inset-0" quantity={1000} /> */}

      <div className="flex flex-col items-center gap-3">
        <p className="my-6 w-full px-6 text-center text-[.9rem] font-semibold sm:mt-16 sm:w-[80%] sm:text-[1.3rem] lg:text-[2rem] xl:text-[3rem]">
          {locale === 'fa' && appSlogan.fa}
          {locale === 'en' && appSlogan.en}
        </p>
        <Video />

        <IntroSection />
        <TestimonialSlider />
        <FAQ />
      </div>
    </Layout>
  );
}

import Layout from '@/app/_components/Layout/Layout';
import {useTranslations} from 'next-intl';
const PrivacyPolicy = () => {
  const t = useTranslations();
  return (
    <Layout>
      <section className=" m-5 flex flex-col items-center justify-center gap-5 border-2  border-y-0 border-x-slate-700 p-7">
        <h2 className="font-display  font-medium  duration-150  lg:text-lg xl:text-xl">{t('Privacy Policy')}</h2>
        <p className="text-lg text-slate-800">
          {' '}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus alias nostrum accusamus quasi, unde
          magnam, nemo minima velit quae , quisquam beatae voluptatem vero quibusdam? Blanditiis perspiciatis natus quas
          molestiae sit.
        </p>
        <p className="text-lg text-slate-800">
          {' '}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus alias nostrum accusamus quasi, unde
          magnam, nemo minima velit quae , quisquam beatae voluptatem vero quibusdam? Blanditiis perspiciatis natus quas
          molestiae sit.
        </p>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;

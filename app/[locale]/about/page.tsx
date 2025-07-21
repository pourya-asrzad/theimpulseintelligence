import Layout from '@/app/_components/Layout/Layout';
import {about} from '@/app/constants';
import {Card, CardBody, CardHeader} from '@nextui-org/react';
import {useLocale} from 'next-intl';
import {useTranslations} from 'next-intl';
const AboutUs = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <>
      <Layout>
        <section className="mx-auto flex flex-col items-center justify-center gap-3 p-3">
          <Card>
            <CardHeader className="flex flex-col gap-1">
              <span className="h-10 w-10 bg-yellow-600"></span>
              <span className="font-display font-medium text-gray-700 duration-150 group-hover:text-white lg:text-xl xl:text-3xl">
                {t('about')}
              </span>
            </CardHeader>
            <CardBody className="p-3">
              <p className=" text-center text-lg leading-9 text-gray-700 duration-1000 group-hover:text-zinc-200">
                {locale === 'fa' && about.fa}
                {locale === 'en' && about.en}
              </p>
            </CardBody>
          </Card>
        </section>
      </Layout>
    </>
  );
};

export default AboutUs;

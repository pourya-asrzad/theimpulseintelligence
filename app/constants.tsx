import Link from 'next/link';
import {AppRoutes} from '@/config/Routes';
export const appSlogan = {
  fa: (
    <>
      ما ایده‌ها را به واقعیت‌های <span className="gradient-text"> قدرتمند </span> تبدیل می‌کنیم
    </>
  ),
  en: (
    <>
      We shape ideas into <span className="gradient-text"> powerful </span>realities
    </>
  ),
};

export const about = {
  fa: (
    <>
      اساس کار تیم ما با کشف محدودیت هایی که در زمینه تکنولوژی های هوش مصنوعی وجود داشت تشکیل شد . محدودیت هایی همچون
      استفاده از چت جی پی تی4 برای کاربرانی که به آن دسترسی ندارند یا فرآیند استفاده از این سیستم ها برایشان دشوار است .
      همچنین بسیار پیش می‌آید که کاربران ارتباط درستی با هوش مصنوعی برقرار نمی کنند و اغلب در نحوه درست سوال پرسیدن و
      دریافت اطلاعات مشکل دارند . تیم ما با کشف این محدودیت ها جهت رفع آن‌ها قدم در عرصه هوش مصنوعی گذاشت .
    </>
  ),
  en: (
    <>
      The basis of our team work was formed by discovering the limitations that existed in the field of artificial
      intelligence technologies. Limitations such as Using GPT4 chat is difficult for users who do not have access to it
      or the process of using these systems. Also, it often happens that users do not establish a proper relationship
      with artificial intelligence and often do not know how to ask questions correctly They have problems receiving
      information. By discovering these limitations, our team stepped into the field of artificial intelligence to solve
      them.
    </>
  ),
};
export const askSignIn = {
  fa: <>از قبل حساب کاربری دارید؟</>,
  en: <>Already have an account?</>,
};
export const askPrivcy = {
  fa: (
    <>
      با ایجاد یک حساب کاربری، با شرایط{' '}
      <Link target="_blank" href={AppRoutes.TERMS} className="text-slate-500 underline  decoration-blue-900">
        خدمات
      </Link>{' '}
      و
      <Link href={AppRoutes.PRIVACY} className="text-slate-500 underline  decoration-blue-900">
        {' '}
        خط مشی رازداری
      </Link>{' '}
      و{' '}
      <Link className="text-slate-500 underline  decoration-blue-900" href={'#'}>
        اعلان
      </Link>{' '}
      پیش فرض ما موافقت می کنید .
    </>
  ),
  en: (
    <>
      By creating an account you agree with our
      <Link target="_blank" href={AppRoutes.TERMS} className="text-slate-500 underline decoration-blue-900">
        Terms of Service
      </Link>
      ,
      <Link href={AppRoutes.PRIVACY} className="text-slate-500 underline  decoration-blue-900">
        Privacy Policy
      </Link>
      , and our default
      <Link href={'#'} className="text-slate-500 underline  decoration-blue-900">
        Notification Settings
      </Link>
      .
    </>
  ),
};
export const checkBox = {
  en: (
    <span className="text-xs sm:text-sm">
      I agree with Rasp
      <Link target="_blank" href={AppRoutes.TERMS} className="underline decoration-blue-900">
        Terms of Service
      </Link>
      ,
      <Link href={AppRoutes.PRIVACY} className="underline decoration-blue-900">
        Privacy Policy
      </Link>
      , and our default
      <Link href={'#'} className="underline decoration-blue-900">
        Notification Settings
      </Link>
      .
    </span>
  ),
  fa: (
    <span className="text-xs sm:text-sm">
      من موافقم با شرایط{' '}
      <Link target="_blank" href={AppRoutes.TERMS} className=" underline  decoration-blue-900">
        خدمات
      </Link>{' '}
      و
      <Link href={AppRoutes.PRIVACY} className=" underline  decoration-blue-900">
        {' '}
        خط مشی رازداری
      </Link>{' '}
      و{' '}
      <Link className=" underline  decoration-blue-900" href={'#'}>
        اعلان
      </Link>{' '}
      .
    </span>
  ),
};

export const services = {
  en: (
    <>
      This site is protected by reCAPTCHA and the Google{' '}
      <Link href={'#'} className=" text-blue-900 underline decoration-blue-900">
        Privacy Policy
      </Link>{' '}
      and{' '}
      <Link target="_blank" href={AppRoutes.TERMS} className=" text-blue-900 underline decoration-blue-900">
        Terms of Service
      </Link>{' '}
      apply.
    </>
  ),
  fa: (
    <>
      این سایت توسط reCAPTCHA محافظت می شود و{' '}
      <Link href={'#'} className=" text-blue-900 underline decoration-blue-900">
        {' '}
        خط مشی رازداری
      </Link>{' '}
      Google و{' '}
      <Link target="_blank" href={AppRoutes.TERMS} className=" text-blue-900 underline decoration-blue-900">
        شرایط خدمات
      </Link>{' '}
      اعمال می شود.
    </>
  ),
};

export const arrows = {
  fa: (
    <>
      <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <rect
          width="512"
          height="512"
          x="0"
          y="0"
          rx="30"
          fill="transparent"
          stroke="transparent"
          strokeWidth="0"
          strokeOpacity="100%"
          paintOrder="stroke"
        ></rect>
        <svg
          width="497px"
          height="497px"
          viewBox="0 0 24 24"
          fill="currentColor"
          x="7.5"
          y="7.5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16m-7-7l7 7l-7 7"
            />
          </g>
        </svg>
      </svg>
    </>
  ),
  en: (
    <>
      <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <rect
          width="512"
          height="512"
          x="0"
          y="0"
          rx="30"
          fill="transparent"
          stroke="transparent"
          strokeWidth="0"
          strokeOpacity="100%"
          paintOrder="stroke"
        ></rect>
        <svg
          width="497px"
          height="497px"
          viewBox="0 0 24 24"
          fill="currentColor"
          x="7.5"
          y="7.5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m11 5l-7 7l7 7m-7-7h16"
            />
          </g>
        </svg>
      </svg>
    </>
  ),
};

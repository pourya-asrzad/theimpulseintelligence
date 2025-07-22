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
    <div>
      <div className="mt-4 flex flex-col items-start gap-4">
        <h3 className="mb-2 text-xl font-bold">هدف ما</h3>
        <p className="text-right text-gray-700">
          هدف ما برگرفته از دو کلمه Impuluse و Intelligene است . Impulse مثل چیزی که در لحظه به فکر شما می اید و مانند
          یک الهام است . مثل یک حرکت غیر عادی که می کنید و شاید بنظر خودتان یا دیگران خلاقانه باشد ، اما به خودی خود خام
          است Intelligence : به معنای هوشمندی ، خر د ورزی و بهرگیری از دانش ما با بهره گیری از این دو کلمه در واقع می
          خواهیم هر آنچیزی که برای تولید و خلق کردن به ما الهام یا در ذهنمان می آید با استفاده از خرد و دانش و هوشمندی
          نرکیب کنیم تا در نهایت یک محصول تولید هوشمند .
        </p>
      </div>

      <div className="mt-4 flex flex-col items-start gap-4">
        <h3 className="mb-2 text-xl font-bold">دورنما</h3>
        <p className="text-right text-gray-700">
          دورنمای ما ایجاد جهانی است که در آن هر ایده، حتی اگر خام یا غیرمتعارف باشد، بتواند از طریق کاربرد هوشمندانه
          دانش و خلاقیت به واقعیتی قدرتمند تبدیل شود. ما تلاش می‌کنیم تا افراد و تیم‌ها را توانمند سازیم تا الهامات و
          بینش‌های خود را به راه‌حل‌های نوآورانه تبدیل کنند که تأثیر معناداری بر جامعه بگذارد.
        </p>
      </div>
    </div>
  ),
  en: (
    <div>
      <div className="mt-4 flex flex-col  gap-4">
        <h3 className="mb-2 text-xl font-bold"> Our Goals </h3>
        <p className=" text-gray-700">
          Our goal is derived from two words Impulse and Intelligence. Impulse is like something that comes to your mind
          in the moment, like an inspiration. It's like an unusual action you take that may seem creative to you or
          others, but in itself, it is raw. Intelligence: meaning wisdom, cleverness, and utilizing knowledge. By
          leveraging these two words, we aim to combine everything that inspires us or comes to our minds for production
          and creation with wisdom and knowledge to ultimately produce a smart product.
        </p>
      </div>

      <div className="mt-6 flex flex-col  gap-4">
        <h3 className="mb-2 text-xl font-bold">Our Vision</h3>
        <p className=" text-gray-700">
          Our vision is to create a world where every idea, no matter how raw or unconventional, can be transformed into
          a powerful reality through the intelligent application of knowledge and creativity. We strive to empower
          individuals and teams to harness their inspirations and insights, turning them into innovative solutions that
          make a meaningful impact on society.
        </p>
      </div>
    </div>
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

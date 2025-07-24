'use client';
import {Icon} from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {AppRoutes} from '@/config/Routes';

const Footer = () => {
  const t = useTranslations();

  return (
    <div>
      <div className="mx-auto mt-10 flex w-full flex-col lg:w-[88%] lg:flex-row">
        <div className="mx-4 mb-8 flex flex-col gap-4 sm:gap-6 md:text-[1rem] lg:w-[35%]">
          <Link href="/">
            <p className="w-full cursor-pointer font-bold text-black">{t('appName')}</p>
          </Link>
          <p className="text-[.8rem] font-light sm:text-[1.1rem] lg:text-[.95rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui totam ipsa, libero earum, ex temporibus
            natus tenetur ipsam esse aperiam eveniet at quo veritatis atque nobis quas, praesentium tempore?
          </p>
          <div className="">
            <ul className="flex gap-4 lg:gap-10">
              <li>
               <a href='https://www.linkedin.com/company/impulseintelligence/about/?viewAsMember=true'> <Icon  icon={'pajamas:linkedin'} className="cursor-pointer text-[1.3rem] sm:text-[1.9rem]" />
             </a> </li>
              <li>
               <a href='https://x.com/ImpulseInt3419'> <Icon icon={'bi:twitter'} className="cursor-pointer text-[1.3rem] sm:text-[1.9rem]" />
              </a></li>
              <li>
                <Icon icon={'fe:instagram'} className="cursor-pointer text-[1.3rem] sm:text-[1.9rem]" />
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto grid w-full grid-cols-2 grid-rows-2 px-5 text-[.9rem] sm:gap-y-10 sm:text-[1rem] lg:grid-cols-4 lg:grid-rows-1">
          <ul className="flex min-w-[8.2rem] flex-col gap-2 sm:min-w-[10rem] ">
            <li className="mb-3 font-semibold lg:text-[1.2rem]">Product</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Community</li>
            <li>Testimonial</li>
          </ul>
          <ul className="flex min-w-[8.2rem] flex-col gap-2 sm:min-w-[10rem]  ">
            <li className="mb-3 font-semibold lg:text-[1.2rem]">Support</li>
            <li>Help Center</li>
            <li>Tweet @Us</li>
            <li>Webians</li>
            <li>Feedback</li>
          </ul>
          <ul className="flex min-w-[8.2rem] flex-col gap-2 sm:min-w-[10rem] ">
            <li className="mb-3 font-semibold lg:text-[1.2rem]">Links</li>
            <li>Courses</li>
            <li>come easier</li>
            <li>Service</li>
            <li>All in One</li>
          </ul>
          <ul className="flex min-w-[8.2rem] flex-col gap-2 sm:min-w-[10rem] ">
            <li className="mb-3 font-semibold lg:text-[1.2rem]">Contact Us</li>
            <li className="flex cursor-pointer gap-2">
              <Icon icon={'solar:phone-bold'} className="text-yellow-600 hover:text-yellow-800 sm:text-[1.4rem]" />
              (+98) 9999999999
            </li>
            <li className="flex cursor-pointer gap-2">
              <Icon icon={'ic:round-mail'} className="text-yellow-600 hover:text-yellow-800 sm:text-[1.4rem]" />
              ai@mail.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8" />
      <div className="mx-auto hidden items-start justify-between px-5 py-8 sm:flex sm:w-[88%]">
        <p className="text-[.8rem] font-light lg:text-[1rem]">© Copyright by CodedUl. All rights reserved.</p>
        <ul className="flex justify-between gap-6 text-[.7rem] font-light lg:w-[29rem] lg:justify-start lg:gap-[3.3rem] lg:text-[.9rem]">
          <Link href={AppRoutes.PRIVACY}>Privacy Policy</Link>
          <Link href={AppRoutes.TERMS}>Terms of Use</Link>
          <Link href={'#'}>Legal</Link>
          <Link href={'#'}>Site Map</Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

'use client';
import {Button, Tooltip} from '@nextui-org/react';
import {useLocale, useTranslations} from 'next-intl';
import {AppRoutes} from '@/config/Routes';
import Dropdown from './_components/dropdown/dropdown';
import {ILayoutProps} from '@/types/layout.types';
import Link from 'next/link';
import {twMerge} from 'tailwind-merge';
import {usePathname} from 'next/navigation';
import {useState} from 'react';

const tabs: string[] = ['chatGPT', 'imagine', 'language', 'upgrade', 'setting', 'support', 'logout'];

const DashboardLayout = ({children}: ILayoutProps) => {
  const t = useTranslations();
  const locale = useLocale();
  const router = usePathname();
  const ai = router.split('/').splice(-1);
  const [activeTab, setActiveTab] = useState(ai[0]);

  return (
    <div className={twMerge('h-screen')}>
      <div className="flex h-screen w-full bg-[#E2F4FC]">
        <div className="flex h-screen w-[17%] flex-col justify-between bg-inherit pb-5 pt-14">
          <div className="mx-6 flex flex-col gap-3 ">
            <span className="mb-8 w-full text-center text-[2rem] font-bold">{t('appName')}</span>
            <Link href={`${AppRoutes.DASHBOARD}${AppRoutes.CHATGPT}`}>
              <Button
                className={`w-full items-center justify-start gap-5 ${
                  activeTab === tabs[0] ? 'bg-[#003D5A] font-medium text-white' : 'bg-inherit font-light text-black'
                }  py-6 text-[1.2rem]`}
                onClick={() => setActiveTab(tabs[0])}
              >
                <span className="rounded-md bg-[#67a090] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="M18.38 27.94v-14.4l11.19-6.46c6.2-3.58 17.3 5.25 12.64 13.33"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m18.38 20.94l12.47-7.2l11.19 6.46c6.2 3.58 4.1 17.61-5.23 17.61"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m24.44 17.44l12.47 7.2v12.93c0 7.16-13.2 12.36-17.86 4.28"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="M30.5 21.2v14.14L19.31 41.8c-6.2 3.58-17.3-5.25-12.64-13.33"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m30.5 27.94l-12.47 7.2l-11.19-6.46c-6.21-3.59-4.11-17.61 5.22-17.61"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m24.44 31.44l-12.47-7.2V11.31c0-7.16 13.2-12.36 17.86-4.28"
                    ></path>
                  </svg>
                </span>

                <p className="mt-2 text-[1rem]">{t('use_chatGPT')}</p>
              </Button>
            </Link>
            <Link href={`${AppRoutes.DASHBOARD}${AppRoutes.IMAGINE}`}>
              <Button
                className={`w-full items-center justify-start gap-5 ${
                  activeTab === tabs[1] ? 'bg-[#003D5A] font-medium text-white' : 'bg-inherit font-light text-black'
                }  py-6 text-[1.2rem]`}
                onClick={() => setActiveTab(tabs[1])}
              >
                <span
                  className={`rounded-md  ${activeTab === tabs[1] ? 'bg-white text-black' : 'bg-black text-white'} `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="M18.38 27.94v-14.4l11.19-6.46c6.2-3.58 17.3 5.25 12.64 13.33"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m18.38 20.94l12.47-7.2l11.19 6.46c6.2 3.58 4.1 17.61-5.23 17.61"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m24.44 17.44l12.47 7.2v12.93c0 7.16-13.2 12.36-17.86 4.28"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="M30.5 21.2v14.14L19.31 41.8c-6.2 3.58-17.3-5.25-12.64-13.33"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m30.5 27.94l-12.47 7.2l-11.19-6.46c-6.21-3.59-4.11-17.61 5.22-17.61"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="m24.44 31.44l-12.47-7.2V11.31c0-7.16 13.2-12.36 17.86-4.28"
                    ></path>
                  </svg>
                </span>
                <p className="text-[1rem]"> {t('imagine')}</p>
              </Button>
            </Link>
            <Link href={`${AppRoutes.DASHBOARD}${AppRoutes.LANGUAGE}`}>
              <Button
                className={`w-full items-center justify-start gap-5 ${
                  activeTab === tabs[2] ? 'bg-[#003D5A] font-medium text-white' : 'bg-inherit font-light text-black'
                }  py-6 text-[1.2rem]`}
                onClick={() => setActiveTab(tabs[2])}
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m12.87 15.07l-2.54-2.51l.03-.03A17.5 17.5 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7l1.62-4.33L19.12 17z"
                    ></path>
                  </svg>
                </span>
                <p className="text-[1rem]">{t('language')}</p>
              </Button>
            </Link>
          </div>
          <div className="mx-10 flex flex-col gap-3 ">
            <Link href={`${AppRoutes.DASHBOARD}${AppRoutes.UPGRADE}`}>
              <Button
                className={`w-full items-center justify-start gap-5 bg-blue-200 ${
                  activeTab === tabs[3] ? 'bg-[#003D5A] font-medium text-white' : 'bg-inherit font-light text-black'
                }  py-6 text-[1.2rem]`}
                onClick={() => setActiveTab(tabs[3])}
              >
                <span className={`rounded-md ${activeTab === tabs[3] ? 'text-white' : 'text-black'} `}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
                    <path
                      fill="currentColor"
                      d="m229.66 114.34l-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-80h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v88H88v-88a8 8 0 0 0-8-8H51.31L128 35.31L204.69 112Z"
                    ></path>
                  </svg>
                </span>

                <p className="mt-2 text-[1rem]">{t('upgrade_plan')}</p>
              </Button>
            </Link>
            <Link href={`${AppRoutes.DASHBOARD}${AppRoutes.SETTING}`}>
              <Button
                className={`w-full items-center justify-start gap-5 bg-blue-200 ${
                  activeTab === tabs[4] ? 'bg-[#003D5A] font-medium text-white' : 'bg-inherit font-light text-black'
                }  py-6 text-[1.2rem]`}
                onClick={() => setActiveTab(tabs[4])}
              >
                <span className={`rounded-md ${activeTab === tabs[4] ? 'text-white' : 'text-black'} `}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 1024 1024">
                    <path
                      fill="currentColor"
                      d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256"
                    ></path>
                  </svg>
                </span>

                <p className="mt-2 text-[1rem]">{t('setting')}</p>
              </Button>
            </Link>
            <Link href={`${AppRoutes.DASHBOARD}${AppRoutes.SUPPORT}`}>
              <Button
                className={`w-full items-center justify-start gap-5 bg-blue-200 ${
                  activeTab === tabs[5] ? 'bg-[#003D5A] font-medium text-white' : 'bg-inherit font-light text-black'
                }  py-6 text-[1.2rem]`}
                onClick={() => setActiveTab(tabs[5])}
              >
                <span className={`rounded-md ${activeTab === tabs[5] ? 'text-white' : 'text-black'} `}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M10.97 8.265a1.45 1.45 0 0 0-.487.57a.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215c-.19.183-.399.358-.579.508l-.147.123a4 4 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736c.22-.28.486-.517.718-.714l.183-.153l.001-.001c.172-.143.324-.27.47-.412c.368-.355.569-.676.569-1.136a.95.95 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"
                    ></path>
                  </svg>
                </span>

                <p className="mt-2 text-[1rem]">{t('support')}</p>
              </Button>
            </Link>
            <Link href={`/`}>
              <Button
                className={`w-full items-center justify-start gap-5 bg-blue-200 ${
                  activeTab === tabs[6] ? 'bg-[#003D5A] font-medium text-white' : 'bg-inherit font-light text-black'
                }  py-6 text-[1.2rem]`}
                onClick={() => setActiveTab(tabs[6])}
              >
                <span className={`rounded-md ${activeTab === tabs[6] ? 'text-white' : 'text-black'} `}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${locale === 'fa' ? 'rotate-180' : ''} `}
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.25}
                      d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"
                    ></path>
                  </svg>
                </span>

                <p className="mt-2 text-[1rem]">{t('logout')}</p>
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-screen w-[83%]">
          <div
            className={`flex h-[8%] w-full items-center justify-between border-b-2 md:h-[10%] ${
              locale === 'fa' ? 'pl-7' : 'pr-7'
            } `}
          >
            <Button className="bg-[#003D5A] px-4 py-0 text-[.88rem] text-white">
              {t('welcome')} <span className="font-extralight">, Albert</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 128 128">
                  <path
                    fill="#ffca28"
                    d="M17.57 62.68c-2.79-4.01-3.91-7.79-1.18-10.08c2.31-1.94 5.71-2.31 9.91 2.54c0 0 12.55 14.58 16.87 18.63c.98.91 2.2 1.05 3.31-.1c.94-.98.6-1.83-.2-3c0 0-17.69-26.3-20.01-29.51c-3.87-5.37-2.38-8.84-.59-10.49c2.49-2.31 6.87-2.77 10.94 2.81l21.42 28.67c.65.69 1.7.79 2.47.25l.3-.21c.79-.56 1.02-1.63.54-2.47c-3.75-6.53-18.67-32.55-20.86-37.29c-2.52-5.47-1.44-8.25 1.23-9.86c3.17-1.91 6.15-1.77 9.71 3.52c3.86 5.76 18.85 30.01 22.66 36.53c.5.85 1.57 1.17 2.45.74c.01-.01.03-.01.04-.02c.84-.41 1.6-1.24 1.25-2.42c-2.08-6.86-12.29-28.22-14.43-33.13c-2.93-6.71-1.5-8.99 1.53-10.53c3.18-1.61 6.49-.34 8.74 4.14c1.52 3.04 28.21 51.61 28.21 51.61c-.39-7.24 1.44-12.37 3-17.52c2.84-9.37 9.71-14.24 14.69-12.05c2.59 1.14 3.06 3.41 2.78 5.15c-.56 3.38-2.94 13.85-3.4 22.05c-1.08 19.22 4.73 41.37-16.92 55.29c-14.49 9.32-30.02 7.68-40.28.51c-12.44-8.69-41.9-50.48-44.18-53.76"
                  ></path>
                  <path
                    fill="#eda600"
                    d="M117.68 51.77c-1.81 7.61-2.05 16.95-1.99 20.93c.24 15.51.16 28.93-15.39 41.19c-1.91 1.51-7.9 5.19-14.87 7.11c-2.24.61-1.39 1.33-.01 1.17c7.61-.88 13.38-4.16 16.59-6.23c21.64-13.92 16.32-35.92 17.4-55.14c.46-8.2 2.96-21.1 2.92-22.21c-.05-1.11-2.84 5.57-4.65 13.18m-40.15.8s-1.55.01-3.02-2.04C70.1 44.4 56.27 21.25 52.29 15.57c-4.54-6.48-8.77-4-9.73-3.48c0 0 3.48.12 5.4 2.97c3.92 5.81 18.78 31.85 23.47 37.44c3.03 3.61 6.1.07 6.1.07m-54.82 1.97c1.36 1.46 13.3 15.63 17.7 19.58c3.78 3.39 6.6-.93 6.6-.93s-1.39.19-3.29-1.24C39 68.38 27.82 55.65 25.3 52.97c-3.74-3.98-7.22-1.49-7.96-1.04c.01 0 2.15-.83 5.37 2.61m38.88 6.72s-1.28.93-3.63-1.82c-1.71-2.01-21.34-25.96-21.34-25.96c-4.92-6.01-8.79-4.22-9.59-3.76c0 0 2.47-.13 5.36 3.2c1.32 1.52 22.27 28.23 23.11 29.14c3.07 3.35 5.91.47 6.09-.8"
                  ></path>
                  <path
                    fill="#eda600"
                    d="M101.8 57.83S75.79 14.22 74.13 11.25c-3.69-6.59-7.98-4.57-8.71-4.24c0 0 2.39-.68 5.2 4.1c1.5 2.54 20.61 36.9 26.71 47.88c.48 2.05.44 4.72-1.1 6.44c-5.52 6.19-12.56 12.51-10.49 28.18c.52 3.97 1.99 7.73 3.08 9.54c1.38 2.27 2.97 1.41 2.27-.29c-.47-1.15-1.22-3.86-1.37-5.02c-.7-5.4-3.06-14.84 7.52-26.16c1.79-1.89 6.34-7.6 4.56-13.85"
                  ></path>
                  <path
                    fill="#b0bec5"
                    d="M103.49 30.96c-1.39-4.93-3.55-9.45-6.35-13.37c-2.52-3.53-5.57-6.57-9.05-9.01c-.44-.31-1-1.27-.52-2.2s1.52-.81 1.91-.65c4.35 1.79 7.91 4.88 10.85 9.12c3.49 5.04 5.22 9.79 6.11 15.1c.1.58.08 1.8-1.16 2.12c-1.23.32-1.65-.63-1.79-1.11m-6.8 5.29c-1.39-4.93-3.55-9.45-6.35-13.37c-2.52-3.53-5.57-6.57-9.05-9.01c-.44-.31-1-1.27-.52-2.2c.48-.94 1.52-.81 1.91-.65c4.35 1.79 7.91 4.88 10.85 9.12c3.49 5.04 5.22 9.79 6.11 15.1c.1.58.08 1.8-1.16 2.12c-1.22.32-1.65-.62-1.79-1.11M8.56 77.46c1.72 4.83 4.17 9.19 7.22 12.92c2.75 3.35 5.99 6.19 9.62 8.4c.46.28 1.08 1.2.66 2.16c-.42.97-1.46.91-1.87.78c-4.46-1.5-8.22-4.35-11.43-8.39c-3.81-4.8-5.86-9.42-7.1-14.66c-.14-.58-.2-1.79 1.02-2.19c1.22-.4 1.71.51 1.88.98m6.43-5.73c1.72 4.83 4.17 9.19 7.22 12.92c2.75 3.35 5.99 6.19 9.62 8.4c.46.28 1.08 1.2.66 2.16c-.42.97-1.46.91-1.87.78c-4.46-1.5-8.22-4.35-11.43-8.39c-3.81-4.8-5.86-9.42-7.1-14.66c-.14-.58-.2-1.79 1.02-2.19c1.22-.41 1.71.51 1.88.98"
                  ></path>
                </svg>
              </span>
            </Button>
            <Tooltip
              content={
                <Dropdown
                  img={'https://as1.ftcdn.net/v2/jpg/03/02/88/46/1000_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg'}
                  name={'albert davson'}
                  email={'albertDavson1998@gamil.com'}
                />
              }
            >
              <span className="flex h-[2.8rem] w-[2.8rem] items-center justify-center overflow-hidden rounded-[10rem] bg-slate-700">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/03/02/88/46/1000_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg"
                  alt="user-profile"
                  className="h-[2.8rem] w-[auto]"
                />
              </span>
            </Tooltip>
          </div>
          <div className="h-[92%] w-full bg-[#F5F7F7]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

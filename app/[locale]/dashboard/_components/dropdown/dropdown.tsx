import {Button} from '@nextui-org/react';
import {useTranslations} from 'next-intl';

type propsType = {
  img?: string;
  name: string;
  email: string;
};
const Dropdown = ({img, name, email}: propsType) => {
  const t = useTranslations();

  return (
    <div className="inline-block p-4">
      <div className="flex flex-col">
        <div className="mb-5 flex items-center justify-start gap-3">
          <div className="flex h-[2.5rem] w-[2.5rem] items-center overflow-hidden rounded-[5rem] bg-red-500">
            <img src={img} alt="user" className="h-[2.5rem] " />
          </div>
          <div className="flex flex-col ">
            <p className="text-[.75rem] font-semibold text-gray-600">{name}</p>
            <p className="text-[.7rem] font-light text-gray-600">{email}</p>
          </div>
        </div>
        <hr className="mb-2" />
        <div>
          <Button className="flex w-full items-center justify-start gap-4 bg-inherit p-0 px-3 hover:bg-gray-100 ">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 21 21">
                <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m1.5 10.5l9-9l9 9"></path>
                  <path d="M3.5 8.5v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8"></path>
                </g>
              </svg>
            </span>
            <p className="mt-1 text-[.8rem] font-bold text-gray-600">{t('account')}</p>
          </Button>
          <Button className="flex w-full items-center justify-start gap-4 bg-inherit p-0 px-3 hover:bg-gray-100">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
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
            <p className="mt-1 text-[.8rem] font-bold text-gray-600">{t('logout')}</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

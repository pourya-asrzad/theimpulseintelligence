/* eslint-disable sort-imports */
'use client';
// TODO: break tabs to tab component
import {IconifyIcon, Icon} from '@iconify/react/dist/iconify.js';
import {ReactNode, useState} from 'react';
import {Button} from '../Button';
import {twMerge} from 'tailwind-merge';

type Props = {
  tabs: Array<{
    title: string;
    icon: string | IconifyIcon;
    content: ReactNode;
  }>;
};

export const Tabs = ({tabs}: Props) => {
  // eslint-disable-next-line no-unused-vars
  const [activeTab, setActiveTab] = useState(tabs[0]?.title || '');
  return (
    <div className="m-2 ">
      <ul
        className={twMerge(
          '-mb-px flex flex-wrap border-b-2 border-gray-400 text-center text-sm font-medium text-gray-500 '
        )}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.title;
          return (
            <li className="" key={tab.title}>
              <Button
                variant="primary"
                type="button"
                isActive={isActive}
                onClick={() => {
                  setActiveTab(tab.title);
                }}
                className={twMerge('border-b-6 border-transparent', isActive ? 'border-darkgreen' : '')}
              >
                <div className={twMerge('group inline-flex  items-center justify-center gap-1 rounded-t-lg p-4 pb-2 ')}>
                  <Icon icon={tab.icon} height={'1.5rem'} />
                  {tab.title}
                </div>
              </Button>
            </li>
          );
        })}
      </ul>

      <div id="">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.title}
              className={twMerge('rounded-lg p-4', activeTab === tab.title ? '' : 'hidden')}
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-400">{tab.content}</div>
            </div>
          );
        })}
      </div>
      <div />
    </div>
  );
};

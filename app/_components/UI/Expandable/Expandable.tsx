/* eslint-disable sort-imports */
import React, {useState, ReactNode} from 'react';
import {Icon} from '@iconify/react';
import {twMerge} from 'tailwind-merge';

interface AccordionItemProps {
  visibleContent: ReactNode; // Now accepts a ReactNode
  hiddenContent: ReactNode; // Now accepts a ReactNode
}

export const Expandable: React.FC<AccordionItemProps> = ({visibleContent, hiddenContent}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="accordion-collapse" data-accordion="collapse" className="w-full rounded-md border">
      <div className="w-full border-b-0">
        <div className="flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 rtl:text-right ">
          <span>{visibleContent}</span>
          <Icon
            className={twMerge('cursor-pointer', isOpen ? 'rotate-180 transform' : '')}
            onClick={() => setIsOpen((prev) => !prev)}
            icon="ri:arrow-down-s-line"
            height="30"
          />
        </div>
      </div>
      <div
        className={twMerge('border-top-0', isOpen ? 'block' : 'hidden')}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-2 ">{hiddenContent}</div>
      </div>
    </div>
  );
};

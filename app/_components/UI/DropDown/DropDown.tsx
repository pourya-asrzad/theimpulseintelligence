/* eslint-disable no-unused-vars */
import {FC, ReactNode, useEffect, useState} from 'react';
import {twMerge} from 'tailwind-merge';

interface IDropDownProps {
  items: IDropDownItem[];
  children: ReactNode;
  title?: string;
  icon?: string;
  onClick?: () => void;
}

interface IDropDownItem {
  title: string;
  onClick?: () => void;
}

export const DropDown: FC<IDropDownProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // close with ESC key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const {items, title, icon, onClick} = props;
  return (
    <div className="relative">
      <div className="">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block rounded-lg p-1.5 text-sm text-gray-500 focus:outline-none "
          onClick={() => {
            setIsExpanded(!isExpanded);
            onClick && onClick();
          }}
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          {props.children}
        </button>
        <div
          id="dropdown"
          className={twMerge(
            'absolute z-10 hidden w-44 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow ',
            isExpanded ? 'block' : 'hidden'
          )}
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            {items.map((item) => {
              return (
                <li key={item.title}>
                  <span onClick={item.onClick} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 ">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

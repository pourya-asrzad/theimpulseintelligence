'use client';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {Icon} from '@iconify/react/dist/iconify.js';
import {Card, CardBody} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';


function UseChat() {
  const t = useTranslations();
  const locale = useLocale();

  const list = [
    {
      title:t('subject_1'),
      explain:t('explain_1')
    },
    {
      title:t('subject_2'),
      explain:t('explain_1')
   
    },
    {
      title:t('subject_3'),
      explain:t('explain_3')
  
    },
    {
      title:t('subject_4'),
      explain:t('explain_4')
    },
   
   
    
 
  ];
  return (
    <div>
       <Dropdown >
      <DropdownTrigger >
        <Button 
        className="w-28 h-10 m-2" 
          variant="bordered" 
        >
      <span className="font-bold"> GPT4</span>
       <Icon icon="fluent-mdl2:chevron-down-med" color="black" className="font-bold" />

        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit", "delete"]}>
        <DropdownItem key="new">ChatGpt 4</DropdownItem>
        <DropdownItem key="copy">ChatGpt 3.5</DropdownItem>
    
      </DropdownMenu>
    </Dropdown>
    <div>
      <h1 className="font-semibold text-2xl	text-black text-center	">{t('use_chatGPT')}</h1>
      <p className="text-center font-medium	 text-xl mt-8 font-sans		" style={{ color: '#8A8A8A' }}>{t('Help')}</p>
    </div>
    <div className=" relative top-44 p-3  w-9/12">
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 ">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}  className="py-3">
          <CardBody className="overflow-visible p-0">
          <h2 className={`ml-3 text-base ${
    locale === 'en' ? 'text-left' : 'text-right mr-3'
}`}>{item.title}</h2>

            <h2 className={ `ml-3 text-base	text-sm	leading-normal	   ${
               locale === 'en' ? 'text-left' : 'text-right mr-3'
            } `} style={{ color: '#8A8A8A' }}>{item.explain}</h2>
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
    <div className="relative top-44 px-3 mt-3 flex flex-row h-16 w-11/12  ">
  
    <Textarea
      placeholder={t('use_chatGPT')}
      className="border border-[#8A8A8A] h-16 w-11/12 rounded-lg   "
      style={{ margin: '1rem' }}
    />
     <button>
     <div className={ `border border-[#8A8A8A] relative   rounded-full w-10 h-10 ${
        locale === 'en'? "right-14" : 'left-14'
     }`}>
    <Image
              alt="search"
              className="mt-2.5 mx-auto"
              width={20}
              height={20}
              src={'/pictures/Vector.png'}
              style={{ width: 20, height: 20 }} 
            />
    </div>
     </button>
   
    </div>
    </div>
    
  )
}

export default UseChat
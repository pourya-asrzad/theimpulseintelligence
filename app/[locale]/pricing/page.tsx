
'use client';

import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

import Layout from '@/app/_components/Layout/Layout';
import {useTranslations} from 'next-intl';
import {Button} from "@nextui-org/react";

function Price() {
  const t = useTranslations();
    const list = [
        {
        
          title:t('Free Trial'),
          price:"$5.50",
          explain:t('Free_package'),
          Benefit_A1:t('Benefit_F1'),
          Benefit_A2:t('Benefit_F2'),
          Benefit_A3:t('Benefit_F3'),
          Benefit_A4:t('Benefit_F4'),
          Benefit_A5:t('Benefit_F5'),
          Benefit_A6:t('Benefit_F6'),
        },
        {
          title:  t('Basic Plan'),
          price: "$3.00",
          explain:t('Basic_package'),
          Benefit_A1:t('Benefit_B1'),
          Benefit_A2:t('Benefit_B2'),
          Benefit_A3:t('Benefit_B3'),
          Benefit_A4:t('Benefit_B4'),
          Benefit_A5:t('Benefit_B5'),
          Benefit_A6:t('Benefit_B6'),
          Benefit_A7:t('Benefit_B7'),
        },
        {
          title:  t('Pro Plan'),
          price: "$10.00",
          explain:t('Pro_package'),
          Benefit_A1:t('Benefit_P1'),
          Benefit_A2:t('Benefit_P2'),
          Benefit_A3:t('Benefit_P3'),
          Benefit_A4:t('Benefit_P4'),
          Benefit_A5:t('Benefit_P5'),
          Benefit_A6:t('Benefit_P6'),
          Benefit_A7:t('Benefit_P7'),
          Benefit_A8:t('Benefit_P8'),
          Benefit_A9:t('Benefit_P9'),
          Benefit_A10:t('Benefit_P10'),

        },
        {
          title:  t('Agency Plans'),
          price: "$5.30",
          explain:t('Agency_package'),
          Benefit_A1:t('Benefit_A1'),
          Benefit_A2:t('Benefit_A2'),
          Benefit_A3:t('Benefit_P3'),
          Benefit_A4:t('Benefit_P4'),
          Benefit_A5:t('Benefit_A3'),
          Benefit_A6:t('Benefit_P6'),
          Benefit_A7:t('Benefit_P7'),
          Benefit_A8:t('Benefit_P8'),
          Benefit_A9:t('Benefit_P9'),
          Benefit_A10:t('Benefit_A4'),


        },
      
    
      ];
   
  return (
    <div>

    <Layout>
      <div className=" p-10 mx-auto  w-1/2 " >
    <div className="flex w-full flex-col p-1 ">
      <Tabs aria-label="Options" className="w-2/2 border border-primary rounded-lg mx-auto " color="primary">
        {/* <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab> */}
        <Tab key="music" title= {t('monthly')}>
     
          {/* <Card>
            {<CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody> }
          </Card>   */}
        </Tab>
        <Tab key="videos" title={t('yearly')}>
          {/* <Card>
            {<CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody> }
          </Card>   */}
        </Tab>
      </Tabs>
    </div>  
    </div>
    {/* <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-14 ">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
         
            <h2 className="font-bold m-2 p-2 mt-8">{item.title}</h2>
            <p>item</p>
            <span>2</span>
            <button>start</button>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
            <ul>
              <li>
4000 words/month


              <li>
5 AI images/month</li>
              <li>Access to Social Media Studio
</li>
              <li>No Credit Card Required</li>
</li>
            </ul>
          </CardFooter>
        </Card>
      ))}
    </div> */}
     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-14">
  {list.map((item, index) => (
    <Card key={index} className="mx-auto my-8 h-[40rem] border-1 border-gray-300 shadow-none max-w-[20rem]">
      <CardHeader className="flex flex-col items-center gap-2 text-center bg-blue-50		">
        <h2 className="font-bold m-2 p-2 mt-8 text-3xl	">{item.title}</h2>
        <p className="font-extralight text-current text-sm">{item.explain}</p>
        <span className="font-extrabold m-2 p-2 text-2xl">$22</span>
        <Button radius="full" className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white shadow-lg "> {t('start')} </Button>
        
      </CardHeader>
      <CardBody className=" flex flex-col items-left  p-5">
         
       <ul className="leading-loose  p-2 font-bold text-sm	">
        <li>{item.Benefit_A1}</li>
        <li>{item.Benefit_A2}</li>
        <li>{item.Benefit_A3}</li>
        <li>{item.Benefit_A4}</li>
        <li>{item.Benefit_A5}</li>
        <li>{item.Benefit_A6}</li>
        <li>{item.Benefit_A7}</li>
        <li>{item.Benefit_A8}</li>
        <li>{item.Benefit_A9}</li>
        <li>{item.Benefit_A10}</li>
       </ul>
      
       
       </CardBody>
       
    </Card>
  ))}
</section>

    </Layout>
    </div>
   
  )
}

export default Price
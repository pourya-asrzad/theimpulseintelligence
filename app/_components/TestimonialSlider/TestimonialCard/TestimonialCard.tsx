/* eslint-disable sort-imports */
// 'use client';
import {Card, CardHeader, CardBody, Image} from '@nextui-org/react';
import {useLocale} from 'next-intl';

export type TCardItem = {
  uniqueId: number;
  userName: string;
  location: string;
  comment: string;
  image: string;
};
function TestimonialCard({item}: {item: TCardItem}) {
  const locale = useLocale();
  return (
    <Card className="mx-auto my-8 h-[22rem] w-[90%] border-1 border-gray-300 px-4 py-4 shadow-none md:max-w-[20rem]">
      <CardHeader className="flex-col items-center gap-2 text-center">
        <Image alt="Profile Picture" className="h-[7rem] rounded-full object-cover pb-1" src={item.image} width={80} />
        <span className="text-xl md:text-[1.5rem]">{item.userName}</span>
        <span className="text-light ">{item.location}</span>
      </CardHeader>
      <CardBody className="items-start overflow-auto py-0 text-start">
        <span className={`text-[#4F5968 text-[0.8rem] font-light ${locale === 'fa' ? 'text-right' : 'text-left'}`}>
          {item.comment}
        </span>
      </CardBody>
    </Card>
  );
}
export default TestimonialCard;

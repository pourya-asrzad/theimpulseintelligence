import {Card, CardFooter, CardBody, CardHeader, Divider, Button} from '@nextui-org/react';
import Link from 'next/link';
import {AppRoutes} from '@/config/Routes';
import Image from 'next/image';
import ChatGpt from '@/public/pictures/chatgpt.png';
const page = () => {
  return (
    <section className="flex flex-col  gap-3  p-5  ">
      <h2 className="text-2xl font-bold text-[#212F44]">ChatGpt</h2>
      <div className="flex flex-col gap-4 sm:flex-row ">
        <Card
          isFooterBlurred
          radius="lg"
          className="flex h-44 w-44 items-center justify-center border-none sm:h-[180px] sm:w-[180px]"
        >
          <Image alt="ChatGpt" className="p-1" height={180} src={ChatGpt} width={180} />
      
          <CardFooter className="absolute  bottom-1 z-10 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
          <Link href={`${AppRoutes.DASHBOARD}${AppRoutes.CHATGPT}${AppRoutes.USECHAT}`}>
            <Button className=" bg-white/10 text-lg text-[#003D5A]" radius="md" size="sm">
              Use ChatGpt 4
            </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="flex h-44 w-44 items-center justify-center border-none sm:h-[180px] sm:w-[180px]"
        >
          <Image alt="ChatGpt" className="p-1" height={180} src={ChatGpt} width={180} />
       
          <CardFooter className="absolute  bottom-1 z-10  w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
          <Link href={`${AppRoutes.DASHBOARD}${AppRoutes.CHATGPT}${AppRoutes.USECHAT}`}>
            <Button className=" bg-white/10 text-lg text-[#003D5A]" radius="md" size="sm">
              Use ChatGpt 3.5
            </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-2 flex flex-col">
        <span className="text-xl font-bold">Saved Chats</span>
        {/* <hr className="h-[1px] bg-gray-400" /> */}
        <Divider />
      </div>
      <div>
        <Card className="max-w-[400px]">
          <CardHeader className="flex justify-between gap-3">
            <p className="text-md font-bold">Ui Ideas</p>
            <Button isIconOnly className="bg-white">
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Button>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </section>
  );
};

export default page;

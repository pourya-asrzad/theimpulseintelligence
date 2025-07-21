import {Card, CardHeader, Image} from '@nextui-org/react';
import Layout from '@/app/_components/Layout/Layout';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="flex flex-col items-center justify-between md:flex-row">
          <Card className="mx-auto my-8 h-[18rem] w-[90%] border-1 border-gray-300 px-4 py-4 shadow-none md:max-w-[20rem]">
            <CardHeader className="flex-col items-center gap-2 text-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3u3b0vZWqy12CF7b0MeaNjHr3K6Yuj1ungZaxxq_fDg&s"
                alt="Instagram"
                width={100}
              />
              <Link href="#">
                <span className="text-xl md:text-[1.5rem]">Rasp.ai</span>
              </Link>
              <span className="text-light ">Instagram</span>
            </CardHeader>
          </Card>
          <Card className="mx-auto my-8 h-[18rem] w-[90%] border-1 border-gray-300 px-4 py-4 shadow-none md:max-w-[20rem]">
            <CardHeader className="flex-col items-center gap-2 text-center">
              <Image
                alt="Linkdin"
                width={100}
                src="https://static.vecteezy.com/system/resources/previews/012/660/862/non_2x/linkedin-logo-on-transparent-isolated-background-free-vector.jpg"
              />
              <Link href="#">
                <span className="text-xl md:text-[1.5rem]">Rasp.ai</span>
              </Link>

              <span className="text-light ">Linkdin</span>
            </CardHeader>
          </Card>
          <Card className="mx-auto my-8 h-[18rem] w-[90%] border-1 border-gray-300 px-4 py-4 shadow-none md:max-w-[20rem]">
            <CardHeader className="flex-col items-center gap-2 text-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzG8FUkrUF5K8l0LoTss4EG0UMPiJbb2xIXQyHAVo9Lg&s"
                alt="email"
                width={100}
              />
              <span className="text-xl md:text-[1.5rem]">Rasp.ai@gmail.com</span>
              <span className="text-light ">Email</span>
            </CardHeader>
          </Card>
        </section>
      </Layout>
    </>
  );
};

export default Contact;

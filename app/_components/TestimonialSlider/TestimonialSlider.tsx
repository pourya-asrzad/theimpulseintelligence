'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Icon} from '@iconify/react/dist/iconify.js';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import {useLocale, useTranslations} from 'next-intl';

function TestimonialSlider() {
  const locale = useLocale();
  const t = useTranslations();
  const settings = {
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    centerMode: true,
    adaptiveHeight: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:
      locale === 'fa' ? (
        <Icon icon="fluent-mdl2:chevron-left-med" color="#010101" z={50} />
      ) : (
        <Icon icon="fluent-mdl2:chevron-right-med" color="#010101" z={50} />
      ),
    prevArrow:
      locale === 'fa' ? (
        <Icon icon="fluent-mdl2:chevron-right-med" color="#010101" z={50} />
      ) : (
        <Icon icon="fluent-mdl2:chevron-left-med" color="#010101" z={50} />
      ),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  const testimonial = [
    {
      uniqueId: 1,
      userName: t('Edward Xun.userName'),
      location: t('Edward Xun.loacation'),
      comment: t('Edward Xun.comment'),
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?dpr=2&h=200&w=120&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8fHwxNzExODE1NjA2fDA&ixlib=rb-4.0.3',
    },
    {
      uniqueId: 2,
      userName: t('Alex Warren.userName'),
      location: t('Alex Warren.loacation'),
      comment: t('Alex Warren.comment'),
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      uniqueId: 3,
      userName: t('Robert G.userName'),
      location: t('Robert G.loacation'),
      comment: t('Robert G.comment'),
      image:
        'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=',
    },
    {
      uniqueId: 4,
      userName: t('Emily Lopez.userName'),
      location: t('Emily Lopez.loacation'),
      comment: t('Emily Lopez.comment'),
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      uniqueId: 5,
      userName: t('Tom H.userName'),
      location: t('Tom H.loacation'),
      comment: t('Tom H.comment'),
      image:
        'https://images.unsplash.com/photo-1611608822650-925c227ef4d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      uniqueId: 6,
      userName: t('Lori Blair.userName'),
      location: t('Lori Blair.loacation'),
      comment: t('Lori Blair.comment'),
      image:
        'https://media.istockphoto.com/id/1460896518/photo/beautiful-middle-aged-woman.webp?b=1&s=170667a&w=0&k=20&c=UpEZVDcU8J30F3OgX-ysOCpZCvRkg83syWBzO5nnea8=',
    },
  ];

  return (
    <Slider {...settings} className="w-[80%] py-6 sm:w-[90%] lg:w-[95%]">
      {testimonial.map((item) => (
        <TestimonialCard key={item.uniqueId} item={item} />
      ))}
    </Slider>
  );
}

export default TestimonialSlider;

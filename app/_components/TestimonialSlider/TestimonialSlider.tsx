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
      userName: t('ArmanKangavari.userName'),
      location: t('ArmanKangavari.loacation'),
      comment: t('ArmanKangavari.comment'),
      image: '/pictures/arman-min.jpg',
    },
    {
      uniqueId: 2,
      userName: t('PouryaAsrzad.userName'),
      location: t('PouryaAsrzad.loacation'),
      comment: t('PouryaAsrzad.comment'),
      image:"/pictures/IMG-20250724-WA0032.jpg"},
    {
      uniqueId: 3,
      userName: t('MobinaKarimi.userName'),
      location: t('MobinaKarimi.loacation'),
      comment: t('MobinaKarimi.comment'),
      image:"/pictures/mobinakarimi.jpg"
    ,
    },
    {
      uniqueId: 4,
      userName: t('HamedEslamie.userName'),
      location: t('HamedEslamie.loacation'),
      comment: t('HamedEslamie.comment'),
      image:''
    }
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

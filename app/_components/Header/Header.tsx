'use client';

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  //
  NavbarMenuToggle,
} from '@nextui-org/react';
import {AppRoutes} from '@/config/Routes';
import {useState} from 'react';
import {useTranslations} from 'next-intl';
export default function Header() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} height={'5rem'} className="shadow-md">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        <NavbarBrand>
          <Link href="/">
            <p className="w-full cursor-pointer font-bold text-black">{t('appName')}</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-6 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href={AppRoutes.ABOUT} className="duration-800 group transition">
            {t('about')}
            <span className="duration-800 absolute bottom-0 block h-[.05rem] w-0 bg-[#0070ef] transition-all group-hover:w-full"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={AppRoutes.CONTACT} className="duration-800 group transition">
            {t('contact')}
            <span className="duration-800 absolute bottom-0 block h-[.05rem] w-0 bg-[#0070ef] transition-all group-hover:w-full"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={AppRoutes.DASHBOARD} className="duration-800 group transition">
            {t('dashboard')}
            <span className="duration-800 absolute bottom-0 block h-[.05rem] w-0 bg-[#0070ef] transition-all group-hover:w-full"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
         
          <Link color="foreground" href={AppRoutes.PRICING} className="duration-800 group transition">
            {t('pricing')}
            <span className="duration-800 primary absolute bottom-0 block h-[.05rem] w-0 bg-[#0070ef] transition-all group-hover:w-full"></span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href={AppRoutes.LOGIN}>{t('login')}</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href={AppRoutes.SIGNUP} variant="flat">
            {t('sign_up')}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <Link className="w-full" size="lg" color="foreground" href={AppRoutes.ABOUT}>
            {t('about')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="w-full" size="lg" color="foreground" href="#">
            {t('contact')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="w-full" size="lg" color="foreground" href={AppRoutes.DASHBOARD}>
            {t('dashboard')}
          </Link>
        </NavbarItem>
        <NavbarItem>
       
          <Link className="w-full" size="lg" color="foreground"href={AppRoutes.PRICING}>
            {t('pricing')}
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

// const Header = () => {
// const t = useTranslations();
//   return (
//     <div className="md:w-88% sticky top-5 z-50 mx-auto mb-10 flex justify-between rounded-[1.3rem] bg-white px-5 py-3 sm:w-[80%] md:rounded-[1.9rem] md:py-[1.3rem] lg:w-[75%] lg:shadow-2xl">
//       <span className="w-10 bg-yellow-600"></span>

//       <ul className="hidden items-center justify-between gap-8 text-[1.1rem] lg:flex  xl:gap-[4rem]">
//         <li className="flex items-center gap-1">
//           {t('about')} <Icon icon={'iconamoon:arrow-down-2-bold'} />
//         </li>
//         <li>{t('contact')}</li>
//         <li>{t('dashboard')}</li>
//         <li>{t('pricing')}</li>
//       </ul>

//       <div className="hidden gap-2 lg:flex">
//         <button className="cursor-pointer rounded-[1.5rem] border-1 border-black px-5 py-2 font-extralight">
//           {t('sign_up')}
//         </button>
//         <button className="cursor-pointer rounded-[1.5rem] bg-black px-5 py-2 font-extralight text-white">
//           {t('login')}
//         </button>
//       </div>
//       <Icon icon="basil:menu-outline" className="text-[2.3rem] lg:hidden" />
//     </div>
//   );
// };

// export default Header;

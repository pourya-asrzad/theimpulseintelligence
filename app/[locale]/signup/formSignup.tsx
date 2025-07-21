import {Button, Checkbox, Input} from '@nextui-org/react';
import {Controller, useForm} from 'react-hook-form';
import {checkBox, askSignIn, services, arrows} from '@/app/constants';
import {object, string, z} from 'zod';
import {useTranslations, useLocale} from 'next-intl';
import {AppRoutes} from '@/config/Routes';
import Link from 'next/link';
import {Props} from '@/app/[locale]/signup/index';
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';

const FormSignUp: React.FC<Props> = ({active, setActive}) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const iranPhoneRgex = new RegExp(
    /((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}/g
  );
  // const interNationalphoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

  const personalSchema = object({
    name: string().min(2, {message: t('required')}),
    lastName: string().min(2, {message: t('required')}),
    password: string().min(8, {message: t('passwordError')}),
    confirmPassword: string().min(8, {message: t('passwordError')}),
    email: string().email({message: t('emailError')}),
    phoneNumber: string().regex(iranPhoneRgex, t('invalid Number')),
  }).refine((data) => data.password === data.confirmPassword, {
    message: t('confrimPasswordErr'),
    path: ['confirmPassword'],
  });

  type personalSchemaType = z.infer<typeof personalSchema>;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<personalSchemaType>({
    resolver: zodResolver(personalSchema),
    mode: 'onSubmit',
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className={`${active ? 'sm:m-auto' : 'm-0'} m-0 flex flex-col gap-5`}>
      <div className="flex sm:hidden">
        <button
          className={`${
            active ? 'block' : 'hidden'
          } m-3 flex h-10 w-10 items-center justify-center rounded-full border-2 p-2 font-bold hover:shadow-md`}
          onClick={() => {
            setActive(false);
          }}
        >
          {locale === 'fa' && arrows.fa}
          {locale === 'en' && arrows.en}
        </button>
      </div>
      <section className={`${active ? 'flex' : 'hidden'} ml-0 flex-col gap-2 sm:ml-4`}>
        <h2 className="px-5 text-2xl font-semibold">{`${t('sign_up')} ${t('to')} ${t('appName')}`}</h2>
        <form className="flex flex-col gap-5 px-5 sm:gap-3 " id="signUpForm" onSubmit={onSubmit}>
          <div className="flex flex-col gap-3  sm:flex-row">
            <div className="flex w-full flex-col gap-1">
              <label className="font-bold">{t('Name')}</label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <Input
                    placeholder=" "
                    type="text"
                    size="lg"
                    isRequired
                    labelPlacement="outside"
                    variant={'bordered'}
                    className="font-bold"
                    {...field}
                  />
                )}
              />
              {errors.name?.message && <p className="text-red-500">{errors.name?.message}</p>}
            </div>
            <div className="flex w-full flex-col gap-1">
              <label className="font-bold">{t('lastName')}</label>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <Input
                    placeholder=" "
                    type="text"
                    size="lg"
                    isRequired
                    labelPlacement="outside"
                    variant={'bordered'}
                    className="font-bold"
                    {...field}
                  />
                )}
              />
              {errors.lastName?.message && <p className="text-red-500">{errors.lastName?.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-3  sm:flex-row">
            <div className="flex w-full flex-col gap-1">
              <label className="font-bold">{t('phoneNumber')}</label>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <Input
                    placeholder=" "
                    type="text"
                    size="lg"
                    isRequired
                    labelPlacement="outside"
                    variant={'bordered'}
                    className="font-bold"
                    {...field}
                  />
                )}
              />
              {errors.phoneNumber?.message && <p className="text-red-500">{errors.phoneNumber?.message}</p>}
            </div>
            <div className="flex w-full flex-col gap-1">
              <label className="font-bold">{t('Email')}</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <Input
                    placeholder=" "
                    type="text"
                    size="lg"
                    isRequired
                    labelPlacement="outside"
                    variant={'bordered'}
                    className="font-bold"
                    {...field}
                  />
                )}
              />
              {errors.email?.message && <p className="text-red-500">{errors.email?.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-3  sm:flex-row">
            <div className="flex w-full flex-col gap-1">
              <label className="font-bold">{t('Password')}</label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <Input
                    placeholder=" "
                    type="text"
                    size="lg"
                    isRequired
                    labelPlacement="outside"
                    variant={'bordered'}
                    className="font-bold"
                    {...field}
                  />
                )}
              />
              {errors.password?.message && <p className="text-red-500">{errors.password?.message}</p>}
            </div>
            <div className="flex w-full flex-col gap-1">
              <label className="font-bold">{t('confirmPassword')}</label>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <Input
                    placeholder=" "
                    type="text"
                    size="lg"
                    isRequired
                    labelPlacement="outside"
                    variant={'bordered'}
                    className="font-bold"
                    {...field}
                  />
                )}
              />
              {errors.confirmPassword?.message && <p className="text-red-500">{errors.confirmPassword?.message}</p>}
            </div>
          </div>

          <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
            {locale === 'fa' && checkBox.fa}
            {locale === 'en' && checkBox.en}
          </Checkbox>
          <Button
            type="submit"
            className="h-14 w-full rounded-full bg-black p-3 text-center font-bold text-white"
            form="signUpForm"
            isDisabled={!isSelected}
          >
            {t('sign_up')}
          </Button>
          <div className="flex justify-center text-sm text-slate-500">
            {' '}
            {locale === 'fa' && askSignIn.fa}
            {locale === 'en' && askSignIn.en}
            <Link className="text-blue-900 underline decoration-blue-900 " href={AppRoutes.LOGIN}>
              {t('login')}
            </Link>
          </div>
          <div className="mb-4 text-sm text-slate-500 ">
            {' '}
            {locale === 'fa' && services.fa}
            {locale === 'en' && services.en}
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormSignUp;

'use client';
import {Button} from '@nextui-org/react';
import React, {FC, useEffect, useRef, useState} from 'react';

interface Props {}
let currentOtpIndex: number = 0;

const OTPField: FC<Props> = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [activOtpIndex, setActiveOtpIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handelOnChange = ({target}: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) {
      setActiveOtpIndex(currentOtpIndex - 1);
    } else {
      setActiveOtpIndex(currentOtpIndex + 1);
    }

    setOtp(newOTP);
  };

  const handelOnKeyDown = ({key}: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOtpIndex = index;
    if (key === 'Backspace') setActiveOtpIndex(currentOtpIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activOtpIndex]);

  return (
    <>
      <form
        className="flex h-screen flex-col items-center justify-center gap-2 space-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          otp.includes('') ? alert('your input is empty') : console.log(otp);
        }}
      >
        <div className="flex gap-1">
          {otp.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  ref={index === activOtpIndex ? inputRef : null}
                  type="number"
                  className="spin-button-none h-12 w-12 rounded border-2 border-gray-400 bg-transparent text-center text-xl font-semibold text-gray-400 outline-none transition [appearance:textfield] focus:border-gray-700 focus:text-gray-700 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={handelOnChange}
                  onKeyDown={(e) => {
                    handelOnKeyDown(e, index);
                  }}
                  value={otp[index]}
                />
                {index === otp.length - 1 ? null : <span />}
              </React.Fragment>
            );
          })}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default OTPField;

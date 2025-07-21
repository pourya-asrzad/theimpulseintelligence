import React from 'react';
export type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type IFormInput = {
  Name?: string;
  UserName?: string;
  Password?: string;
  Email?: string;
};

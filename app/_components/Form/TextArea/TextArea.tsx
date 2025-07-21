/* eslint-disable sort-imports */
import React, {ChangeEvent} from 'react';
import {ErrorMessage} from '../../ErrorMessage';
import {DeepMap, FieldError} from 'react-hook-form';

interface TextAreaProps {
  value: string;
  label: string;
  rows: number;
  maximumNumberOfCharacters: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  placeholder?: string;
  name: string;
  errors?: DeepMap<Record<string, any>, FieldError>;
  onBlur?: () => void; // New prop to trigger revalidation
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  rows,
  label,
  maximumNumberOfCharacters,
  name,
  errors,
  onBlur, // Destructure the new prop
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const remainingCharacters = maximumNumberOfCharacters - value.length;
  const errorList = errors && errors[name];

  return (
    <div className="flex w-full flex-col gap-1">
      <h4 className="text-lg">{label}</h4>
      <textarea
        className={`w-full rounded-md border p-2 ${errorList ? 'border-red-500' : 'border-gray-200'}`}
        rows={rows}
        value={value}
        onChange={handleChange}
        onBlur={onBlur} // Use the onBlur event to trigger revalidation
        placeholder={placeholder}
        name={name}
      />
      {maximumNumberOfCharacters && <p>{remainingCharacters} حرف متاح </p>}
      {errorList && <ErrorMessage>{errorList._errors}</ErrorMessage>}
    </div>
  );
};

export default TextArea;

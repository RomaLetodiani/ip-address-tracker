import { useState } from 'react';

export const useInput = (validate: (value: string) => boolean) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = validate(value);
  const hasError = !isValid && touched;
  const reset = () => {
    setValue('');
    setTouched(false);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setTouched(true);
  };

  return {
    value,
    onChange,
    onBlur,
    hasError,
    reset,
  };
};

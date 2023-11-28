import Button from '../button';

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  hasError: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Input = ({
  handleSubmit,
  placeholder,
  value,
  onChange,
  onBlur,
  hasError,
}: Props) => {
  return (
    <form onSubmit={handleSubmit} className="relative max-w-[450px] w-full">
      <div className="rounded-xl overflow-hidden w-full flex justify-center items-center">
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="w-full p-3 pl-5 "
          placeholder={placeholder}
        />
        <Button />
      </div>
      {hasError && (
        <p className="pl-5 absolute z-10 -bottom-5 left-0 text-red-500 text-[10px] sm:text-xs font-bold">
          Can't be empty
        </p>
      )}
    </form>
  );
};

export default Input;

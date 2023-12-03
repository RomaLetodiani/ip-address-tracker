import { useInput } from '@/hooks/useInput';
import Input from '../UI/input';
import InfoDiv from '../info';

const Header = ({
  setSearch,
  values,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  values: string[];
}) => {
  const {
    value: inputValue,
    hasError: inputHasError,
    onChange: handleChange,
    onBlur: handleBlur,
    reset: resetInput,
  } = useInput((value) => value.trim() !== '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputValue.match(
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      )
    ) {
      setSearch(inputValue);
      resetInput();
    } else {
      alert('Invalid IP address');
    }
  };
  return (
    <header className="header-bg-mobile header-bg p-5 flex-1 flex justify-center">
      <div className="w-full z-[500] max-w-lg sm:max-w-4xl p-5 absolute flex flex-col gap-5 sm:gap-12 items-center">
        <h1 className="text-xl sm:text-3xl text-center text-[#FFFFFF] tracking-widest font-bold">
          IP Address Tracker
        </h1>
        <Input
          handleSubmit={handleSubmit}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={inputHasError}
          placeholder="Search for any IP address or domain"
        />
        {values.length > 0 && <InfoDiv values={values} />}
      </div>
    </header>
  );
};

export default Header;

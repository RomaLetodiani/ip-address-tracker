import arrow from '@/assets/images/icon-arrow.svg';

const Button = () => {
  return (
    <button
      className="w-16 h-12 flex justify-center items-center transition-all  bg-primary hover:bg-secondary"
      type="submit"
    >
      <img src={arrow} alt=">" />
    </button>
  );
};

export default Button;

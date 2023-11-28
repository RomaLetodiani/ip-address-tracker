type Props = {
  title: string;
  value: string | number;
  last: boolean;
};

const Item = ({ last, title, value }: Props) => {
  return (
    <div
      className={`${
        !last && 'sm:border-r-[2px] sm:pr-10 sm:border-secondary'
      }} text-center sm:text-left`}
    >
      <p className="text-secondary m:mb-3 text-xs font-bold">{title}</p>
      <h2 className="xs:text-xl sm:text-2xl text-primary font-bold">{value}</h2>
    </div>
  );
};

export default Item;

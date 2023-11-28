import Item from './item/index.tsx';

const InfoDiv = ({ values }: { values: string[] }) => {
  const titles = ['IP ADDRESS', 'LOCATION', 'TIMEZONE', 'ISP'] as const;

  return (
    <div className="w-full p-5 sm:p-8 bg-[#FFFFFF] rounded-xl shadow-2xl flex flex-col sm:flex-row justify-between gap-3 sm:gap-5">
      {titles.map((title, index) => (
        <Item
          last={index === titles.length - 1}
          key={index}
          title={title}
          value={values[index]}
        />
      ))}
    </div>
  );
};

export default InfoDiv;

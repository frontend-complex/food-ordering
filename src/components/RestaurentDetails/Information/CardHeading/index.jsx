const CardHeading = ({ img, title }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <img src={img} />
      <h2 className="text-[32px] font-bold ">{title}</h2>
    </div>
  );
};
export default CardHeading;

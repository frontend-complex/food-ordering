/* eslint-disable react/prop-types */
const IconButton = ({ title, icon }) => {
  return (
    <button className="bg-black text-white flex flex-row items-center gap-4 py-4 px-5 rounded-full">
      <div className="text-2xl font-bold">{icon()}</div>
      {title}
    </button>
  );
};
export default IconButton;
